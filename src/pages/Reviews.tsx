// src/pages/Reviews.tsx

import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Review, FilterOptions, PaginationInfo } from '../types';
import { mockReviews, categories } from '../data/mockData';
import { 
  theme, 
  Container, 
  Section, 
  SectionTitle, 
  Input, 
  Button,
  Grid 
} from '../styles/GlobalStyle';

const Reviews: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilterOptions>({
    category: searchParams.get('category') || '',
    keyword: searchParams.get('keyword') || '',
    minRating: undefined,
    verifiedOnly: searchParams.get('verified') === 'true',
    sortBy: (searchParams.get('sort') as FilterOptions['sortBy']) || 'recent'
  });
  
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 12
  });

  useEffect(() => {
    fetchReviews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, pagination.currentPage]);

  const fetchReviews = async () => {
    setIsLoading(true);
    
    // 실제로는 API 호출
    setTimeout(() => {
      let filteredReviews = [...mockReviews];
      
      // 카테고리 필터
      if (filters.category) {
        filteredReviews = filteredReviews.filter(r => r.category === filters.category);
      }
      
      // 키워드 검색
      if (filters.keyword) {
        filteredReviews = filteredReviews.filter(r => 
          r.title.toLowerCase().includes(filters.keyword!.toLowerCase()) ||
          r.productName.toLowerCase().includes(filters.keyword!.toLowerCase()) ||
          r.content.toLowerCase().includes(filters.keyword!.toLowerCase())
        );
      }
      
      // 구매 인증 필터
      if (filters.verifiedOnly) {
        filteredReviews = filteredReviews.filter(r => r.verifiedPurchase);
      }
      
      // 최소 평점 필터
      if (filters.minRating) {
        filteredReviews = filteredReviews.filter(r => r.rating >= filters.minRating!);
      }
      
      // 정렬
      switch (filters.sortBy) {
        case 'trustScore':
          filteredReviews.sort((a, b) => b.trustScore - a.trustScore);
          break;
        case 'helpful':
          filteredReviews.sort((a, b) => b.helpfulVotes - a.helpfulVotes);
          break;
        case 'rating':
          filteredReviews.sort((a, b) => b.rating - a.rating);
          break;
        default: // recent
          filteredReviews.sort((a, b) => 
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
      }
      
      setPagination(prev => ({
        ...prev,
        totalItems: filteredReviews.length,
        totalPages: Math.ceil(filteredReviews.length / prev.itemsPerPage)
      }));
      
      setReviews(filteredReviews);
      setIsLoading(false);
    }, 500);
  };

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    
    // URL 파라미터 업데이트
    const params = new URLSearchParams();
    if (updatedFilters.category) params.set('category', updatedFilters.category);
    if (updatedFilters.keyword) params.set('keyword', updatedFilters.keyword);
    if (updatedFilters.verifiedOnly) params.set('verified', 'true');
    if (updatedFilters.sortBy) params.set('sort', updatedFilters.sortBy);
    setSearchParams(params);
    
    setPagination(prev => ({ ...prev, currentPage: 1 }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchReviews();
  };

  const getTrustBadgeColor = (score: number): string => {
    if (score >= 90) return theme.colors.trust.excellent;
    if (score >= 70) return theme.colors.trust.good;
    if (score >= 50) return theme.colors.trust.fair;
    return theme.colors.trust.poor;
  };

  const getTrustBadgeText = (score: number): string => {
    if (score >= 90) return '매우 신뢰';
    if (score >= 70) return '신뢰';
    if (score >= 50) return '보통';
    return '주의';
  };

  return (
    <ReviewsContainer>
      <Container>
        <PageHeader>
          <SectionTitle>제품 리뷰</SectionTitle>
          <HeaderActions>
            <Button as={Link} to="/write-review">리뷰 작성하기</Button>
          </HeaderActions>
        </PageHeader>

        {/* 검색 및 필터 */}
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
                <CategoryButton
                  active={!filters.category}
                  onClick={() => handleFilterChange({ category: '' })}
                >
                  전체
                </CategoryButton>
                {categories.map((cat) => (
                  <CategoryButton
                    key={cat.value}
                    active={filters.category === cat.value}
                    onClick={() => handleFilterChange({ category: cat.value })}
                  >
                    {cat.icon} {cat.label}
                  </CategoryButton>
                ))}
              </CategoryFilter>
            </FilterGroup>
            
            <FilterGroup>
              <FilterLabel>정렬:</FilterLabel>
              <Select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange({ sortBy: e.target.value as FilterOptions['sortBy'] })}
              >
                <option value="recent">최신순</option>
                <option value="trustScore">신뢰도순</option>
                <option value="helpful">도움됨순</option>
                <option value="rating">평점순</option>
              </Select>
            </FilterGroup>
            
            <FilterGroup>
              <FilterLabel>최소 평점:</FilterLabel>
              <Select
                value={filters.minRating || ''}
                onChange={(e) => handleFilterChange({ 
                  minRating: e.target.value ? parseFloat(e.target.value) : undefined 
                })}
              >
                <option value="">전체</option>
                <option value="4.5">4.5 이상</option>
                <option value="4.0">4.0 이상</option>
                <option value="3.0">3.0 이상</option>
              </Select>
            </FilterGroup>
            
            <CheckboxGroup>
              <Checkbox
                type="checkbox"
                id="verified"
                checked={filters.verifiedOnly}
                onChange={(e) => handleFilterChange({ verifiedOnly: e.target.checked })}
              />
              <CheckboxLabel htmlFor="verified">
                ✓ 구매인증만 보기
              </CheckboxLabel>
            </CheckboxGroup>
          </FilterRow>
        </FilterSection>

        {/* 검색 결과 요약 */}
        <ResultSummary>
          총 <strong>{pagination.totalItems}</strong>개의 리뷰
          {filters.keyword && <span> - "{filters.keyword}" 검색 결과</span>}
          {filters.category && <span> - {filters.category}</span>}
        </ResultSummary>

        {/* 리뷰 목록 */}
        <Section>
          {isLoading ? (
            <LoadingMessage>리뷰를 불러오는 중입니다...</LoadingMessage>
          ) : reviews.length === 0 ? (
            <EmptyMessage>
              <EmptyIcon>😔</EmptyIcon>
              <EmptyText>조건에 맞는 리뷰가 없습니다.</EmptyText>
              <Button onClick={() => setFilters({
                category: '',
                keyword: '',
                minRating: undefined,
                verifiedOnly: false,
                sortBy: 'recent'
              })}>
                필터 초기화
              </Button>
            </EmptyMessage>
          ) : (
            <>
              <ReviewGrid>
                {reviews.map((review) => (
                  <ReviewCard key={review._id} to={`/review/${review._id}`}>
                    <ReviewImageWrapper>
                      <ReviewImage src={review.imageUrl} alt={review.title} />
                      {review.verifiedPurchase && (
                        <VerifiedBadge>✓ 구매인증</VerifiedBadge>
                      )}
                      <TrustScoreBadge color={getTrustBadgeColor(review.trustScore)}>
                        {getTrustBadgeText(review.trustScore)} {review.trustScore}%
                      </TrustScoreBadge>
                    </ReviewImageWrapper>
                    
                    <ReviewContent>
                      <ProductInfo>
                        <CategoryTag>{review.category}</CategoryTag>
                        <ProductBrand>{review.productBrand}</ProductBrand>
                      </ProductInfo>
                      
                      <ProductName>{review.productName}</ProductName>
                      <ReviewTitle>{review.title}</ReviewTitle>
                      
                      <RatingRow>
                        <Stars>
                          {'★'.repeat(Math.floor(review.rating))}
                          {review.rating % 1 !== 0 && '½'}
                          {'☆'.repeat(5 - Math.ceil(review.rating))}
                        </Stars>
                        <RatingText>{review.rating.toFixed(1)}</RatingText>
                      </RatingRow>
                      
                      <ReviewMeta>
                        <MetaItem>
                          <MetaIcon>👤</MetaIcon>
                          <MetaText>{review.author}</MetaText>
                        </MetaItem>
                        <MetaItem>
                          <MetaIcon>👍</MetaIcon>
                          <MetaText>{review.helpfulVotes}</MetaText>
                        </MetaItem>
                        <MetaItem>
                          <MetaIcon>👁</MetaIcon>
                          <MetaText>{review.views}</MetaText>
                        </MetaItem>
                      </ReviewMeta>
                      
                      {review.usagePeriod && (
                        <UsagePeriod>사용기간: {review.usagePeriod}</UsagePeriod>
                      )}
                    </ReviewContent>
                  </ReviewCard>
                ))}
              </ReviewGrid>
              
              {/* 페이지네이션 */}
              {pagination.totalPages > 1 && (
                <Pagination>
                  <PaginationButton
                    disabled={pagination.currentPage === 1}
                    onClick={() => setPagination(prev => ({ ...prev, currentPage: prev.currentPage - 1 }))}
                  >
                    ← 이전
                  </PaginationButton>
                  
                  <PageNumbers>
                    {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
                      <PageNumber
                        key={page}
                        active={pagination.currentPage === page}
                        onClick={() => setPagination(prev => ({ ...prev, currentPage: page }))}
                      >
                        {page}
                      </PageNumber>
                    ))}
                  </PageNumbers>
                  
                  <PaginationButton
                    disabled={pagination.currentPage === pagination.totalPages}
                    onClick={() => setPagination(prev => ({ ...prev, currentPage: prev.currentPage + 1 }))}
                  >
                    다음 →
                  </PaginationButton>
                </Pagination>
              )}
            </>
          )}
        </Section>
      </Container>
    </ReviewsContainer>
  );
};

