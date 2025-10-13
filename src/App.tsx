// src/App.tsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './styles/GlobalStyle';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import ReviewDetail from './pages/ReviewDetail';
import WriteReview from './pages/WriteReview';

// 임시 사용자 데이터 (실제로는 Context API나 Redux 사용)
const mockUser = {
  nickname: '테크리뷰어',
  trustScore: 95,
  rewardPoints: 12500
};

const App: React.FC = () => {
  const [isLoggedIn, ] = useState<boolean>(true); // 테스트용으로 true
  const [user] = useState(mockUser);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <AppContainer>
          <Header isLoggedIn={isLoggedIn} user={user} />
          
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/review/:id" element={<ReviewDetail />} />
              <Route path="/write-review" element={<WriteReview />} />
              
              {/* 추가 라우트 (필요시 구현) */}
              <Route path="/login" element={<ComingSoon title="로그인" />} />
              <Route path="/register" element={<ComingSoon title="회원가입" />} />
              <Route path="/rewards" element={<ComingSoon title="리워드" />} />
              <Route path="/profile/:userId" element={<ComingSoon title="프로필" />} />
              <Route path="/how-it-works" element={<ComingSoon title="이용 방법" />} />
              <Route path="/terms" element={<ComingSoon title="이용약관" />} />
              <Route path="/privacy" element={<ComingSoon title="개인정보처리방침" />} />
              <Route path="/review-policy" element={<ComingSoon title="리뷰 작성 정책" />} />
              <Route path="/trust-system" element={<ComingSoon title="신뢰도 시스템" />} />
              <Route path="/faq" element={<ComingSoon title="자주 묻는 질문" />} />
              <Route path="/contact" element={<ComingSoon title="문의하기" />} />
              <Route path="/report" element={<ComingSoon title="신고 센터" />} />
              <Route path="/guide" element={<ComingSoon title="이용 가이드" />} />
              <Route path="/about" element={<ComingSoon title="회사 소개" />} />
              <Route path="/careers" element={<ComingSoon title="채용" />} />
              <Route path="/press" element={<ComingSoon title="보도자료" />} />
              <Route path="/partners" element={<ComingSoon title="파트너십" />} />
              
              {/* 404 페이지 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainContent>
          
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

// Coming Soon 페이지 컴포넌트
const ComingSoon: React.FC<{ title: string }> = ({ title }) => {
  return (
    <ComingSoonContainer>
      <ComingSoonIcon>🚧</ComingSoonIcon>
      <ComingSoonTitle>{title}</ComingSoonTitle>
      <ComingSoonText>
        이 페이지는 준비 중입니다.<br />
        곧 만나보실 수 있습니다!
      </ComingSoonText>
      <BackButton onClick={() => window.history.back()}>
        ← 이전 페이지로
      </BackButton>
    </ComingSoonContainer>
  );
};

// 404 페이지 컴포넌트
const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundIcon>😔</NotFoundIcon>
      <NotFoundTitle>404 - 페이지를 찾을 수 없습니다</NotFoundTitle>
      <NotFoundText>
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </NotFoundText>
      <BackButton onClick={() => window.location.href = '/'}>
        홈으로 가기
      </BackButton>
    </NotFoundContainer>
  );
};

export default App;

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: ${theme.typography.fontFamily.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${theme.colors.background.primary};
    color: ${theme.colors.gray[800]};
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: ${theme.typography.fontFamily.primary};
  }

  input, textarea, select {
    font-family: ${theme.typography.fontFamily.primary};
  }

  /* 스크롤바 스타일 */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.gray[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray[400]};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.gray[500]};
  }
`;

// Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;

const ComingSoonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${theme.spacing.xl};
  text-align: center;
`;

const ComingSoonIcon = styled.div`
  font-size: ${theme.typography.fontSize['5xl']};
  margin-bottom: ${theme.spacing.lg};
`;

const ComingSoonTitle = styled.h1`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.md};
`;

const ComingSoonText = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[600]};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.xl};
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: ${theme.spacing.xl};
  text-align: center;
`;

const NotFoundIcon = styled.div`
  font-size: ${theme.typography.fontSize['5xl']};
  margin-bottom: ${theme.spacing.lg};
`;

const NotFoundTitle = styled.h1`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.md};
`;

const NotFoundText = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[600]};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.xl};
  max-width: 500px;
`;

const BackButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }
`;