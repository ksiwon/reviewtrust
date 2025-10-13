// src/pages/Rewards.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RewardTransaction, RewardTier } from '../types';
import { mockRewardTransactions, rewardTiers } from '../data/mockData';
import { 
  theme, 
  Container, 
  Section, 
  SectionTitle,
  Card,
  Button,
  Badge
} from '../styles/GlobalStyle';

const Rewards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'calculator'>('overview');
  const [transactions, setTransactions] = useState<RewardTransaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // 계산기 상태
  const [productPrice, setProductPrice] = useState<string>('50000');
  const [hasImages, setHasImages] = useState<number>(3);
  const [hasVerification, setHasVerification] = useState<boolean>(true);
  const [reviewRating, setReviewRating] = useState<number>(90);

  // 사용자 리워드 데이터 (실제로는 Context나 props로 전달받음)
  const userRewards = {
    totalCredits: 12500,
    pendingCredits: 450,
    lifetimeEarned: 25800,
    currentTier: 'gold',
    trustScore: 95,
    reviewCount: 47,
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    setIsLoading(true);
    // 실제로는 API 호출
    setTimeout(() => {
      setTransactions(mockRewardTransactions);
      setIsLoading(false);
    }, 500);
  };

  const getCurrentTier = (): RewardTier => {
    return rewardTiers.find(tier => tier.name === userRewards.currentTier) || rewardTiers[0];
  };

  const getNextTier = (): RewardTier | null => {
    const currentIndex = rewardTiers.findIndex(tier => tier.name === userRewards.currentTier);
    return currentIndex < rewardTiers.length - 1 ? rewardTiers[currentIndex + 1] : null;
  };

  const calculateReward = (): number => {
    const baseCredit = 100; // 기본 크레딧
    const verificationBonus = hasVerification ? 50 : 0; // 구매 인증
    const imageBonus = hasImages * 10; // 이미지당 10 크레딧
    const priceBonus = Math.floor(parseInt(productPrice) * 0.005); // 가격의 0.5%
    
    // 리뷰 등급에 따른 배율
    let ratingMultiplier = 1.0;
    if (reviewRating >= 90) ratingMultiplier = 1.5;
    else if (reviewRating >= 70) ratingMultiplier = 1.3;
    else if (reviewRating >= 50) ratingMultiplier = 1.1;
    
    // 현재 등급의 배율
    const tierMultiplier = getCurrentTier().multiplier;
    
    const totalBase = baseCredit + verificationBonus + imageBonus + priceBonus;
    const total = Math.floor(totalBase * ratingMultiplier * tierMultiplier);
    
    return total;
  };

  const getProgressToNextTier = (): number => {
    const nextTier = getNextTier();
    if (!nextTier) return 100;
    
    const currentTier = getCurrentTier();
    const progress = ((userRewards.totalCredits - currentTier.threshold) / 
                     (nextTier.threshold - currentTier.threshold)) * 100;
    return Math.min(Math.max(progress, 0), 100);
  };

  return (
    <RewardsContainer>
      <Container>
        <PageHeader>
          <SectionTitle>리워드 센터</SectionTitle>
          <HeaderSubtitle>신뢰할 수 있는 리뷰로 크레딧을 받으세요</HeaderSubtitle>
        </PageHeader>

        {/* 탭 네비게이션 */}
        <TabNavigation>
          <Tab 
            active={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
          >
            💰 개요
          </Tab>
          <Tab 
            active={activeTab === 'history'}
            onClick={() => setActiveTab('history')}
          >
            📋 내역
          </Tab>
          <Tab 
            active={activeTab === 'calculator'}
            onClick={() => setActiveTab('calculator')}
          >
            🧮 계산기
          </Tab>
        </TabNavigation>

        {/* 개요 탭 */}
        {activeTab === 'overview' && (
          <>
            {/* 크레딧 요약 */}
            <Section>
              <CreditSummaryGrid>
                <CreditCard>
                  <CreditIcon>💎</CreditIcon>
                  <CreditLabel>보유 크레딧</CreditLabel>
                  <CreditValue>{userRewards.totalCredits.toLocaleString()}</CreditValue>
                  <CreditSubtext>1 크레딧 = 1원 상당</CreditSubtext>
                </CreditCard>

                <CreditCard>
                  <CreditIcon>⏳</CreditIcon>
                  <CreditLabel>대기 중</CreditLabel>
                  <CreditValue pending>{userRewards.pendingCredits.toLocaleString()}</CreditValue>
                  <CreditSubtext>검증 후 지급 예정</CreditSubtext>
                </CreditCard>

                <CreditCard>
                  <CreditIcon>📈</CreditIcon>
                  <CreditLabel>누적 획득</CreditLabel>
                  <CreditValue>{userRewards.lifetimeEarned.toLocaleString()}</CreditValue>
                  <CreditSubtext>총 {userRewards.reviewCount}개 리뷰</CreditSubtext>
                </CreditCard>
              </CreditSummaryGrid>
            </Section>

            {/* 현재 등급 */}
            <Section>
              <SectionTitle>내 등급</SectionTitle>
              <TierCard>
                <TierHeader>
                  <TierBadge color={getCurrentTier().color}>
                    <TierIcon>🏆</TierIcon>
                    <TierName>{getCurrentTier().name}</TierName>
                  </TierBadge>
                  <TierMultiplier>크레딧 {getCurrentTier().multiplier}배</TierMultiplier>
                </TierHeader>

                {getNextTier() && (
                  <>
                    <ProgressSection>
                      <ProgressLabel>
                        <span>{getNextTier()!.name}까지</span>
                        <span>{getNextTier()!.threshold - userRewards.totalCredits} 크레딧 필요</span>
                      </ProgressLabel>
                      <ProgressBar>
                        <ProgressFill width={getProgressToNextTier()} />
                      </ProgressBar>
                    </ProgressSection>
                  </>
                )}

                <BenefitsList>
                  <BenefitsTitle>현재 혜택</BenefitsTitle>
                  {getCurrentTier().benefits.map((benefit, index) => (
                    <BenefitItem key={index}>
                      <BenefitIcon>✓</BenefitIcon>
                      {benefit}
                    </BenefitItem>
                  ))}
                </BenefitsList>
              </TierCard>
            </Section>

            {/* 모든 등급 안내 */}
            <Section>
              <SectionTitle>등급별 혜택</SectionTitle>
              <TierGrid>
                {rewardTiers.map((tier) => (
                  <TierInfoCard 
                    key={tier.name}
                    active={tier.name === userRewards.currentTier}
                  >
                    <TierInfoHeader color={tier.color}>
                      <TierInfoIcon>🏆</TierInfoIcon>
                      <TierInfoName>{tier.name}</TierInfoName>
                    </TierInfoHeader>
                    <TierInfoThreshold>
                      {tier.threshold.toLocaleString()} 크레딧부터
                    </TierInfoThreshold>
                    <TierInfoMultiplier>
                      크레딧 {tier.multiplier}배
                    </TierInfoMultiplier>
                    <TierInfoBenefits>
                      {tier.benefits.map((benefit, index) => (
                        <TierInfoBenefit key={index}>
                          <span>•</span> {benefit}
                        </TierInfoBenefit>
                      ))}
                    </TierInfoBenefits>
                  </TierInfoCard>
                ))}
              </TierGrid>
            </Section>

            {/* 리워드 시스템 설명 */}
            <Section>
              <SectionTitle>리워드 획득 방법</SectionTitle>
              <InfoGrid>
                <InfoCard>
                  <InfoCardIcon>📝</InfoCardIcon>
                  <InfoCardTitle>기본 리뷰 작성</InfoCardTitle>
                  <InfoCardValue>100 크레딧</InfoCardValue>
                  <InfoCardText>모든 리뷰에 기본 지급</InfoCardText>
                </InfoCard>

                <InfoCard>
                  <InfoCardIcon>✅</InfoCardIcon>
                  <InfoCardTitle>구매 인증</InfoCardTitle>
                  <InfoCardValue>+50 크레딧</InfoCardValue>
                  <InfoCardText>구매 증빙 자료 제출 시</InfoCardText>
                </InfoCard>

                <InfoCard>
                  <InfoCardIcon>📷</InfoCardIcon>
                  <InfoCardTitle>이미지 첨부</InfoCardTitle>
                  <InfoCardValue>+10 크레딧/장</InfoCardValue>
                  <InfoCardText>최대 5장까지 추가</InfoCardText>
                </InfoCard>

                <InfoCard>
                  <InfoCardIcon>💰</InfoCardIcon>
                  <InfoCardTitle>가격 비례</InfoCardTitle>
                  <InfoCardValue>+0.5%</InfoCardValue>
                  <InfoCardText>상품 가격의 0.5% 추가</InfoCardText>
                </InfoCard>

                <InfoCard>
                  <InfoCardIcon>⭐</InfoCardIcon>
                  <InfoCardTitle>신뢰도 보너스</InfoCardTitle>
                  <InfoCardValue>최대 1.5배</InfoCardValue>
                  <InfoCardText>
                    90%+ : 1.5배<br/>
                    70%+ : 1.3배<br/>
                    50%+ : 1.1배
                  </InfoCardText>
                </InfoCard>

                <InfoCard>
                  <InfoCardIcon>🏆</InfoCardIcon>
                  <InfoCardTitle>등급 배율</InfoCardTitle>
                  <InfoCardValue>최대 2.0배</InfoCardValue>
                  <InfoCardText>등급이 높을수록 더 많은 크레딧</InfoCardText>
                </InfoCard>
              </InfoGrid>
            </Section>

            {/* 블록체인 신뢰성 */}
            <Section>
              <BlockchainSection>
                <BlockchainIcon>🔗</BlockchainIcon>
                <BlockchainContent>
                  <BlockchainTitle>블록체인 기반 투명성</BlockchainTitle>
                  <BlockchainText>
                    모든 리워드 지급 과정은 블록체인에 기록되어 투명하게 관리됩니다.
                    리뷰 작성부터 평가, 크레딧 산정, 지급까지 모든 단계를 확인할 수 있습니다.
                  </BlockchainText>
                  <BlockchainButton>
                    🔍 내 트랜잭션 확인하기
                  </BlockchainButton>
                </BlockchainContent>
              </BlockchainSection>
            </Section>
          </>
        )}

        {/* 내역 탭 */}
        {activeTab === 'history' && (
          <Section>
            <HistoryHeader>
              <SectionTitle>크레딧 내역</SectionTitle>
              <HistoryFilters>
                <FilterButton active>전체</FilterButton>
                <FilterButton>획득</FilterButton>
                <FilterButton>사용</FilterButton>
              </HistoryFilters>
            </HistoryHeader>

            {isLoading ? (
              <LoadingMessage>내역을 불러오는 중입니다...</LoadingMessage>
            ) : transactions.length === 0 ? (
              <EmptyState>
                <EmptyIcon>📭</EmptyIcon>
                <EmptyText>아직 크레딧 내역이 없습니다</EmptyText>
                <Button as={Link} to="/write-review">첫 리뷰 작성하기</Button>
              </EmptyState>
            ) : (
              <TransactionList>
                {transactions.map((transaction) => (
                  <TransactionItem key={transaction._id}>
                    <TransactionIcon type={transaction.type}>
                      {transaction.type === 'earn' ? '💰' : '💸'}
                    </TransactionIcon>
                    <TransactionContent>
                      <TransactionReason>{transaction.reason}</TransactionReason>
                      {transaction.productName && (
                        <TransactionProduct>{transaction.productName}</TransactionProduct>
                      )}
                      <TransactionDate>
                        {new Date(transaction.created_at).toLocaleDateString('ko-KR')}
                      </TransactionDate>
                    </TransactionContent>
                    <TransactionAmount type={transaction.type}>
                      {transaction.type === 'earn' ? '+' : '-'}
                      {transaction.points.toLocaleString()}
                    </TransactionAmount>
                    <TransactionStatus status={transaction.status}>
                      {transaction.status === 'completed' ? '완료' : '대기중'}
                    </TransactionStatus>
                  </TransactionItem>
                ))}
              </TransactionList>
            )}
          </Section>
        )}

        {/* 계산기 탭 */}
        {activeTab === 'calculator' && (
          <Section>
            <CalculatorContainer>
              <CalculatorLeft>
                <SectionTitle>리워드 계산기</SectionTitle>
                <CalculatorDescription>
                  예상 크레딧을 미리 계산해보세요
                </CalculatorDescription>

                <CalculatorForm>
                  <FormGroup>
                    <FormLabel>상품 가격</FormLabel>
                    <FormInput
                      type="number"
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                      placeholder="50000"
                    />
                    <FormHelp>원 단위로 입력하세요</FormHelp>
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>이미지 개수</FormLabel>
                    <SliderContainer>
                      <SliderInput
                        type="range"
                        min="0"
                        max="5"
                        value={hasImages}
                        onChange={(e) => setHasImages(parseInt(e.target.value))}
                      />
                      <SliderValue>{hasImages}장</SliderValue>
                    </SliderContainer>
                  </FormGroup>

                  <FormGroup>
                    <CheckboxContainer>
                      <Checkbox
                        type="checkbox"
                        id="verification"
                        checked={hasVerification}
                        onChange={(e) => setHasVerification(e.target.checked)}
                      />
                      <CheckboxLabel htmlFor="verification">
                        구매 인증 제출
                      </CheckboxLabel>
                    </CheckboxContainer>
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>예상 신뢰도 점수</FormLabel>
                    <SliderContainer>
                      <SliderInput
                        type="range"
                        min="0"
                        max="100"
                        value={reviewRating}
                        onChange={(e) => setReviewRating(parseInt(e.target.value))}
                      />
                      <SliderValue>{reviewRating}점</SliderValue>
                    </SliderContainer>
                    <RatingInfo>
                      {reviewRating >= 90 ? '매우 신뢰 (1.5배)' :
                       reviewRating >= 70 ? '신뢰 (1.3배)' :
                       reviewRating >= 50 ? '보통 (1.1배)' :
                       '주의 (1.0배)'}
                    </RatingInfo>
                  </FormGroup>
                </CalculatorForm>
              </CalculatorLeft>

              <CalculatorRight>
                <ResultCard>
                  <ResultTitle>예상 크레딧</ResultTitle>
                  <ResultValue>{calculateReward().toLocaleString()}</ResultValue>
                  <ResultSubtext>크레딧</ResultSubtext>

                  <ResultBreakdown>
                    <BreakdownTitle>상세 내역</BreakdownTitle>
                    <BreakdownItem>
                      <span>기본 크레딧</span>
                      <span>100</span>
                    </BreakdownItem>
                    {hasVerification && (
                      <BreakdownItem>
                        <span>구매 인증</span>
                        <span>+50</span>
                      </BreakdownItem>
                    )}
                    {hasImages > 0 && (
                      <BreakdownItem>
                        <span>이미지 ({hasImages}장)</span>
                        <span>+{hasImages * 10}</span>
                      </BreakdownItem>
                    )}
                    <BreakdownItem>
                      <span>가격 비례 (0.5%)</span>
                      <span>+{Math.floor(parseInt(productPrice) * 0.005)}</span>
                    </BreakdownItem>
                    <BreakdownDivider />
                    <BreakdownItem>
                      <span>소계</span>
                      <span>{(100 + (hasVerification ? 50 : 0) + (hasImages * 10) + Math.floor(parseInt(productPrice) * 0.005)).toLocaleString()}</span>
                    </BreakdownItem>
                    <BreakdownItem highlight>
                      <span>신뢰도 배율</span>
                      <span>×{reviewRating >= 90 ? '1.5' : reviewRating >= 70 ? '1.3' : reviewRating >= 50 ? '1.1' : '1.0'}</span>
                    </BreakdownItem>
                    <BreakdownItem highlight>
                      <span>등급 배율 ({getCurrentTier().name})</span>
                      <span>×{getCurrentTier().multiplier}</span>
                    </BreakdownItem>
                  </ResultBreakdown>

                  <CTAButton as={Link} to="/write-review">
                    리뷰 작성하기
                  </CTAButton>
                </ResultCard>
              </CalculatorRight>
            </CalculatorContainer>
          </Section>
        )}
      </Container>
    </RewardsContainer>
  );
};

