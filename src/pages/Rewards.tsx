// src/pages/Rewards.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RewardTransaction } from '../types';
import { rewardTiers } from '../data/mockData';
import { reviewService } from '../api/reviewService';
import { useAuth } from '../context/AuthContext';
import { theme, Container, Section, SectionTitle, Card } from '../styles/GlobalStyle';

const Rewards: React.FC = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState<RewardTransaction[]>([]);
  
  useEffect(() => {
    if (user) {
      // Error 3 해결: 받아온 데이터를 RewardTransaction[] 타입으로 단언하여 상태 업데이트
      reviewService.getTransactions().then((data) => {
        setTransactions(data as RewardTransaction[]);
      });
    }
  }, [user]);

  if (!user) return <Container style={{ padding: '50px', textAlign: 'center' }}>로그인이 필요합니다.</Container>;

  const currentTier = rewardTiers.find(t => user.rewardPoints >= t.threshold) || rewardTiers[0];

  return (
    <Container style={{ paddingTop: '40px' }}>
      <PageHeader>
        <SectionTitle>리워드 센터</SectionTitle>
        <UserSummary>
          <SummaryCard>
            <Label>내 등급</Label>
            <Value style={{ color: currentTier.color }}>{currentTier.name}</Value>
          </SummaryCard>
          <SummaryCard>
            <Label>보유 포인트</Label>
            <Value>{user.rewardPoints.toLocaleString()} P</Value>
          </SummaryCard>
          <SummaryCard>
            <Label>신뢰도</Label>
            <Value>{user.trustScore} 점</Value>
          </SummaryCard>
        </UserSummary>
      </PageHeader>

      <Section>
        <SectionTitle>포인트 내역</SectionTitle>
        <TransactionList>
          {transactions.map(t => (
            <TransactionItem key={t._id}>
              <TransInfo>
                <TransReason>{t.reason}</TransReason>
                <TransDate>{new Date(t.created_at).toLocaleDateString()}</TransDate>
              </TransInfo>
              <TransPoints type={t.type}>
                {t.type === 'earn' ? '+' : '-'}{t.points.toLocaleString()} P
              </TransPoints>
            </TransactionItem>
          ))}
        </TransactionList>
      </Section>
    </Container>
  );
};

export default Rewards;

const PageHeader = styled.div`margin-bottom: 40px;`;
const UserSummary = styled.div`display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; @media (max-width: 768px) { grid-template-columns: 1fr; }`;
const SummaryCard = styled(Card)`padding: 30px; text-align: center;`;
const Label = styled.div`color: ${theme.colors.gray[600]}; margin-bottom: 10px;`;
const Value = styled.div`font-size: 24px; font-weight: bold;`;
const TransactionList = styled.div`display: flex; flex-direction: column; gap: 15px;`;
const TransactionItem = styled.div`background: white; padding: 20px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; box-shadow: ${theme.shadows.sm};`;
const TransInfo = styled.div``;
const TransReason = styled.div`font-weight: bold; margin-bottom: 5px;`;
const TransDate = styled.div`font-size: 12px; color: ${theme.colors.gray[500]};`;
const TransPoints = styled.div<{ type: 'earn' | 'spend' }>`
  font-weight: bold; font-size: 18px; color: ${props => props.type === 'earn' ? theme.colors.success : theme.colors.danger};
`;