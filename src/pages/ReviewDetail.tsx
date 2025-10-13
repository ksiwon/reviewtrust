// src/pages/ReviewDetail.tsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Review } from '../types';
import { mockReviews } from '../data/mockData';
import { 
  theme, 
  Container, 
  Button
} from '../styles/GlobalStyle';

const ReviewDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [review, setReview] = useState<Review | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [userVote, setUserVote] = useState<'helpful' | 'notHelpful' | null>(null);
  const [showReportModal, setShowReportModal] = useState<boolean>(false);

  useEffect(() => {
    fetchReviewDetail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchReviewDetail = async () => {
    setIsLoading(true);
    
    // 실제로는 API 호출
    setTimeout(() => {
      const foundReview = mockReviews.find(r => r._id === id);
      setReview(foundReview || null);
      setIsLoading(false);
    }, 500);
  };

  const handleVote = (voteType: 'helpful' | 'notHelpful') => {
    if (!review) return;
    
    // 이미 투표한 경우 취소
    if (userVote === voteType) {
      setUserVote(null);
      return;
    }
    
    // 새로운 투표
    setUserVote(voteType);
    
    // 실제로는 API 호출하여 서버에 투표 저장
    console.log(`Voted ${voteType} for review ${id}`);
  };

  const handleReport = (reason: string) => {
    // 실제로는 API 호출하여 신고 접수
    console.log(`Reported review ${id} for: ${reason}`);
    alert('신고가 접수되었습니다. 검토 후 조치하겠습니다.');
    setShowReportModal(false);
  };

  const getTrustBadgeColor = (score: number): string => {
    if (score >= 90) return theme.colors.trust.excellent;
    if (score >= 70) return theme.colors.trust.good;
    if (score >= 50) return theme.colors.trust.fair;
    return theme.colors.trust.poor;
  };

  const getTrustBadgeText = (score: number): string => {
    if (score >= 90) return '매우 신뢰할 수 있는 리뷰';
    if (score >= 70) return '신뢰할 수 있는 리뷰';
    if (score >= 50) return '보통 수준의 리뷰';
    return '주의가 필요한 리뷰';
  };

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingText>리뷰를 불러오는 중입니다...</LoadingText>
      </LoadingContainer>
    );
  }

  if (!review) {
    return (
      <ErrorContainer>
        <ErrorIcon>😔</ErrorIcon>
        <ErrorText>리뷰를 찾을 수 없습니다.</ErrorText>
        <Button onClick={() => navigate('/reviews')}>리뷰 목록으로</Button>
      </ErrorContainer>
    );
  }

  const images = review.images || [review.imageUrl];

  return (
    <DetailContainer>
      <Container>
        <BackButton onClick={() => navigate(-1)}>
          ← 뒤로 가기
        </BackButton>

        <ContentWrapper>
          {/* 왼쪽: 이미지 갤러리 */}
          <ImageSection>
            <MainImage>
              <img src={images[currentImageIndex]} alt={review.title} />
              {review.verifiedPurchase && (
                <VerifiedBadge>✓ 구매 인증 완료</VerifiedBadge>
              )}
            </MainImage>
            
            {images.length > 1 && (
              <ThumbnailList>
                {images.map((img, index) => (
                  <Thumbnail
                    key={index}
                    active={index === currentImageIndex}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img src={img} alt={`이미지 ${index + 1}`} />
                  </Thumbnail>
                ))}
              </ThumbnailList>
            )}
          </ImageSection>

          {/* 오른쪽: 제품 정보 및 리뷰 요약 */}
          <InfoSection>
            <CategoryBadge>{review.category}</CategoryBadge>
            
            <ProductInfo>
              <ProductBrand>{review.productBrand}</ProductBrand>
              <ProductName>{review.productName}</ProductName>
            </ProductInfo>

            <ReviewTitle>{review.title}</ReviewTitle>

            <RatingSection>
              <Stars>
                {'★'.repeat(Math.floor(review.rating))}
                {review.rating % 1 !== 0 && '½'}
                {'☆'.repeat(5 - Math.ceil(review.rating))}
              </Stars>
              <RatingText>{review.rating.toFixed(1)}</RatingText>
            </RatingSection>

            <MetaInfo>
              <MetaItem>
                <MetaLabel>작성자</MetaLabel>
                <MetaValue>{review.author}</MetaValue>
              </MetaItem>
              <MetaItem>
                <MetaLabel>작성일</MetaLabel>
                <MetaValue>{new Date(review.created_at).toLocaleDateString()}</MetaValue>
              </MetaItem>
              {review.usagePeriod && (
                <MetaItem>
                  <MetaLabel>사용기간</MetaLabel>
                  <MetaValue>{review.usagePeriod}</MetaValue>
                </MetaItem>
              )}
              {review.purchaseDate && (
                <MetaItem>
                  <MetaLabel>구매일</MetaLabel>
                  <MetaValue>{new Date(review.purchaseDate).toLocaleDateString()}</MetaValue>
                </MetaItem>
              )}
            </MetaInfo>

            <Divider />

            {/* 신뢰도 점수 */}
            <TrustScoreSection>
              <TrustScoreHeader>
                <TrustScoreTitle>신뢰도 점수</TrustScoreTitle>
                <TrustScoreHelp>
                  💡 커뮤니티가 평가한 이 리뷰의 신뢰도입니다
                </TrustScoreHelp>
              </TrustScoreHeader>
              
              <TrustScoreDisplay color={getTrustBadgeColor(review.trustScore)}>
                <TrustScoreNumber>{review.trustScore}</TrustScoreNumber>
                <TrustScoreLabel>{getTrustBadgeText(review.trustScore)}</TrustScoreLabel>
              </TrustScoreDisplay>

              <TrustScoreBar>
                <TrustScoreProgress 
                  width={review.trustScore} 
                  color={getTrustBadgeColor(review.trustScore)}
                />
              </TrustScoreBar>

              <VoteStats>
                <VoteStat positive>
                  <VoteIcon>👍</VoteIcon>
                  <VoteCount>{review.helpfulVotes}</VoteCount>
                  <VoteLabel>도움됨</VoteLabel>
                </VoteStat>
                <VoteStat>
                  <VoteIcon>👎</VoteIcon>
                  <VoteCount>{review.notHelpfulVotes}</VoteCount>
                  <VoteLabel>도움안됨</VoteLabel>
                </VoteStat>
              </VoteStats>
            </TrustScoreSection>

            <Divider />

            {/* 투표 섹션 */}
            <VoteSection>
              <VoteQuestion>이 리뷰가 도움이 되셨나요?</VoteQuestion>
              <VoteButtons>
                <VoteButton
                  active={userVote === 'helpful'}
                  positive
                  onClick={() => handleVote('helpful')}
                >
                  👍 도움됨
                </VoteButton>
                <VoteButton
                  active={userVote === 'notHelpful'}
                  onClick={() => handleVote('notHelpful')}
                >
                  👎 도움안됨
                </VoteButton>
              </VoteButtons>
              <VoteDescription>
                {userVote ? 
                  '투표해주셔서 감사합니다! 다시 클릭하면 취소됩니다.' : 
                  '정직한 투표가 신뢰할 수 있는 리뷰 문화를 만듭니다.'
                }
              </VoteDescription>
            </VoteSection>

            <ActionButtons>
              <ShareButton>🔗 공유하기</ShareButton>
              <ReportButton onClick={() => setShowReportModal(true)}>
                🚨 신고하기
              </ReportButton>
            </ActionButtons>
          </InfoSection>
        </ContentWrapper>

        {/* 리뷰 본문 */}
        <ReviewContent>
          <ContentTitle>상세 리뷰</ContentTitle>
          
          {/* 장점 */}
          {review.pros && review.pros.length > 0 && (
            <ProsCons>
              <ProsConsTitle positive>👍 장점</ProsConsTitle>
              <ProsList>
                {review.pros.map((pro, index) => (
                  <ProsItem key={index}>✓ {pro}</ProsItem>
                ))}
              </ProsList>
            </ProsCons>
          )}

          {/* 단점 */}
          {review.cons && review.cons.length > 0 && (
            <ProsCons>
              <ProsConsTitle>👎 단점</ProsConsTitle>
              <ConsList>
                {review.cons.map((con, index) => (
                  <ConsItem key={index}>✗ {con}</ConsItem>
                ))}
              </ConsList>
            </ProsCons>
          )}

          {/* 본문 내용 */}
          <ContentBody>
            {review.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </ContentBody>

          {/* 태그 */}
          {review.tags && review.tags.length > 0 && (
            <TagSection>
              {review.tags.map((tag, index) => (
                <Tag key={index}>#{tag}</Tag>
              ))}
            </TagSection>
          )}
        </ReviewContent>

        {/* 리뷰어 정보 */}
        <ReviewerSection>
          <ReviewerCard>
            <ReviewerAvatar>{review.author.charAt(0)}</ReviewerAvatar>
            <ReviewerInfo>
              <ReviewerName>{review.author}</ReviewerName>
              <ReviewerStats>
                <ReviewerStat>
                  <StatLabel>작성 리뷰</StatLabel>
                  <StatValue>47개</StatValue>
                </ReviewerStat>
                <ReviewerStat>
                  <StatLabel>신뢰도</StatLabel>
                  <StatValue color={theme.colors.success}>95%</StatValue>
                </ReviewerStat>
                <ReviewerStat>
                  <StatLabel>획득 포인트</StatLabel>
                  <StatValue color={theme.colors.warning}>12,500P</StatValue>
                </ReviewerStat>
              </ReviewerStats>
            </ReviewerInfo>
            <ViewProfileButton as={Link} to={`/profile/${review.authorId}`}>
              프로필 보기
            </ViewProfileButton>
          </ReviewerCard>
        </ReviewerSection>

        {/* 관련 리뷰 */}
        <RelatedSection>
          <RelatedTitle>비슷한 제품의 다른 리뷰</RelatedTitle>
          <RelatedGrid>
            {mockReviews
              .filter(r => r._id !== review._id && r.category === review.category)
              .slice(0, 3)
              .map(relatedReview => (
                <RelatedCard key={relatedReview._id} to={`/review/${relatedReview._id}`}>
                  <RelatedImage src={relatedReview.imageUrl} alt={relatedReview.title} />
                  <RelatedContent>
                    <RelatedProductName>{relatedReview.productName}</RelatedProductName>
                    <RelatedReviewTitle>{relatedReview.title}</RelatedReviewTitle>
                    <RelatedMeta>
                      <RelatedRating>
                        ★ {relatedReview.rating.toFixed(1)}
                      </RelatedRating>
                      <RelatedTrust color={getTrustBadgeColor(relatedReview.trustScore)}>
                        신뢰도 {relatedReview.trustScore}%
                      </RelatedTrust>
                    </RelatedMeta>
                  </RelatedContent>
                </RelatedCard>
              ))}
          </RelatedGrid>
        </RelatedSection>
      </Container>

      {/* 신고 모달 */}
      {showReportModal && (
        <ModalOverlay onClick={() => setShowReportModal(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>리뷰 신고하기</ModalTitle>
              <CloseButton onClick={() => setShowReportModal(false)}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <ModalDescription>
                이 리뷰를 신고하는 이유를 선택해주세요.
              </ModalDescription>
              <ReportOptions>
                <ReportOption onClick={() => handleReport('광고/홍보성')}>
                  📢 광고 또는 홍보성 리뷰
                </ReportOption>
                <ReportOption onClick={() => handleReport('허위 정보')}>
                  ❌ 허위 정보 또는 과장
                </ReportOption>
                <ReportOption onClick={() => handleReport('욕설/비방')}>
                  💬 욕설 또는 비방
                </ReportOption>
                <ReportOption onClick={() => handleReport('중복 게시')}>
                  📋 중복 게시
                </ReportOption>
                <ReportOption onClick={() => handleReport('기타')}>
                  📝 기타 사유
                </ReportOption>
              </ReportOptions>
            </ModalBody>
          </Modal>
        </ModalOverlay>
      )}
    </DetailContainer>
  );
};

export default ReviewDetail;

// 스타일 컴포넌트
const DetailContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: ${theme.spacing.xl} 0;
  background-color: ${theme.colors.background.secondary};
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[700]};
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: ${theme.spacing.lg};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ImageSection = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.base};
`;

const MainImage = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  margin-bottom: ${theme.spacing.md};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const VerifiedBadge = styled.div`
  position: absolute;
  top: ${theme.spacing.md};
  left: ${theme.spacing.md};
  background-color: ${theme.colors.success};
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  box-shadow: ${theme.shadows.lg};
`;

const ThumbnailList = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  overflow-x: auto;
`;