export default Rewards;

// 스타일 컴포넌트
const RewardsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: ${theme.spacing.xl} 0;
  background-color: ${theme.colors.background.secondary};
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['2xl']};
`;

const HeaderSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[600]};
  margin-top: ${theme.spacing.sm};
`;

const TabNavigation = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
  border-bottom: 2px solid ${theme.colors.gray[200]};
`;

const Tab = styled.button<{ active: boolean }>`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  background: none;
  border: none;
  border-bottom: 3px solid ${props => props.active ? theme.colors.primary : 'transparent'};
  color: ${props => props.active ? theme.colors.primary : theme.colors.gray[600]};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: -2px;
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const CreditSummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CreditCard = styled(Card)`
  padding: ${theme.spacing.xl};
  text-align: center;
  background: linear-gradient(135deg, ${theme.colors.purple[50]} 0%, ${theme.colors.white} 100%);
`;

const CreditIcon = styled.div`
  font-size: ${theme.typography.fontSize['4xl']};
  margin-bottom: ${theme.spacing.md};
`;

const CreditLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing.xs};
`;

const CreditValue = styled.div<{ pending?: boolean }>`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${props => props.pending ? theme.colors.warning : theme.colors.primary};
  margin-bottom: ${theme.spacing.xs};
`;

const CreditSubtext = styled.div`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.gray[500]};
`;

const TierCard = styled(Card)`
  padding: ${theme.spacing.xl};
