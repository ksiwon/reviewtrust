// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Review, TopReviewer } from '../types';
import { reviewService } from '../api/reviewService';
import { mockTopReviewers, categories } from '../data/mockData';
import { theme, Container, Section, SectionTitle, Grid } from '../styles/GlobalStyle';

const Home: React.FC = () => {
  const [featuredReviews, setFeaturedReviews] = useState<Review[]>([]);
  const [topReviewers, setTopReviewers] = useState<TopReviewer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const reviewsData = await reviewService.getReviews({ sortBy: 'trustScore' });
        setFeaturedReviews(reviewsData.slice(0, 4));
        // API 호출 시뮬레이션 (실제로는 서버에서 가져옴)
        setTopReviewers(mockTopReviewers.slice(0, 3));
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const getTrustBadgeColor = (score: number): string => {
    if (score >= 90) return theme.colors.trust.excellent;
    if (score >= 70) return theme.colors.trust.good;
    if (score >= 50) return theme.colors.trust.fair;
    return theme.colors.trust.poor;
  };

  return (
    <HomeContainer>
      {/* 히어로 섹션 */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>광고 없는 순수 리뷰 플랫폼</HeroTitle>
            <HeroSubtitle>
              네이버, 쿠팡의 리뷰를 한 곳에서.<br/>
              AI와 집단지성으로 검증된 신뢰도 점수를 확인하세요.
            </HeroSubtitle>
            
            <FeatureGrid>
              <FeatureCard>
                <FeatureIcon>🔍</FeatureIcon>
                <FeatureTitle>데이터 통합</FeatureTitle>
                <FeatureDesc>여러 쇼핑몰 리뷰를 모아서 분석</FeatureDesc>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>⭐</FeatureIcon>
                <FeatureTitle>신뢰도 점수</FeatureTitle>
                <FeatureDesc>구매인증 및 커뮤니티 검증</FeatureDesc>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>💰</FeatureIcon>
                <FeatureTitle>공정 보상</FeatureTitle>
                <FeatureDesc>양질의 리뷰에 크레딧 지급</FeatureDesc>
              </FeatureCard>
            </FeatureGrid>
          </HeroContent>
        </Container>
      </HeroSection>

      <Container>
        {/* 카테고리 섹션 */}
        <Section>
          <SectionTitle>카테고리</SectionTitle>
          <CategoryGrid>
            {categories.map((category, index) => (
              <CategoryItem key={index} to={`/reviews?category=${category.value}`}>
                <CategoryEmoji>{category.icon}</CategoryEmoji>
                <CategoryName>{category.label}</CategoryName>
              </CategoryItem>
            ))}
          </CategoryGrid>
        </Section>

        {/* 추천 리뷰 섹션 */}
        <Section>
          <SectionHeader>
            <SectionTitle>🔥 지금 뜨는 고신뢰 리뷰</SectionTitle>
            <ViewAllLink to="/reviews">전체보기</ViewAllLink>
          </SectionHeader>
          
          {isLoading ? (
            <LoadingMessage>데이터를 분석 중입니다...</LoadingMessage>
          ) : (
            <ReviewGrid>
              {featuredReviews.map(review => (
                <ReviewCard key={review._id} to={`/review/${review._id}`}>
                  <ReviewImageWrapper>
                    <ReviewImage src={review.imageUrl} alt={review.title} />
                    {review.verifiedPurchase && (
                      <VerifiedBadge>✓ 구매인증</VerifiedBadge>
                    )}
                    <TrustScoreBadge color={getTrustBadgeColor(review.trustScore)}>
                      신뢰도 {review.trustScore}%
                    </TrustScoreBadge>
                    {/* 외부 소스 표시 */}
                    {review.sourcePlatform && review.sourcePlatform !== 'ReviewTrust' && (
                        <SourceBadge>{review.sourcePlatform}</SourceBadge>
                    )}
                  </ReviewImageWrapper>
                  
                  <ReviewContent>
                    <ProductInfo>
                      <ProductName>{review.productName}</ProductName>
                    </ProductInfo>
                    <ReviewTitle>{review.title}</ReviewTitle>
                    <RatingRow>
                      {/* 'Stars' is not defined 오류 수정: 아래 스타일 정의 추가됨 */}
                      <Stars>★ {review.rating.toFixed(1)}</Stars>
                    </RatingRow>
                  </ReviewContent>
                </ReviewCard>
              ))}
            </ReviewGrid>
          )}
        </Section>

        {/* [추가] 베스트 리뷰어 섹션 (topReviewers 사용) */}
        <Section>
          <SectionTitle>🏆 이달의 베스트 리뷰어</SectionTitle>
          <ReviewerGrid>
            {topReviewers.map((reviewer, index) => (
              <ReviewerCard key={reviewer._id}>
                <ReviewerRank>#{index + 1}</ReviewerRank>
                <ReviewerInfo>
                  <ReviewerName>{reviewer.nickname}</ReviewerName>
                  <ReviewerStats>
                    <span>신뢰도 {reviewer.trustScore}%</span>
                    <span>•</span>
                    <span>리뷰 {reviewer.reviewCount}개</span>
                  </ReviewerStats>
                </ReviewerInfo>
                <ReviewerPoints>{reviewer.rewardPoints.toLocaleString()} P</ReviewerPoints>
              </ReviewerCard>
            ))}
          </ReviewerGrid>
        </Section>

        {/* B2B 판매자 섹션 */}
        <SellerSection>
            <SellerContent>
                <SellerTitle>판매자이신가요? 악성 리뷰를 관리하세요.</SellerTitle>
                <SellerDesc>
                    리뷰 신뢰도 분석 AI를 통해 경쟁사 공격 및 어뷰징을 탐지합니다.<br/>
                    B2B SaaS 구독으로 CS 효율을 3배 높이세요.
                </SellerDesc>
                <SellerButton to="/contact">무료 체험 시작하기</SellerButton>
            </SellerContent>
        </SellerSection>

      </Container>
    </HomeContainer>
  );
};

export default Home;

// Styled Components
const HomeContainer = styled.div`width: 100%; min-height: 100vh;`;
const HeroSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%);
  padding: 80px 0; margin-bottom: 60px;