const Thumbnail = styled.div<{ active: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  cursor: pointer;
  border: 3px solid ${props => props.active ? theme.colors.primary : 'transparent'};
  transition: all 0.2s ease;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &:hover {
    border-color: ${theme.colors.primary};
  }
`;

const InfoSection = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.base};
`;

const CategoryBadge = styled.span`
  display: inline-block;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.primary};
  background-color: ${theme.colors.purple[100]};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  margin-bottom: ${theme.spacing.md};
`;

const ProductInfo = styled.div`
  margin-bottom: ${theme.spacing.md};
`;

const ProductBrand = styled.div`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[600]};
`;

const ProductName = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[800]};
  margin-top: ${theme.spacing.xs};
`;

const ReviewTitle = styled.h1`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.3;
`;

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
`;

const Stars = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.warning};
`;

const RatingText = styled.span`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[800]};
`;

const MetaInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const MetaLabel = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[500]};
`;

const MetaValue = styled.span`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[800]};
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.gray[200]};
  margin: ${theme.spacing.lg} 0;
`;

const TrustScoreSection = styled.div`
  background: ${theme.colors.background.secondary};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing.lg};
`;

const TrustScoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
`;

const TrustScoreTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[800]};
`;

const TrustScoreHelp = styled.span`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.gray[500]};
`;

