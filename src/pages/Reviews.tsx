
// src/pages/Reviews.tsx
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Review, FilterOptions, PaginationInfo, AdDetectionResult } from '../types';
import { categories } from '../data/mockData';
import { reviewService } from '../api/reviewService';
import { adDetectionService } from '../services/adDetectionService';
import { theme, Container, Section, SectionTitle, Input, Button } from '../styles/GlobalStyle';

interface ProductGroup {
  productName: string;
  productBrand: string;
  category: string;
  imageUrl: string;
  reviews: Review[];
  averageRating: number;
  averageTrustScore: number;
  reviewCount: number;
}

const Reviews: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allGroups, setAllGroups] = useState<ProductGroup[]>([]);
  const [displayedGroups, setDisplayedGroups] = useState<ProductGroup[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilterOptions>({
    category: searchParams.get('category') || '',
    keyword: searchParams.get('keyword') || '',
    minRating: undefined,
    sortBy: (searchParams.get('sort') as FilterOptions['sortBy']) || 'reviewCount'
  });
  
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1, totalPages: 1, totalItems: 0, itemsPerPage: 10 // 제품 그룹 단위로 페이지네이션 (페이지당 5개 제품)
  });

  useEffect(() => {
    fetchAndGroupReviews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    // 페이지네이션 처리
    const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    setDisplayedGroups(allGroups.slice(startIndex, endIndex));
  }, [pagination.currentPage, allGroups, pagination.itemsPerPage]);

  const groupReviews = (reviews: Review[]): ProductGroup[] => {
    const groups: { [key: string]: ProductGroup } = {};

    reviews.forEach(review => {
      if (!groups[review.productName]) {
        groups[review.productName] = {
          productName: review.productName,
          productBrand: review.productBrand || '',
          category: review.category,
          imageUrl: review.imageUrl,
          reviews: [],
          averageRating: 0,
          averageTrustScore: 0,
          reviewCount: 0
        };
      }
      groups[review.productName].reviews.push(review);
    });

    return Object.values(groups).map(group => {
      const totalRating = group.reviews.reduce((sum, r) => sum + r.rating, 0);
      const totalTrust = group.reviews.reduce((sum, r) => sum + r.trustScore, 0);
      const count = group.reviews.length;
      
      return {
        ...group,
        averageRating: totalRating / count,
        averageTrustScore: Math.round(totalTrust / count),
        reviewCount: count
      };
    });
  };

  const fetchAndGroupReviews = async () => {
    setIsLoading(true);
    try {
      // 1. 필터에 맞는 모든 리뷰를 가져옴
      const data = await reviewService.getReviews(filters);
      
      // 2. 제품별로 그룹핑
      const groups = groupReviews(data);

      // 그룹 정렬
      if (filters.sortBy === 'reviewCount') {
        groups.sort((a, b) => b.reviewCount - a.reviewCount);
      } else if (filters.sortBy === 'rating') {
        groups.sort((a, b) => b.averageRating - a.averageRating);
      } else if (filters.sortBy === 'trustScore') {
        groups.sort((a, b) => b.averageTrustScore - a.averageTrustScore);
      }
      
      setAllGroups(groups);
      setPagination(prev => ({
        ...prev,
        currentPage: 1, // 필터 변경 시 1페이지로 리셋
        totalItems: groups.length,
        totalPages: Math.ceil(groups.length / prev.itemsPerPage)
      }));

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    const params = new URLSearchParams();
    if (updatedFilters.category) params.set('category', updatedFilters.category);
    if (updatedFilters.keyword) params.set('keyword', updatedFilters.keyword);
    if (updatedFilters.sortBy) params.set('sort', updatedFilters.sortBy);
    setSearchParams(params);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchAndGroupReviews();
  };

  const handlePageChange = (newPage: number) => {
    setPagination(prev => ({ ...prev, currentPage: newPage }));
    window.scrollTo(0, 0);
  };

  return (
    <ReviewsContainer>
      <Container>
        <PageHeader>
          <SectionTitle>제품별 리뷰 모아보기</SectionTitle>
          <HeaderActions>
            <Button as={Link} to="/write-review">리뷰 작성하기</Button>
          </HeaderActions>
        </PageHeader>

        <FilterSection>
          <SearchForm onSubmit={handleSearch}>
            <SearchInput
              type="text"
              placeholder="제품명이나 키워드로 검색하세요..."
              value={filters.keyword}
              onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
            />
            <Button type="submit">🔍 검색</Button>
          </SearchForm>
          
          <FilterRow>
            <FilterGroup>
              <FilterLabel>카테고리:</FilterLabel>
              <CategoryFilter>
                <CategoryButton active={!filters.category} onClick={() => handleFilterChange({ category: '' })}>전체</CategoryButton>
                {categories.map((cat) => (
                  <CategoryButton key={cat.value} active={filters.category === cat.value} onClick={() => handleFilterChange({ category: cat.value })}>
                    {cat.icon} {cat.label}
                  </CategoryButton>
                ))}
              </CategoryFilter>
            </FilterGroup>
            
            <FilterGroup>
              <FilterLabel>정렬:</FilterLabel>
              <Select value={filters.sortBy} onChange={(e) => handleFilterChange({ sortBy: e.target.value as any })}>
                <option value="reviewCount">리뷰 많은 순</option>
                <option value="recent">최신순</option>
                <option value="trustScore">신뢰도순</option>
                <option value="helpful">도움됨순</option>
                <option value="rating">평점순</option>
              </Select>
            </FilterGroup>
          </FilterRow>
        </FilterSection>

        <Section>
          {isLoading ? (
            <LoadingMessage>리뷰를 불러오는 중입니다...</LoadingMessage>
          ) : displayedGroups.length === 0 ? (
            <EmptyMessage>
              <EmptyIcon>😔</EmptyIcon>
              <EmptyText>조건에 맞는 제품이 없습니다.</EmptyText>
              <Button onClick={() => setFilters({ category: '', keyword: '', minRating: undefined, sortBy: 'reviewCount' })}>필터 초기화</Button>
            </EmptyMessage>
          ) : (
            <>
              <ProductList>
                {displayedGroups.map((group) => (
                  <ProductGroupItem key={group.productName} group={group} />
                ))}
              </ProductList>
              
              {/* 페이지네이션 UI */}
              {pagination.totalPages > 1 && (
                <PaginationContainer>
                  <PageButton 
                    disabled={pagination.currentPage === 1} 
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                  >
                    &lt;
                  </PageButton>
                  {[...Array(pagination.totalPages)].map((_, i) => (
                    <PageButton 
                      key={i + 1} 
                      active={pagination.currentPage === i + 1}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </PageButton>
                  ))}
                  <PageButton 
                    disabled={pagination.currentPage === pagination.totalPages} 
                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                  >
                    &gt;
                  </PageButton>
                </PaginationContainer>
              )}
            </>
          )}
        </Section>
      </Container>
    </ReviewsContainer>
  );
};