`;

const TierHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.xl};
`;

const TierBadge = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background-color: ${props => props.color}20;
  border: 2px solid ${props => props.color};
  border-radius: ${theme.borderRadius.full};
`;

const TierIcon = styled.span`
  font-size: ${theme.typography.fontSize['2xl']};
`;

const TierName = styled.span`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[800]};
`;

const TierMultiplier = styled(Badge)`
  font-size: ${theme.typography.fontSize.base};
`;

const ProgressSection = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing.sm};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 12px;
  background-color: ${theme.colors.gray[200]};
  border-radius: ${theme.borderRadius.full};
  overflow: hidden;
`;

const ProgressFill = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  height: 100%;
  background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.primaryLight} 100%);
  transition: width 0.3s ease;
`;

const BenefitsList = styled.div`
  background-color: ${theme.colors.background.secondary};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
`;

const BenefitsTitle = styled.h4`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.md};
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[700]};
  padding: ${theme.spacing.sm} 0;
  border-bottom: 1px solid ${theme.colors.gray[200]};
  
  &:last-child {
    border-bottom: none;
  }
`;

const BenefitIcon = styled.span`
  color: ${theme.colors.success};
  font-weight: ${theme.typography.fontWeight.bold};
`;

const TierGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.lg};
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TierInfoCard = styled(Card)<{ active: boolean }>`
  padding: ${theme.spacing.lg};
  border: 2px solid ${props => props.active ? theme.colors.primary : 'transparent'};
  position: relative;
  
  ${props => props.active && `
    &::before {
      content: '현재 등급';
      position: absolute;
      top: ${theme.spacing.sm};
      right: ${theme.spacing.sm};
      font-size: ${theme.typography.fontSize.xs};
      font-weight: ${theme.typography.fontWeight.semibold};
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      border-radius: ${theme.borderRadius.full};
    }
  `}