export default Reviews;

// 스타일 컴포넌트
const ReviewsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: ${theme.spacing.xl} 0;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${theme.spacing.md};
    align-items: flex-start;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

const FilterSection = styled.div`
  background: ${theme.colors.white};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.base};
  margin-bottom: ${theme.spacing.xl};
`;

const SearchForm = styled.form`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled(Input)`
  flex: 1;
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.lg};
  align-items: center;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const FilterLabel = styled.label`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[700]};
  white-space: nowrap;
`;

const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const CategoryButton = styled.button<{ active: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  border-radius: ${theme.borderRadius.full};
  border: 2px solid ${props => props.active ? theme.colors.primary : theme.colors.gray[300]};
  background-color: ${props => props.active ? theme.colors.primary : theme.colors.white};
  color: ${props => props.active ? theme.colors.white : theme.colors.gray[700]};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${theme.colors.primary};
    background-color: ${props => props.active ? theme.colors.primaryDark : theme.colors.purple[50]};
  }
`;

const Select = styled.select`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.sm};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.white};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[700]};
  cursor: pointer;
`;

const ResultSummary = styled.div`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing.lg};
  
  strong {
    color: ${theme.colors.primary};
    font-weight: ${theme.typography.fontWeight.semibold};
  }
  
  span {
    color: ${theme.colors.gray[500]};
  }