// Sub-component for Product Group Item
const ProductGroupItem: React.FC<{ group: ProductGroup }> = ({ group }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [adResults, setAdResults] = useState<Record<string, AdDetectionResult>>({});
  const [loadingAds, setLoadingAds] = useState<Record<string, boolean>>({});
  const ITEMS_PER_PAGE = 12;

  const handleCheckAd = async (e: React.MouseEvent, review: Review) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (adResults[review._id] || loadingAds[review._id]) return;

    setLoadingAds(prev => ({ ...prev, [review._id]: true }));
    try {
      const result = await adDetectionService.checkAdLikelihood(review);
      setAdResults(prev => ({ ...prev, [review._id]: result }));
    } catch (error) {
      console.error('Failed to check ad likelihood', error);
      alert('광고 분석에 실패했습니다.');
    } finally {
      setLoadingAds(prev => ({ ...prev, [review._id]: false }));
    }
  };

  // Reset pagination when group changes (e.g. filtering)
  useEffect(() => {
    setCurrentPage(1);
  }, [group.reviews]);

  const getTrustBadgeColor = (score: number): string => {
    if (score >= 90) return theme.colors.trust.excellent;
    if (score >= 70) return theme.colors.trust.good;
    if (score >= 50) return theme.colors.trust.fair;
    return theme.colors.trust.poor;
  };

  const totalPages = Math.ceil(group.reviews.length / ITEMS_PER_PAGE);
  const currentReviews = group.reviews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // Optional: scroll to top of review list if needed
    // const element = document.getElementById(`review-list-${group.productName}`);
    // if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ProductCardWrapper>
      <ProductHeader onClick={() => setIsExpanded(!isExpanded)}>
        <ProductImage src={group.imageUrl} alt={group.productName} />
        <ProductInfoMain>
          <ProductBrand>{group.productBrand}</ProductBrand>
          <ProductTitle>{group.productName}</ProductTitle>
          <ProductStats>
            <StatItem>
              <Stars>{'★'.repeat(Math.floor(group.averageRating))}{group.averageRating % 1 !== 0 && '½'}</Stars>
              <StatValue>{group.averageRating.toFixed(1)}</StatValue>
            </StatItem>
            <StatDivider />
            <StatItem>
              <StatLabel>평균 신뢰도</StatLabel>
              <TrustScoreText color={getTrustBadgeColor(group.averageTrustScore)}>
                {group.averageTrustScore}%
              </TrustScoreText>
            </StatItem>
            <StatDivider />
            <StatItem>
              <StatLabel>리뷰</StatLabel>
              <StatValue>{group.reviewCount}개</StatValue>
            </StatItem>
          </ProductStats>
        </ProductInfoMain>
        <ExpandButton isExpanded={isExpanded}>
          {isExpanded ? '접기 ▲' : '리뷰 보기 ▼'}
        </ExpandButton>
      </ProductHeader>

      {isExpanded && (
        <ReviewListContainer>
          <ReviewListHeader>
            <ReviewListTitle>등록된 리뷰 {group.reviewCount}개</ReviewListTitle>
          </ReviewListHeader>
          <ReviewGrid>
            {currentReviews.map((review) => (
              <ReviewCard key={review._id} to={`/review/${review._id}`}>
                <ReviewCardHeader>
                  <ReviewUser>
                    <UserIcon>👤</UserIcon>
                    <UserName>{review.author}</UserName>
                  </ReviewUser>
                  <TrustBadgeSmall color={getTrustBadgeColor(review.trustScore)}>
                    신뢰도 {review.trustScore}%
                  </TrustBadgeSmall>
                </ReviewCardHeader>
                <ReviewCardContent>
                  <ReviewTitle>{review.title}</ReviewTitle>
                  <RatingRowSmall>
                    <StarsSmall>★ {review.rating.toFixed(1)}</StarsSmall>
                    <DateText>{new Date(review.created_at).toLocaleDateString()}</DateText>
                  </RatingRowSmall>
                  <ReviewSnippet>{review.content.substring(0, 100)}...</ReviewSnippet>
                  
                  <AdDetectionSection>
                    {!adResults[review._id] ? (
                      <AdCheckButton 
                        onClick={(e) => handleCheckAd(e, review)}
                        disabled={loadingAds[review._id]}
                      >
                        {loadingAds[review._id] ? '분석 중...' : '🕵️ 광고 분석'}
                      </AdCheckButton>
                    ) : (
                      <AdResultBadge isAd={adResults[review._id].isAdLike}>
                        {adResults[review._id].isAdLike ? '🚫 광고 의심' : '✅ 클린 리뷰'}
                        <AdScore>({adResults[review._id].adScore}점)</AdScore>
                        {adResults[review._id].isAdLike && adResults[review._id].reasons.length > 0 && (
                          <AdReasons>
                            {adResults[review._id].reasons.map((reason, idx) => (
                              <AdReason key={idx}>• {reason}</AdReason>
                            ))}
                          </AdReasons>
                        )}
                      </AdResultBadge>
                    )}
                  </AdDetectionSection>
                </ReviewCardContent>
              </ReviewCard>
            ))}
          </ReviewGrid>

          {/* Pagination for reviews within the group */}
          {totalPages > 1 && (
            <PaginationContainer style={{ marginTop: '24px' }}>
              <PageButton 
                disabled={currentPage === 1} 
                onClick={(e) => { e.stopPropagation(); handlePageChange(currentPage - 1); }}
              >
                &lt;
              </PageButton>
              {[...Array(totalPages)].map((_, i) => (
                <PageButton 
                  key={i + 1} 
                  active={currentPage === i + 1}
                  onClick={(e) => { e.stopPropagation(); handlePageChange(i + 1); }}
                >
                  {i + 1}
                </PageButton>
              ))}
              <PageButton 
                disabled={currentPage === totalPages} 
                onClick={(e) => { e.stopPropagation(); handlePageChange(currentPage + 1); }}
              >
                &gt;
              </PageButton>
            </PaginationContainer>
          )}
        </ReviewListContainer>
      )}
    </ProductCardWrapper>
  );
};

