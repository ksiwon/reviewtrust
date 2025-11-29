// src/pages/ReviewDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Review } from '../types';
import { reviewService } from '../api/reviewService';
import { theme, Container } from '../styles/GlobalStyle';

const ReviewDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [review, setReview] = useState<Review | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [userVote, setUserVote] = useState<'helpful' | 'notHelpful' | null>(null);

  useEffect(() => {
    fetchReviewDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchReviewDetail = async () => {
    setIsLoading(true);
    try {
      const data = await reviewService.getReviewById(id!);
      setReview(data);
    } catch (e) {
      console.error(e);
      setReview(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVote = async (voteType: 'helpful' | 'notHelpful') => {
    if (!review) return;
    if (userVote === voteType) {
      setUserVote(null);
      return;
    }
    setUserVote(voteType);
    try {
      await reviewService.voteReview(review._id, voteType);
      // Re-fetch simulation (optional)
    } catch (e) {
      console.error('Vote failed');
    }
  };

  if (isLoading) return <LoadingContainer>로딩중...</LoadingContainer>;
  if (!review) return <ErrorContainer>리뷰를 찾을 수 없습니다.</ErrorContainer>;

  const images = review.images || [review.imageUrl];

  return (
    <DetailContainer>
      <Container>
        <BackButton onClick={() => navigate(-1)}>← 목록으로</BackButton>
        <ContentWrapper>
          <ImageSection>
            <MainImage><img src={images[currentImageIndex]} alt={review.title} /></MainImage>
            {images.length > 1 && (
              <ThumbnailList>
                {images.map((img, index) => (
                  <Thumbnail key={index} active={index === currentImageIndex} onClick={() => setCurrentImageIndex(index)}>
                    <img src={img} alt="thumb" />
                  </Thumbnail>
                ))}
              </ThumbnailList>
            )}
          </ImageSection>
          
          <InfoSection>
            <MetaHeader>
                <CategoryBadge>{review.category}</CategoryBadge>
                {review.sourcePlatform && review.sourcePlatform !== 'ReviewTrust' && (
                    <PlatformBadge>{review.sourcePlatform}에서 수집됨</PlatformBadge>
                )}
            </MetaHeader>
            
            <ProductInfo>
                <Brand>{review.productBrand}</Brand>
                <ProductName>{review.productName}</ProductName>
            </ProductInfo>

            <ReviewTitle>{review.title}</ReviewTitle>
            
            <RatingSection>
                <Stars>{'★'.repeat(Math.floor(review.rating))}</Stars>
                <RatingNum>{review.rating}</RatingNum>
            </RatingSection>

            <Divider />

            <TrustBox>
                <TrustHeader>
                    <div>신뢰도 점수</div>
                    <TrustScore color={theme.colors.trust.good}>{review.trustScore}</TrustScore>
                </TrustHeader>
                <TrustDesc>
                    {review.verifiedPurchase ? '✅ 구매 인증됨' : '⚠️ 구매 미인증'} • 
                    이미지 {images.length}장 • 투표 {review.helpfulVotes + review.notHelpfulVotes}건 반영
                </TrustDesc>
                <VoteActions>
                    <VoteButton active={userVote === 'helpful'} onClick={() => handleVote('helpful')}>
                        👍 도움됨 {review.helpfulVotes}
                    </VoteButton>
                    <VoteButton active={userVote === 'notHelpful'} onClick={() => handleVote('notHelpful')}>
                        👎 별로예요 {review.notHelpfulVotes}
                    </VoteButton>
                </VoteActions>
            </TrustBox>

            {/* 외부 원본 링크 (다이어그램 반영: 트래픽 유도) */}
            {review.originalUrl && (
                <OriginalLink href={review.originalUrl} target="_blank" rel="noopener noreferrer">
                    🔗 {review.sourcePlatform} 원본 상품 보러가기
                </OriginalLink>
            )}

          </InfoSection>
        </ContentWrapper>

        <ReviewContent>
            <h3>상세 리뷰</h3>
            <p>{review.content}</p>
            <Tags>
                {review.tags?.map(tag => <Tag key={tag}>#{tag}</Tag>)}
            </Tags>
        </ReviewContent>

      </Container>
    </DetailContainer>
  );
};

export default ReviewDetail;

// Styled Components
const DetailContainer = styled.div`width: 100%; min-height: 100vh; padding: 40px 0; background: #f9fafb;`;
const BackButton = styled.button`border: none; background: none; cursor: pointer; margin-bottom: 20px; color: #666;`;
const ContentWrapper = styled.div`display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px; @media (max-width: 768px) { grid-template-columns: 1fr; }`;
const ImageSection = styled.div`background: white; padding: 20px; border-radius: 12px; box-shadow: ${theme.shadows.sm};`;
const MainImage = styled.div`width: 100%; height: 400px; margin-bottom: 10px; img { width: 100%; height: 100%; object-fit: cover; border-radius: 8px; }`;
const ThumbnailList = styled.div`display: flex; gap: 10px;`;
const Thumbnail = styled.div<{ active: boolean }>`
    width: 60px; height: 60px; cursor: pointer; border-radius: 4px; overflow: hidden;
    border: 2px solid ${props => props.active ? theme.colors.primary : 'transparent'};
    img { width: 100%; height: 100%; object-fit: cover; }
`;
const InfoSection = styled.div`background: white; padding: 30px; border-radius: 12px; box-shadow: ${theme.shadows.sm}; display: flex; flex-direction: column;`;
const MetaHeader = styled.div`display: flex; justify-content: space-between; margin-bottom: 10px;`;
const CategoryBadge = styled.span`background: ${theme.colors.purple[100]}; color: ${theme.colors.primary}; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;`;
const PlatformBadge = styled.span`background: #eee; color: #666; padding: 4px 8px; border-radius: 4px; font-size: 12px;`;
const ProductInfo = styled.div`margin-bottom: 10px;`;
const Brand = styled.div`color: #888; font-size: 14px;`;
const ProductName = styled.h2`font-size: 24px; font-weight: bold; margin: 4px 0;`;
const ReviewTitle = styled.h3`font-size: 20px; font-weight: 600; margin-bottom: 15px;`;
const RatingSection = styled.div`display: flex; align-items: center; gap: 8px;`;
const Stars = styled.div`color: ${theme.colors.warning}; font-size: 20px;`;
const RatingNum = styled.div`font-weight: bold; font-size: 18px;`;
const Divider = styled.hr`margin: 20px 0; border: none; border-top: 1px solid #eee;`;
const TrustBox = styled.div`background: #f0fdf4; padding: 20px; border-radius: 8px; border: 1px solid #bbf7d0;`;
const TrustHeader = styled.div`display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-weight: bold; color: #166534;`;
const TrustScore = styled.div<{ color: string }>`font-size: 32px; color: ${props => props.color};`;
const TrustDesc = styled.div`font-size: 12px; color: #166534; margin-bottom: 15px;`;
const VoteActions = styled.div`display: flex; gap: 10px;`;
const VoteButton = styled.button<{ active: boolean }>`
    flex: 1; padding: 10px; border-radius: 6px; cursor: pointer; font-weight: bold;
    border: 1px solid ${props => props.active ? theme.colors.primary : '#ddd'};
    background: ${props => props.active ? theme.colors.primary : 'white'};
    color: ${props => props.active ? 'white' : '#333'};
`;
const OriginalLink = styled.a`
    display: block; text-align: center; margin-top: 20px; padding: 12px;
    background: ${theme.colors.gray[100]}; color: ${theme.colors.gray[800]};
    text-decoration: none; border-radius: 8px; font-weight: 600;
    &:hover { background: ${theme.colors.gray[200]}; }
`;
const ReviewContent = styled.div`background: white; padding: 30px; border-radius: 12px; box-shadow: ${theme.shadows.sm}; h3 { margin-bottom: 15px; } p { line-height: 1.6; color: #333; }`;
const Tags = styled.div`margin-top: 20px; display: flex; gap: 8px; flex-wrap: wrap;`;
const Tag = styled.span`color: ${theme.colors.primary}; background: ${theme.colors.purple[50]}; padding: 4px 10px; border-radius: 15px; font-size: 13px;`;
const LoadingContainer = styled.div`height: 50vh; display: flex; justify-content: center; align-items: center;`;
const ErrorContainer = styled.div`text-align: center; padding: 50px;`;