const TrustScoreDisplay = styled.div<{ color: string }>`
  text-align: center;
  margin-bottom: ${theme.spacing.md};
`;

const TrustScoreNumber = styled.div`
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${props => props.color};
  line-height: 1;
`;

const TrustScoreLabel = styled.div`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[600]};
  margin-top: ${theme.spacing.sm};
`;

const TrustScoreBar = styled.div`
  width: 100%;
  height: 12px;
  background-color: ${theme.colors.gray[200]};
  border-radius: ${theme.borderRadius.full};
  overflow: hidden;
  margin-bottom: ${theme.spacing.lg};
`;

const TrustScoreProgress = styled.div<{ width: number; color: string }>`
  width: ${props => props.width}%;
  height: 100%;
  background-color: ${props => props.color};
  transition: width 0.3s ease;
`;

const VoteStats = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

const VoteStat = styled.div<{ positive?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing.md};
  background: ${props => props.positive ? 
    `linear-gradient(135deg, ${theme.colors.success}15 0%, ${theme.colors.success}05 100%)` : 
    `${theme.colors.gray[100]}`
  };
  border-radius: ${theme.borderRadius.md};
`;

const VoteIcon = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  margin-bottom: ${theme.spacing.xs};
`;

const VoteCount = styled.div`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[800]};
`;

const VoteLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
`;

const VoteSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.lg};
`;

const VoteQuestion = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.md};
`;

const VoteButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.sm};
`;

const VoteButton = styled.button<{ active?: boolean; positive?: boolean }>`
  flex: 1;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  border-radius: ${theme.borderRadius.md};
  border: 2px solid ${props => {
    if (props.active) {
      return props.positive ? theme.colors.success : theme.colors.danger;
    }
    return theme.colors.gray[300];
  }};
  background-color: ${props => {
    if (props.active) {
      return props.positive ? theme.colors.success : theme.colors.danger;
    }
    return theme.colors.white;
  }};
  color: ${props => props.active ? theme.colors.white : theme.colors.gray[700]};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${props => props.positive ? theme.colors.success : theme.colors.danger};
    background-color: ${props => {
      if (props.active) {
        return props.positive ? theme.colors.success : theme.colors.danger;
      }
      return props.positive ? `${theme.colors.success}15` : `${theme.colors.danger}15`;
    }};
  }
`;

const VoteDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[500]};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;

const ShareButton = styled(Button)`
  flex: 1;
`;

const ReportButton = styled(Button)`
  flex: 1;
  background-color: ${theme.colors.danger};
  
  &:hover {
    background-color: #dc2626;
  }
`;

const ReviewContent = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.base};
  margin-bottom: ${theme.spacing.xl};