`;
const HeroContent = styled.div`text-align: center;`;
const HeroTitle = styled.h1`
  font-size: ${theme.typography.fontSize['5xl']}; font-weight: bold; color: ${theme.colors.white}; margin-bottom: 20px;
  @media (max-width: 768px) { font-size: 32px; }
`;
const HeroSubtitle = styled.p`font-size: 20px; color: rgba(255,255,255,0.9); margin-bottom: 40px; line-height: 1.5;`;
const FeatureGrid = styled.div`display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; @media (max-width: 768px) { grid-template-columns: 1fr; }`;
const FeatureCard = styled.div`
  background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 12px; padding: 32px;
  text-align: center; border: 1px solid rgba(255,255,255,0.2); transition: transform 0.2s;
  &:hover { transform: translateY(-5px); }
`;
const FeatureIcon = styled.div`font-size: 48px; margin-bottom: 16px;`;
const FeatureTitle = styled.h3`font-size: 24px; font-weight: 600; color: white; margin-bottom: 8px;`;
const FeatureDesc = styled.p`color: rgba(255,255,255,0.8);`;

const SectionHeader = styled.div`display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;`;
const ViewAllLink = styled(Link)`color: ${theme.colors.primary}; font-weight: 600; text-decoration: none;`;

const CategoryGrid = styled.div`display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; @media (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }`;
const CategoryItem = styled(Link)`
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  background: ${theme.colors.background.secondary}; border-radius: 12px; padding: 24px;
  text-decoration: none; transition: all 0.2s;
  &:hover { background: ${theme.colors.purple[100]}; transform: translateY(-3px); }