`;

const TierInfoHeader = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md};
  background-color: ${props => props.color}20;
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing.md};
`;

const TierInfoIcon = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
`;

const TierInfoName = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[800]};
`;

const TierInfoThreshold = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  text-align: center;
  margin-bottom: ${theme.spacing.xs};
`;

const TierInfoMultiplier = styled.div`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.md};
`;

const TierInfoBenefits = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[700]};
`;

const TierInfoBenefit = styled.div`
  padding: ${theme.spacing.xs} 0;
  display: flex;
  gap: ${theme.spacing.sm};
  
  span {
    color: ${theme.colors.primary};
  }
`;

const InfoCardValue = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const InfoCardText = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  line-height: 1.6;
`;

const BlockchainSection = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  padding: ${theme.spacing.xl};
  background: linear-gradient(135deg, ${theme.colors.blue[50]} 0%, ${theme.colors.purple[50]} 100%);
  border-radius: ${theme.borderRadius.lg};
  border: 2px solid ${theme.colors.primary};
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BlockchainIcon = styled.div`
  font-size: ${theme.typography.fontSize['5xl']};
  flex-shrink: 0;
`;

const BlockchainContent = styled.div`
  flex: 1;
`;

const BlockchainTitle = styled.h3`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.md};
`;

const BlockchainText = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[700]};
  line-height: 1.8;
  margin-bottom: ${theme.spacing.lg};
`;