`;

const ContentTitle = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.lg};
`;

const ProsCons = styled.div`
  margin-bottom: ${theme.spacing.lg};
  padding: ${theme.spacing.lg};
  background: ${theme.colors.background.secondary};
  border-radius: ${theme.borderRadius.md};
`;

const ProsConsTitle = styled.h3<{ positive?: boolean }>`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${props => props.positive ? theme.colors.success : theme.colors.danger};
  margin-bottom: ${theme.spacing.md};
`;

const ProsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProsItem = styled.li`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[700]};
  padding: ${theme.spacing.sm} 0;
  border-bottom: 1px solid ${theme.colors.gray[200]};
  
  &:last-child {
    border-bottom: none;
  }
`;

const ConsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ConsItem = styled.li`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[700]};
  padding: ${theme.spacing.sm} 0;
  border-bottom: 1px solid ${theme.colors.gray[200]};
  
  &:last-child {
    border-bottom: none;
  }
`;

const ContentBody = styled.div`
  font-size: ${theme.typography.fontSize.base};
  line-height: 1.8;
  color: ${theme.colors.gray[700]};
  
  p {
    margin-bottom: ${theme.spacing.md};
  }
`;

const TagSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.gray[200]};
`;

const Tag = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.primary};
  background-color: ${theme.colors.purple[100]};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.full};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const ReviewerSection = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const ReviewerCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.base};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
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
  flex-shrink: 0;
`;

const ReviewerInfo = styled.div`
  flex: 1;
`;

const ReviewerName = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.md};
`;

const ReviewerStats = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
`;

const ReviewerStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const StatLabel = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[500]};
`;

const StatValue = styled.span<{ color?: string }>`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${props => props.color || theme.colors.gray[800]};
`;

const ViewProfileButton = styled(Button)``;

const RelatedSection = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const RelatedTitle = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.lg};
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.lg};
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RelatedCard = styled(Link)`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.base};
  text-decoration: none;
  color: ${theme.colors.gray[800]};
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const RelatedImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const RelatedContent = styled.div`
  padding: ${theme.spacing.md};
`;

const RelatedProductName = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing.xs};
`;

const RelatedReviewTitle = styled.h4`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const RelatedMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RelatedRating = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.warning};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

const RelatedTrust = styled.span<{ color: string }>`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.white};
  background-color: ${props => props.color};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

const LoadingText = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.gray[600]};
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: ${theme.spacing.lg};
`;

const ErrorIcon = styled.div`
  font-size: ${theme.typography.fontSize['5xl']};
`;

const ErrorText = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.gray[700]};
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.gray[200]};
`;

const ModalTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[800]};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${theme.typography.fontSize['3xl']};
  color: ${theme.colors.gray[500]};
  cursor: pointer;
  line-height: 1;
  
  &:hover {
    color: ${theme.colors.gray[700]};
  }
`;

const ModalBody = styled.div`
  padding: ${theme.spacing.lg};
`;

const ModalDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing.lg};
`;

const ReportOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const ReportOption = styled.button`
  padding: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.base};
  text-align: left;
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray[700]};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${theme.colors.danger};
    background-color: ${theme.colors.danger}15;
    color: ${theme.colors.danger};
  }
`;