export default Reviews;

// Styled components
const ReviewsContainer = styled.div`width: 100%; min-height: 100vh; padding: ${theme.spacing.xl} 0;`;
const PageHeader = styled.div`display: flex; justify-content: space-between; align-items: center; margin-bottom: ${theme.spacing.xl};`;
const HeaderActions = styled.div`display: flex; gap: ${theme.spacing.md};`;
const FilterSection = styled.div`background: ${theme.colors.white}; padding: ${theme.spacing.xl}; border-radius: ${theme.borderRadius.lg}; box-shadow: ${theme.shadows.base}; margin-bottom: ${theme.spacing.xl};`;
const SearchForm = styled.form`display: flex; gap: ${theme.spacing.md}; margin-bottom: ${theme.spacing.lg};`;
const SearchInput = styled(Input)`flex: 1;`;
const FilterRow = styled.div`display: flex; flex-wrap: wrap; gap: ${theme.spacing.lg}; align-items: center;`;
const FilterGroup = styled.div`display: flex; align-items: center; gap: ${theme.spacing.sm};`;
const FilterLabel = styled.label`font-size: ${theme.typography.fontSize.sm}; font-weight: ${theme.typography.fontWeight.medium}; color: ${theme.colors.gray[700]};`;
const CategoryFilter = styled.div`display: flex; flex-wrap: wrap; gap: ${theme.spacing.sm};`;
const CategoryButton = styled.button<{ active: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.md}; font-size: ${theme.typography.fontSize.sm}; font-weight: ${theme.typography.fontWeight.medium};
  border-radius: ${theme.borderRadius.full}; border: 2px solid ${props => props.active ? theme.colors.primary : theme.colors.gray[300]};
  background-color: ${props => props.active ? theme.colors.primary : theme.colors.white};
  color: ${props => props.active ? theme.colors.white : theme.colors.gray[700]}; cursor: pointer; transition: all 0.2s ease;
  &:hover { border-color: ${theme.colors.primary}; }
