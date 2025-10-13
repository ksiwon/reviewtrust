// src/components/Header.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/GlobalStyle';

interface HeaderProps {
  isLoggedIn?: boolean;
  user?: {
    nickname: string;
    trustScore: number;
    rewardPoints: number;
  };
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn = false, user }) => {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    // 실제로는 로그아웃 로직 처리
    console.log('로그아웃');
    navigate('/');
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LeftSection>
          <LogoLink to="/">
            <Logo>⭐</Logo>
            <LogoText>ReviewTrust</LogoText>
          </LogoLink>

          <Nav>
            <NavLink to="/reviews">리뷰 둘러보기</NavLink>
            <NavLink to="/write-review">리뷰 작성</NavLink>
            <NavLink to="/rewards">리워드</NavLink>
          </Nav>
        </LeftSection>

        <RightSection>
          {isLoggedIn && user ? (
            <>
              <UserInfo>
                <UserAvatar>{user.nickname.charAt(0)}</UserAvatar>
                <UserDetails>
                  <UserName>{user.nickname}</UserName>
                  <UserStats>
                    <StatBadge trust>신뢰도 {user.trustScore}%</StatBadge>
                    <StatBadge points>{user.rewardPoints.toLocaleString()}P</StatBadge>
                  </UserStats>
                </UserDetails>
              </UserInfo>
              <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
            </>
          ) : (
            <>
              <LoginButton to="/login">로그인</LoginButton>
              <SignupButton to="/register">회원가입</SignupButton>
            </>
          )}

          <MobileMenuButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            ☰
          </MobileMenuButton>
        </RightSection>
      </HeaderContent>

      {/* 모바일 메뉴 */}
      {showMobileMenu && (
        <MobileMenu>
          <MobileNavLink to="/reviews" onClick={() => setShowMobileMenu(false)}>
            리뷰 둘러보기
          </MobileNavLink>
          <MobileNavLink to="/write-review" onClick={() => setShowMobileMenu(false)}>
            리뷰 작성
          </MobileNavLink>
          <MobileNavLink to="/rewards" onClick={() => setShowMobileMenu(false)}>
            리워드
          </MobileNavLink>
          {isLoggedIn ? (
            <MobileLogoutButton onClick={handleLogout}>
              로그아웃
            </MobileLogoutButton>
          ) : (
            <>
              <MobileNavLink to="/login" onClick={() => setShowMobileMenu(false)}>
                로그인
              </MobileNavLink>
              <MobileNavLink to="/register" onClick={() => setShowMobileMenu(false)}>
                회원가입
              </MobileNavLink>
            </>
          )}
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;

// 스타일 컴포넌트
const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.gray[200]};
  box-shadow: ${theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing['2xl']};
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  text-decoration: none;
`;

const Logo = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
`;

const LogoText = styled.h1`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
  
  @media (max-width: 768px) {
    font-size: ${theme.typography.fontSize.xl};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${theme.spacing.lg};
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[700]};
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%);
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const UserName = styled.span`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[800]};
`;

const UserStats = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};
`;

const StatBadge = styled.span<{ trust?: boolean; points?: boolean }>`
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  padding: 2px ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.sm};
  background-color: ${props => {
    if (props.trust) return theme.colors.success;
    if (props.points) return theme.colors.warning;
    return theme.colors.gray[300];
  }};
  color: ${theme.colors.white};
`;

const LoginButton = styled(Link)`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.primary};
  background-color: transparent;
  border: 2px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${theme.colors.purple[50]};
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SignupButton = styled(Link)`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoutButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[700]};
  background-color: transparent;
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${theme.colors.gray[100]};
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.gray[700]};
  cursor: pointer;
  
  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing.md};
    border-top: 1px solid ${theme.colors.gray[200]};
    background-color: ${theme.colors.white};
  }
`;

const MobileNavLink = styled(Link)`
  padding: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[700]};
  text-decoration: none;
  border-bottom: 1px solid ${theme.colors.gray[100]};
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${theme.colors.gray[50]};
  }
`;

const MobileLogoutButton = styled.button`
  padding: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[700]};
  background: none;
  border: none;
  border-bottom: 1px solid ${theme.colors.gray[100]};
  transition: background-color 0.2s ease;
  cursor: pointer;
  text-align: left;
  width: 100%;
  
  &:hover {
    background-color: ${theme.colors.gray[50]};
  }
`;