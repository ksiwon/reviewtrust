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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
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

  // Pagination Logic
  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const currentTransactions = transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          {currentTransactions.map(t => (
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

        {totalPages > 1 && (
          <PaginationContainer>
            <PageButton 
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              &lt;
            </PageButton>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <PageButton
                key={page}
                active={currentPage === page}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PageButton>
            ))}
            <PageButton 
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              &gt;
            </PageButton>
          </PaginationContainer>
        )}
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
const TransactionList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
`;
const TransactionItem = styled.div`background: white; padding: 20px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; box-shadow: ${theme.shadows.sm};`;
const TransInfo = styled.div``;
const TransReason = styled.div`font-weight: bold; margin-bottom: 5px;`;
const TransDate = styled.div`font-size: 12px; color: ${theme.colors.gray[500]};`;
const TransPoints = styled.div<{ type: 'earn' | 'spend' }>`
  font-weight: bold; font-size: 18px; color: ${props => props.type === 'earn' ? theme.colors.success : theme.colors.danger};
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 10px;
`;

const PageButton = styled.button<{ active?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${props => props.active ? theme.colors.primary : theme.colors.gray[300]};
  background-color: ${props => props.active ? theme.colors.primary : 'white'};
  color: ${props => props.active ? 'white' : theme.colors.gray[700]};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    border-color: ${theme.colors.primary};
    color: ${props => props.active ? 'white' : theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;