`;
const Select = styled.select`padding: ${theme.spacing.sm} ${theme.spacing.md}; border-radius: ${theme.borderRadius.md}; border: 1px solid ${theme.colors.gray[300]};`;

const LoadingMessage = styled.div`text-align: center; padding: 40px; color: ${theme.colors.gray[600]};`;
const EmptyMessage = styled.div`text-align: center; padding: 40px;`;
const EmptyIcon = styled.div`font-size: 48px; margin-bottom: 16px;`;
const EmptyText = styled.p`color: ${theme.colors.gray[600]}; margin-bottom: 16px;`;

// Product List Styles
const ProductList = styled.div`display: flex; flex-direction: column; gap: 24px;`;
const ProductCardWrapper = styled.div`
  background: ${theme.colors.white}; border-radius: 12px; box-shadow: ${theme.shadows.base}; overflow: hidden;
  transition: box-shadow 0.2s;
  &:hover { box-shadow: ${theme.shadows.lg}; }
`;
const ProductHeader = styled.div`
  display: flex; padding: 20px; gap: 24px; cursor: pointer; align-items: center;
  @media (max-width: 768px) { flex-direction: column; align-items: flex-start; gap: 16px; }
`;
const ProductImage = styled.img`
  width: 120px; height: 120px; object-fit: cover; border-radius: 8px; border: 1px solid ${theme.colors.gray[200]};
  @media (max-width: 768px) { width: 100%; height: 200px; }