const BlockchainButton = styled(Button)`
  background-color: ${theme.colors.info};
  
  &:hover {
    background-color: ${theme.colors.blue[600]};
  }
`;

const HistoryHeader = styled.div`
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

const HistoryFilters = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;

const FilterButton = styled.button<{ active?: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  background-color: ${props => props.active ? theme.colors.primary : theme.colors.white};
  color: ${props => props.active ? theme.colors.white : theme.colors.gray[700]};
  border: 1px solid ${props => props.active ? theme.colors.primary : theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? theme.colors.primaryDark : theme.colors.gray[100]};
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: ${theme.spacing['3xl']};
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[600]};
`;

const EmptyState = styled.div`
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

const TransactionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const TransactionItem = styled(Card)`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.lg};
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: auto 1fr;
    gap: ${theme.spacing.md};
  }
`;

const TransactionIcon = styled.div<{ type: 'earn' | 'spend' }>`
  font-size: ${theme.typography.fontSize['2xl']};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.type === 'earn' ? theme.colors.green[100] : theme.colors.gray[100]};
  border-radius: ${theme.borderRadius.md};
`;

const TransactionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const TransactionReason = styled.div`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[800]};
`;

const TransactionProduct = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
`;

const TransactionDate = styled.div`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.gray[500]};
`;

