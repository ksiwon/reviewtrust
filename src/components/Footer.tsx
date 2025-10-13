// src/components/Footer.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/GlobalStyle';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterColumn>
            <FooterLogo>
              <Logo>⭐</Logo>
              <LogoText>ReviewTrust</LogoText>
            </FooterLogo>
            <FooterDescription>
              광고 없는 순수한 리뷰 플랫폼<br />
              커뮤니티가 함께 만드는 신뢰할 수 있는 리뷰 문화
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">📘</SocialLink>
              <SocialLink href="#" aria-label="Instagram">📷</SocialLink>
              <SocialLink href="#" aria-label="Twitter">🐦</SocialLink>
              <SocialLink href="#" aria-label="YouTube">📺</SocialLink>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>서비스</ColumnTitle>
            <FooterLink to="/reviews">리뷰 둘러보기</FooterLink>
            <FooterLink to="/write-review">리뷰 작성하기</FooterLink>
            <FooterLink to="/rewards">리워드 프로그램</FooterLink>
            <FooterLink to="/how-it-works">이용 방법</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>정책</ColumnTitle>
            <FooterLink to="/terms">이용약관</FooterLink>
            <FooterLink to="/privacy">개인정보처리방침</FooterLink>
            <FooterLink to="/review-policy">리뷰 작성 정책</FooterLink>
            <FooterLink to="/trust-system">신뢰도 시스템</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>고객 지원</ColumnTitle>
            <FooterLink to="/faq">자주 묻는 질문</FooterLink>
            <FooterLink to="/contact">문의하기</FooterLink>
            <FooterLink to="/report">신고 센터</FooterLink>
            <FooterLink to="/guide">이용 가이드</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>뉴스레터</ColumnTitle>
            <NewsletterDescription>
              새로운 리뷰와 혜택 소식을 받아보세요
            </NewsletterDescription>
            <NewsletterForm onSubmit={(e) => { e.preventDefault(); alert('뉴스레터 구독이 완료되었습니다!'); }}>
              <NewsletterInput placeholder="이메일 주소" type="email" required />
              <NewsletterButton type="submit">구독</NewsletterButton>
            </NewsletterForm>
          </FooterColumn>
        </FooterTop>

        <FooterDivider />

        <FooterBottom>
          <Copyright>
            © 2024 ReviewTrust. All rights reserved.
          </Copyright>
          <FooterLinks>
            <FooterBottomLink to="/about">회사 소개</FooterBottomLink>
            <FooterBottomLink to="/careers">채용</FooterBottomLink>
            <FooterBottomLink to="/press">보도자료</FooterBottomLink>
            <FooterBottomLink to="/partners">파트너십</FooterBottomLink>
          </FooterLinks>
        </FooterBottom>

        <TrustBadges>
          <TrustBadge>
            <BadgeIcon>🔒</BadgeIcon>
            <BadgeText>안전한 거래</BadgeText>
          </TrustBadge>
          <TrustBadge>
            <BadgeIcon>✓</BadgeIcon>
            <BadgeText>인증된 리뷰어</BadgeText>
          </TrustBadge>
          <TrustBadge>
            <BadgeIcon>🚫</BadgeIcon>
            <BadgeText>광고 없음</BadgeText>
          </TrustBadge>
          <TrustBadge>
            <BadgeIcon>🎁</BadgeIcon>
            <BadgeText>보상 프로그램</BadgeText>
          </TrustBadge>
        </TrustBadges>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

// 스타일 컴포넌트
const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${theme.colors.gray[900]};
  color: ${theme.colors.gray[300]};
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${theme.spacing['3xl']} ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} ${theme.spacing.md};
  }
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing['2xl']};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.lg};
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
`;

const Logo = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
`;

const LogoText = styled.h2`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.white};
`;

const FooterDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: ${theme.colors.gray[400]};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.sm};
`;

const SocialLink = styled.a`
  font-size: ${theme.typography.fontSize['2xl']};
  transition: transform 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const ColumnTitle = styled.h3`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.sm};
`;

const FooterLink = styled(Link)`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[400]};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${theme.colors.white};
  }
`;

const NewsletterDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[400]};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.sm};
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.sm};
  background-color: ${theme.colors.gray[800]};
  border: 1px solid ${theme.colors.gray[700]};
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.white};
  font-family: ${theme.typography.fontFamily.primary};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
  
  &::placeholder {
    color: ${theme.colors.gray[500]};
  }
`;

const NewsletterButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: ${theme.typography.fontFamily.primary};
  flex-shrink: 0;
  
  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;

const FooterDivider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.gray[800]};
  margin: ${theme.spacing['2xl']} 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing.md};
    align-items: flex-start;
  }
`;

const Copyright = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[500]};
`;

const FooterLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-wrap: wrap;
    gap: ${theme.spacing.md};
  }
`;

const FooterBottomLink = styled(Link)`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[500]};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${theme.colors.white};
  }
`;

const TrustBadges = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.gray[800]};
  border-radius: ${theme.borderRadius.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    padding: ${theme.spacing.lg};
  }
`;

const TrustBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  text-align: center;
`;

const BadgeIcon = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
`;

const BadgeText = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[400]};
`;