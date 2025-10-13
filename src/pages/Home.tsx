// src/pages/Home.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Review, TopReviewer } from '../types';
import { mockReviews, mockTopReviewers, categories } from '../data/mockData';
import { theme, Container, Section, SectionTitle, Grid } from '../styles/GlobalStyle';

const Home: React.FC = () => {
  const [featuredReviews, setFeaturedReviews] = useState<Review[]>([]);
  const [topReviewers, setTopReviewers] = useState<TopReviewer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      
      // 실제로는 API 호출
      setTimeout(() => {
        setFeaturedReviews(mockReviews.slice(0, 4));
        setTopReviewers(mockTopReviewers.slice(0, 3));
        setIsLoading(false);
      }, 500);
    };

    fetchData();
  }, []);

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
    <HomeContainer>
      {/* 히어로 섹션 */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>신뢰할 수 있는 리얼 리뷰</HeroTitle>
            <HeroSubtitle>
              광고 없는 순수한 경험담으로 현명한 선택을 도와드립니다
            </HeroSubtitle>
            
            <FeatureGrid>
              <FeatureCard>
                <FeatureIcon>✅</FeatureIcon>
                <FeatureTitle>구매 인증</FeatureTitle>
                <FeatureDesc>실제 구매자만 리뷰 작성</FeatureDesc>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>⭐</FeatureIcon>
                <FeatureTitle>신뢰도 점수</FeatureTitle>
                <FeatureDesc>커뮤니티가 검증한 리뷰</FeatureDesc>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>🎁</FeatureIcon>
                <FeatureTitle>리뷰 보상</FeatureTitle>
                <FeatureDesc>성실한 리뷰에 포인트 지급</FeatureDesc>
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
            <SectionTitle>신뢰도 높은 리뷰</SectionTitle>
            <ViewAllLink to="/reviews">전체보기</ViewAllLink>
          </SectionHeader>
          
          {isLoading ? (
            <LoadingMessage>리뷰를 불러오는 중입니다...</LoadingMessage>
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
                      {getTrustBadgeText(review.trustScore)} {review.trustScore}%
                    </TrustScoreBadge>
                  </ReviewImageWrapper>
                  
                  <ReviewContent>
                    <ProductInfo>
                      <ProductBrand>{review.productBrand}</ProductBrand>
                      <ProductName>{review.productName}</ProductName>
                    </ProductInfo>
                    
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
          )}
        </Section>

        {/* 신뢰받는 리뷰어 섹션 */}
        <Section>
          <SectionTitle>이달의 신뢰받는 리뷰어 🏆</SectionTitle>
          <ReviewerGrid>
            {topReviewers.map((reviewer, index) => (
              <ReviewerCard key={reviewer._id}>
                <ReviewerRank rank={index + 1}>#{index + 1}</ReviewerRank>
                <ReviewerAvatar>
                  {reviewer.nickname.charAt(0)}
                </ReviewerAvatar>
                <ReviewerName>{reviewer.nickname}</ReviewerName>
                
                <ReviewerStats>
                  <StatItem>
                    <StatLabel>신뢰도</StatLabel>
                    <StatValue color={getTrustBadgeColor(reviewer.trustScore)}>
                      {reviewer.trustScore}%
                    </StatValue>
                  </StatItem>
                  <StatItem>
                    <StatLabel>리뷰수</StatLabel>
                    <StatValue>{reviewer.reviewCount}개</StatValue>
                  </StatItem>
                  <StatItem>
                    <StatLabel>획득 보상</StatLabel>
                    <StatValue>{reviewer.rewardPoints.toLocaleString()}P</StatValue>
                  </StatItem>
                </ReviewerStats>
                
                {reviewer.badges && reviewer.badges.length > 0 && (
                  <BadgeContainer>
                    {reviewer.badges.slice(0, 2).map((badge, i) => (
                      <SmallBadge key={i}>🏅 {badge}</SmallBadge>
                    ))}
                  </BadgeContainer>
                )}
              </ReviewerCard>
            ))}
          </ReviewerGrid>
        </Section>
      </Container>

      {/* 플랫폼 소개 섹션 */}
      <InfoSection>
        <Container>
          <InfoTitle>왜 저희 플랫폼을 선택해야 하나요?</InfoTitle>
          <InfoGrid>
            <InfoCard>
              <InfoCardIcon>🔍</InfoCardIcon>
              <InfoCardTitle>투명한 검증 시스템</InfoCardTitle>
              <InfoCardText>
                모든 리뷰는 구매 인증을 거치며, 커뮤니티 투표로 신뢰도가 결정됩니다.
                광고성 리뷰는 자동으로 낮은 평가를 받아 노출이 제한됩니다.
              </InfoCardText>
            </InfoCard>
            <InfoCard>
              <InfoCardIcon>💰</InfoCardIcon>
              <InfoCardTitle>공정한 보상 시스템</InfoCardTitle>
              <InfoCardText>
                높은 신뢰도를 받은 리뷰는 자동으로 포인트 보상을 받습니다.
                성실한 리뷰어일수록 더 많은 보상을 획득할 수 있습니다.
              </InfoCardText>
            </InfoCard>
            <InfoCard>
              <InfoCardIcon>🚫</InfoCardIcon>
              <InfoCardTitle>광고 제로 정책</InfoCardTitle>
              <InfoCardText>
                협찬, 홍보성 리뷰는 커뮤니티 투표로 자동 필터링됩니다.
                순수한 경험담만 높은 신뢰도를 받을 수 있습니다.
              </InfoCardText>
            </InfoCard>
          </InfoGrid>
          
          <CTASection>
            <CTATitle>지금 바로 시작하세요!</CTATitle>
            <CTAButtons>
              <CTAButton to="/register" primary>회원가입</CTAButton>
              <CTAButton to="/reviews">리뷰 둘러보기</CTAButton>
            </CTAButtons>
          </CTASection>
        </Container>
      </InfoSection>
    </HomeContainer>
  );
};