const TransactionAmount = styled.div<{ type: 'earn' | 'spend' }>`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${props => props.type === 'earn' ? theme.colors.success : theme.colors.danger};
  
  @media (max-width: 768px) {
    grid-column: 2;
    text-align: right;
  }
`;

const TransactionStatus = styled(Badge)<{ status: 'pending' | 'completed' }>`
  background-color: ${props => props.status === 'completed' ? theme.colors.success : theme.colors.warning};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const CalculatorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['2xl']};
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const CalculatorLeft = styled.div``;

const CalculatorDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing.xl};
`;

const CalculatorForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const FormLabel = styled.label`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[700]};
`;

const FormInput = styled.input`
  padding: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.base};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.purple[100]};
  }
`;

const FormHelp = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[500]};
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`;

const SliderInput = styled.input`
  flex: 1;
  height: 6px;
  border-radius: ${theme.borderRadius.full};
  background: ${theme.colors.gray[200]};
  outline: none;
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${theme.colors.primary};
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${theme.colors.primary};
    cursor: pointer;
    border: none;
  }
`;

const SliderValue = styled.span`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[800]};
  min-width: 60px;
  text-align: right;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[700]};
  cursor: pointer;
`;

const RatingInfo = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.primary};
`;

const CalculatorRight = styled.div`
  position: sticky;
  top: 100px;
  height: fit-content;
`;

const ResultCard = styled(Card)`
  padding: ${theme.spacing.xl};
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%);
  color: ${theme.colors.white};
`;

const ResultTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-align: center;
  margin-bottom: ${theme.spacing.md};
`;

const ResultValue = styled.div`
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${theme.spacing.xs};
`;

const ResultSubtext = styled.div`
  font-size: ${theme.typography.fontSize.lg};
  text-align: center;
  opacity: 0.9;
  margin-bottom: ${theme.spacing.xl};
`;

const ResultBreakdown = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing.lg};
`;

const BreakdownTitle = styled.h4`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing.md};
`;

const BreakdownItem = styled.div<{ highlight?: boolean }>`
  display: flex;
  justify-content: space-between;
  font-size: ${theme.typography.fontSize.sm};
  padding: ${theme.spacing.sm} 0;
  opacity: ${props => props.highlight ? 1 : 0.8};
  font-weight: ${props => props.highlight ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.normal};
`;

const BreakdownDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: ${theme.spacing.sm} 0;
`;

const CTAButton = styled(Button)`
  width: 100%;
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary};
  font-size: ${theme.typography.fontSize.lg};
  
  &:hover {
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.primaryDark};
  }
`;

const InfoGrid = styled.div`
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

const InfoCard = styled(Card)`
  padding: ${theme.spacing.xl};
  text-align: center;
  background: linear-gradient(135deg, ${theme.colors.white} 0%, ${theme.colors.purple[50]} 100%);
`;

const InfoCardIcon = styled.div`
  font-size: ${theme.typography.fontSize['4xl']};
  margin-bottom: ${theme.spacing.md};
`;

const InfoCardTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.sm};
`;