`;
const CategoryEmoji = styled.div`font-size: 40px; margin-bottom: 10px;`;
const CategoryName = styled.span`color: ${theme.colors.gray[800]}; font-weight: 500;`;

const ReviewGrid = styled(Grid)`grid-template-columns: repeat(2, 1fr); @media (max-width: 768px) { grid-template-columns: 1fr; }`;
const ReviewCard = styled(Link)`
  background: white; border-radius: 12px; overflow: hidden; box-shadow: ${theme.shadows.base};
  text-decoration: none; color: inherit; transition: all 0.2s;
  &:hover { transform: translateY(-5px); box-shadow: ${theme.shadows.lg}; }
`;
const ReviewImageWrapper = styled.div`position: relative; height: 200px; overflow: hidden;`;
const ReviewImage = styled.img`width: 100%; height: 100%; object-fit: cover;`;
const VerifiedBadge = styled.div`
  position: absolute; top: 10px; left: 10px; background: ${theme.colors.success}; color: white;
  padding: 4px 8px; border-radius: 20px; font-size: 12px; font-weight: bold;
`;
const TrustScoreBadge = styled.div<{ color: string }>`
  position: absolute; top: 10px; right: 10px; background: ${props => props.color}; color: white;
  padding: 4px 8px; border-radius: 20px; font-size: 12px; font-weight: bold;
`;
const SourceBadge = styled.div`
    position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.6); color: white;
    padding: 4px 8px; border-radius: 4px; font-size: 11px;
`;
const ReviewContent = styled.div`padding: 20px;`;
const ProductInfo = styled.div`margin-bottom: 8px;`;
const ProductName = styled.div`font-weight: 600; color: ${theme.colors.gray[700]};`;
const ReviewTitle = styled.h3`font-size: 18px; font-weight: bold; margin-bottom: 10px; line-height: 1.4;`;
const RatingRow = styled.div`color: ${theme.colors.warning}; font-weight: bold;`;
const Stars = styled.div`color: ${theme.colors.warning}; font-size: 16px; font-weight: bold;`; // 추가된 스타일

const LoadingMessage = styled.div`text-align: center; padding: 40px; color: ${theme.colors.gray[500]};`;

// Reviewer Section Styles
const ReviewerGrid = styled.div`display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; @media (max-width: 768px) { grid-template-columns: 1fr; }`;
const ReviewerCard = styled.div`
  background: white; padding: 20px; border-radius: 12px; box-shadow: ${theme.shadows.sm};
  display: flex; align-items: center; gap: 16px; position: relative;
`;
const ReviewerRank = styled.div`
  position: absolute; top: 10px; left: 10px; font-size: 12px; font-weight: bold; 
  color: ${theme.colors.primary}; background: ${theme.colors.purple[50]}; padding: 2px 8px; border-radius: 10px;
`;
const ReviewerInfo = styled.div`flex: 1; margin-left: 10px;`;
const ReviewerName = styled.div`font-weight: bold; margin-bottom: 4px;`;
const ReviewerStats = styled.div`font-size: 12px; color: ${theme.colors.gray[500]};`;
const ReviewerPoints = styled.div`font-weight: bold; color: ${theme.colors.warning};`;

// B2B Section Styles
const SellerSection = styled.section`
    background-color: ${theme.colors.gray[900]}; border-radius: 16px; padding: 60px; text-align: center;
    margin: 60px 0; color: white;
`;
const SellerContent = styled.div`max-width: 600px; margin: 0 auto;`;
const SellerTitle = styled.h2`font-size: 32px; font-weight: bold; margin-bottom: 16px;`;
const SellerDesc = styled.p`font-size: 18px; color: ${theme.colors.gray[400]}; margin-bottom: 32px; line-height: 1.6;`;
const SellerButton = styled(Link)`
    display: inline-block; padding: 16px 32px; background: ${theme.colors.primary}; color: white;
    font-weight: bold; border-radius: 8px; text-decoration: none; transition: background 0.2s;
    &:hover { background: ${theme.colors.primaryDark}; }
`;