export default Home;

// 스타일 컴포넌트
const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%);
  padding: 80px 0;
  margin-bottom: 60px;
`;

const HeroContent = styled.div`
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.md};
  
  @media (max-width: 768px) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.normal};
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${theme.spacing['2xl']};
  
  @media (max-width: 768px) {
    font-size: ${theme.typography.fontSize.lg};
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
  }
`;

const FeatureIcon = styled.div`
  font-size: ${theme.typography.fontSize['5xl']};
  margin-bottom: ${theme.spacing.md};
`;

const FeatureTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.sm};
`;

const FeatureDesc = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: rgba(255, 255, 255, 0.8);
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
`;

const ViewAllLink = styled(Link)`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.primary};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${theme.colors.primaryDark};
    text-decoration: underline;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.md};
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CategoryItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  border: 2px solid transparent;
  
  &:hover {
    background-color: ${theme.colors.purple[100]};
    border-color: ${theme.colors.primary};
    transform: translateY(-4px);
  }
`;

const CategoryEmoji = styled.div`
  font-size: ${theme.typography.fontSize['5xl']};
  margin-bottom: ${theme.spacing.sm};
`;

const CategoryName = styled.span`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[800]};
`;

const ReviewGrid = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  
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
  padding: ${theme.spacing.sm} ${theme.spacing.md};
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
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  box-shadow: ${theme.shadows.md};
`;

const ReviewContent = styled.div`
  padding: ${theme.spacing.lg};
`;

const ProductInfo = styled.div`
  margin-bottom: ${theme.spacing.sm};
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
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`;

const Stars = styled.div`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.warning};
`;

const RatingText = styled.span`
  font-size: ${theme.typography.fontSize.base};
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
  font-size: ${theme.typography.fontSize.base};
`;

const MetaText = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
`;

const UsagePeriod = styled.div`
  margin-top: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[500]};
  font-style: italic;
`;

const ReviewerGrid = styled(Grid)`
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewerCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.base};
  text-align: center;
  position: relative;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-4px);
  }
`;

const ReviewerRank = styled.div<{ rank: number }>`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  background: ${props => {
    if (props.rank === 1) return 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)';
    if (props.rank === 2) return 'linear-gradient(135deg, #C0C0C0 0%, #808080 100%)';
    if (props.rank === 3) return 'linear-gradient(135deg, #CD7F32 0%, #8B4513 100%)';
    return theme.colors.gray[400];
  }};
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.bold};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${theme.shadows.md};
`;

const ReviewerAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%);
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing.md};
  box-shadow: ${theme.shadows.lg};
`;

const ReviewerName = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.gray[800]};
`;

const ReviewerStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: ${theme.spacing.md};
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const StatLabel = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
`;

const StatValue = styled.span<{ color?: string }>`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${props => props.color || theme.colors.gray[800]};
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  justify-content: center;
`;

const SmallBadge = styled.span`
  font-size: ${theme.typography.fontSize.xs};
  background-color: ${theme.colors.purple[100]};
  color: ${theme.colors.primary};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const LoadingMessage = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[600]};
  text-align: center;
  padding: ${theme.spacing['2xl']} 0;
`;

const InfoSection = styled.section`
  background-color: ${theme.colors.background.secondary};
  padding: ${theme.spacing['3xl']} 0;
  margin-top: ${theme.spacing['3xl']};
`;

const InfoTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[800]};
  text-align: center;
  margin-bottom: ${theme.spacing['2xl']};
`;

const InfoGrid = styled(Grid)`
  margin-bottom: ${theme.spacing['2xl']};
`;

const InfoCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.base};
  text-align: center;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-4px);
  }
`;

const InfoCardIcon = styled.div`
  font-size: ${theme.typography.fontSize['5xl']};
  margin-bottom: ${theme.spacing.md};
`;

const InfoCardTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.md};
`;

const InfoCardText = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[600]};
  line-height: 1.6;
`;

const CTASection = styled.div`
  text-align: center;
  padding-top: ${theme.spacing.xl};
`;

const CTATitle = styled.h3`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.lg};
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAButton = styled(Link)<{ primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  transition: all 0.2s ease;
  min-width: 180px;
  
  ${props => props.primary ? `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    
    &:hover {
      background-color: ${theme.colors.primaryDark};
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.lg};
    }
  ` : `
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};
    
    &:hover {
      background-color: ${theme.colors.purple[50]};
      transform: translateY(-2px);
    }
  `}
`;