`;
const ProductInfoMain = styled.div`flex: 1;`;
const ProductBrand = styled.div`font-size: 14px; color: ${theme.colors.gray[500]}; margin-bottom: 4px;`;
const ProductTitle = styled.h3`font-size: 20px; font-weight: bold; margin-bottom: 12px; color: ${theme.colors.gray[900]};`;
const ProductStats = styled.div`display: flex; align-items: center; gap: 16px; flex-wrap: wrap;`;
const StatItem = styled.div`display: flex; align-items: center; gap: 6px;`;
const StatLabel = styled.span`font-size: 13px; color: ${theme.colors.gray[500]};`;
const StatValue = styled.span`font-weight: bold; color: ${theme.colors.gray[800]};`;
const StatDivider = styled.div`width: 1px; height: 12px; background: ${theme.colors.gray[300]};`;
const Stars = styled.div`color: ${theme.colors.warning}; font-size: 18px;`;
const TrustScoreText = styled.span<{ color: string }>`font-weight: bold; color: ${props => props.color};`;

const ExpandButton = styled.button<{ isExpanded: boolean }>`
  padding: 8px 16px; border-radius: 20px; border: 1px solid ${theme.colors.primary};
  background: ${props => props.isExpanded ? theme.colors.primary : 'transparent'};
  color: ${props => props.isExpanded ? 'white' : theme.colors.primary};
  font-weight: 600; cursor: pointer; transition: all 0.2s;
  &:hover { background: ${theme.colors.primary}; color: white; }
`;

// Expanded Review List Styles
const ReviewListContainer = styled.div`
  background: ${theme.colors.background.secondary}; padding: 24px; border-top: 1px solid ${theme.colors.gray[200]};
`;
const ReviewListHeader = styled.div`margin-bottom: 16px; font-weight: bold; color: ${theme.colors.gray[700]};`;
const ReviewListTitle = styled.h4`font-size: 16px;`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  justify-content: center;
`;
const ReviewCard = styled(Link)`
  background: white; border-radius: 8px; padding: 16px; text-decoration: none; color: inherit;
  box-shadow: ${theme.shadows.sm}; display: flex; flex-direction: column; height: 100%;
  transition: transform 0.2s;
  &:hover { transform: translateY(-3px); }
`;
const ReviewCardHeader = styled.div`display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;`;
const ReviewUser = styled.div`display: flex; align-items: center; gap: 6px; font-size: 13px; color: ${theme.colors.gray[600]};`;
const UserIcon = styled.span``;
const UserName = styled.span`font-weight: 500;`;
const TrustBadgeSmall = styled.div<{ color: string }>`
  background: ${props => props.color}; color: white; font-size: 10px; padding: 2px 6px; border-radius: 10px; font-weight: bold;
`;
const ReviewCardContent = styled.div`flex: 1; margin-bottom: 12px;`;
const ReviewTitle = styled.div`font-weight: bold; margin-bottom: 6px; font-size: 15px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`;
const RatingRowSmall = styled.div`display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 8px; color: ${theme.colors.gray[500]};`;
const StarsSmall = styled.span`color: ${theme.colors.warning}; font-weight: bold;`;
const DateText = styled.span``;
const ReviewSnippet = styled.p`
  font-size: 13px; color: ${theme.colors.gray[600]}; line-height: 1.5; 
  overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;
`;

// Pagination Styles
const PaginationContainer = styled.div`display: flex; justify-content: center; gap: 8px; margin-top: 40px;`;
const PageButton = styled.button<{ active?: boolean }>`
  width: 36px; height: 36px; border-radius: 8px; border: 1px solid ${props => props.active ? theme.colors.primary : theme.colors.gray[300]};
  background: ${props => props.active ? theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : theme.colors.gray[700]};
  font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center;
  &:disabled { opacity: 0.5; cursor: not-allowed; }
  &:hover:not(:disabled) { border-color: ${theme.colors.primary}; color: ${props => props.active ? 'white' : theme.colors.primary}; }
`;

const AdDetectionSection = styled.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed ${theme.colors.gray[200]};
`;

const AdCheckButton = styled.button`
  background: ${theme.colors.gray[100]};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    background: ${theme.colors.gray[200]};
  }
  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;

const AdResultBadge = styled.div<{ isAd: boolean }>`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.isAd ? theme.colors.danger : theme.colors.success};
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const AdScore = styled.span`
  font-weight: normal;
  color: ${theme.colors.gray[600]};
  font-size: 11px;
`;

const AdReasons = styled.div`
  margin-top: 4px;
  font-size: 11px;
  color: ${theme.colors.gray[700]};
  background: ${theme.colors.gray[50]};
  padding: 4px;
  border-radius: 4px;
`;

const AdReason = styled.div`
  margin-bottom: 2px;
`;
