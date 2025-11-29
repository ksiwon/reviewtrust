// src/pages/Reviews.tsx
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Review, FilterOptions, PaginationInfo } from '../types';
import { categories } from '../data/mockData';
import { reviewService } from '../api/reviewService';
import { theme, Container, Section, SectionTitle, Input, Button, Grid } from '../styles/GlobalStyle';

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
    currentPage: 1, totalPages: 1, totalItems: 0, itemsPerPage: 12
  });

  useEffect(() => {
    fetchReviews();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, pagination.currentPage]);

  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      const data = await reviewService.getReviews(filters);
      // Pagination simulation logic (normally backend does this)
      setPagination(prev => ({
        ...prev,
        totalItems: data.length,
        totalPages: Math.ceil(data.length / prev.itemsPerPage)
      }));
      setReviews(data);
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
                <option value="recent">최신순</option>
                <option value="trustScore">신뢰도순</option>
                <option value="helpful">도움됨순</option>
                <option value="rating">평점순</option>
              </Select>
            </FilterGroup>
            
            <CheckboxGroup>
              <Checkbox type="checkbox" id="verified" checked={filters.verifiedOnly} onChange={(e) => handleFilterChange({ verifiedOnly: e.target.checked })} />
              <CheckboxLabel htmlFor="verified">✓ 구매인증만 보기</CheckboxLabel>
            </CheckboxGroup>
          </FilterRow>
        </FilterSection>

        <Section>
          {isLoading ? (
            <LoadingMessage>리뷰를 불러오는 중입니다...</LoadingMessage>
          ) : reviews.length === 0 ? (
            <EmptyMessage>
              <EmptyIcon>😔</EmptyIcon>
              <EmptyText>조건에 맞는 리뷰가 없습니다.</EmptyText>
              <Button onClick={() => setFilters({ category: '', keyword: '', minRating: undefined, verifiedOnly: false, sortBy: 'recent' })}>필터 초기화</Button>
            </EmptyMessage>
          ) : (
            <ReviewGrid>
              {reviews.map((review) => (
                <ReviewCard key={review._id} to={`/review/${review._id}`}>
                  <ReviewImageWrapper>
                    <ReviewImage src={review.imageUrl} alt={review.title} />
                    {review.verifiedPurchase && <VerifiedBadge>✓ 구매인증</VerifiedBadge>}
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
                      <Stars>{'★'.repeat(Math.floor(review.rating))}{review.rating % 1 !== 0 && '½'}{'☆'.repeat(5 - Math.ceil(review.rating))}</Stars>
                      <RatingText>{review.rating.toFixed(1)}</RatingText>
                    </RatingRow>
                    
                    <ReviewMeta>
                      <MetaItem><MetaIcon>👤</MetaIcon><MetaText>{review.author}</MetaText></MetaItem>
                      <MetaItem><MetaIcon>👍</MetaIcon><MetaText>{review.helpfulVotes}</MetaText></MetaItem>
                      <MetaItem><MetaIcon>👁</MetaIcon><MetaText>{review.views}</MetaText></MetaItem>
                    </ReviewMeta>
                  </ReviewContent>
                </ReviewCard>
              ))}
            </ReviewGrid>
          )}
        </Section>
      </Container>
    </ReviewsContainer>
  );
};

export default Reviews;

// Styled components (shortened for brevity, but would be included)
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
const CheckboxGroup = styled.div`display: flex; align-items: center; gap: ${theme.spacing.sm};`;
const Checkbox = styled.input`cursor: pointer;`;
const CheckboxLabel = styled.label`cursor: pointer; font-size: ${theme.typography.fontSize.sm};`;
const ReviewGrid = styled(Grid)`grid-template-columns: repeat(3, 1fr); gap: ${theme.spacing.lg}; @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); } @media (max-width: 768px) { grid-template-columns: 1fr; }`;
const ReviewCard = styled(Link)`background-color: ${theme.colors.white}; border-radius: ${theme.borderRadius.lg}; overflow: hidden; box-shadow: ${theme.shadows.base}; transition: all 0.2s ease; text-decoration: none; color: ${theme.colors.gray[800]}; &:hover { transform: translateY(-4px); box-shadow: ${theme.shadows.lg}; }`;
const ReviewImageWrapper = styled.div`position: relative; width: 100%; height: 200px; overflow: hidden;`;
const ReviewImage = styled.img`width: 100%; height: 100%; object-fit: cover;`;
const VerifiedBadge = styled.div`position: absolute; top: ${theme.spacing.sm}; left: ${theme.spacing.sm}; background-color: ${theme.colors.success}; color: ${theme.colors.white}; padding: ${theme.spacing.xs} ${theme.spacing.sm}; border-radius: ${theme.borderRadius.full}; font-size: ${theme.typography.fontSize.xs}; font-weight: bold;`;
const TrustScoreBadge = styled.div<{ color: string }>`position: absolute; top: ${theme.spacing.sm}; right: ${theme.spacing.sm}; background-color: ${props => props.color}; color: ${theme.colors.white}; padding: ${theme.spacing.xs} ${theme.spacing.sm}; border-radius: ${theme.borderRadius.full}; font-size: ${theme.typography.fontSize.xs}; font-weight: bold;`;
const ReviewContent = styled.div`padding: ${theme.spacing.lg};`;
const ProductInfo = styled.div`display: flex; justify-content: space-between; align-items: center; margin-bottom: ${theme.spacing.sm};`;
const CategoryTag = styled.span`font-size: ${theme.typography.fontSize.xs}; color: ${theme.colors.primary}; background-color: ${theme.colors.purple[100]}; padding: 2px 8px; border-radius: 4px;`;
const ProductBrand = styled.div`font-size: ${theme.typography.fontSize.sm}; color: ${theme.colors.gray[500]};`;
const ProductName = styled.div`font-size: ${theme.typography.fontSize.base}; font-weight: bold; margin-bottom: 4px;`;
const ReviewTitle = styled.h3`font-size: ${theme.typography.fontSize.lg}; font-weight: bold; margin-bottom: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`;
const RatingRow = styled.div`display: flex; align-items: center; gap: 8px; margin-bottom: 12px;`;
const Stars = styled.div`color: ${theme.colors.warning};`;
const RatingText = styled.span`font-weight: bold;`;
const ReviewMeta = styled.div`display: flex; gap: 12px; font-size: ${theme.typography.fontSize.xs}; color: ${theme.colors.gray[600]};`;
const MetaItem = styled.div`display: flex; align-items: center; gap: 4px;`;
const MetaIcon = styled.span``;
const MetaText = styled.span``;
const LoadingMessage = styled.div`text-align: center; padding: 40px; color: ${theme.colors.gray[600]};`;
const EmptyMessage = styled.div`text-align: center; padding: 40px;`;
const EmptyIcon = styled.div`font-size: 48px; margin-bottom: 16px;`;
const EmptyText = styled.p`color: ${theme.colors.gray[600]}; margin-bottom: 16px;`;