`;

const ReviewGrid = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled(Link)`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.base};
  transition: all 0.2s ease;
  text-decoration: none;
  color: ${theme.colors.gray[800]};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const ReviewImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ReviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VerifiedBadge = styled.div`
  position: absolute;
  top: ${theme.spacing.sm};
  left: ${theme.spacing.sm};
  background-color: ${theme.colors.success};
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  box-shadow: ${theme.shadows.md};
`;

const TrustScoreBadge = styled.div<{ color: string }>`
  position: absolute;
  top: ${theme.spacing.sm};
  right: ${theme.spacing.sm};
  background-color: ${props => props.color};
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  box-shadow: ${theme.shadows.md};
`;

const ReviewContent = styled.div`
  padding: ${theme.spacing.lg};
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.sm};
`;

const CategoryTag = styled.span`
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.primary};
  background-color: ${theme.colors.purple[100]};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
`;

const ProductBrand = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[500]};
`;

const ProductName = styled.div`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[700]};
  margin-bottom: ${theme.spacing.xs};
`;

const ReviewTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.md};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.4;
  min-height: 2.8em;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`;

const Stars = styled.div`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.warning};
`;

const RatingText = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[800]};
`;

const ReviewMeta = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

const MetaIcon = styled.span`
  font-size: ${theme.typography.fontSize.sm};
`;

const MetaText = styled.span`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.gray[600]};
`;

const UsagePeriod = styled.div`
  margin-top: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.gray[500]};
  font-style: italic;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: ${theme.spacing['3xl']};
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[600]};
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: ${theme.spacing['3xl']};
`;

const EmptyIcon = styled.div`
  font-size: ${theme.typography.fontSize['5xl']};
  margin-bottom: ${theme.spacing.md};
`;

const EmptyText = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing.lg};
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing['2xl']};
`;

const PaginationButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray[700]};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: ${theme.colors.purple[50]};
    border-color: ${theme.colors.primary};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageNumbers = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;

const PageNumber = styled.button<{ active: boolean }>`
  width: 40px;
  height: 40px;
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  border: 1px solid ${props => props.active ? theme.colors.primary : theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  background-color: ${props => props.active ? theme.colors.primary : theme.colors.white};
  color: ${props => props.active ? theme.colors.white : theme.colors.gray[700]};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${theme.colors.primary};
    background-color: ${props => props.active ? theme.colors.primaryDark : theme.colors.purple[50]};
  }
`;