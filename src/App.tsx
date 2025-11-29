// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './styles/GlobalStyle';
import { AuthProvider } from './context/AuthContext';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import ReviewDetail from './pages/ReviewDetail';
import WriteReview from './pages/WriteReview';
import Rewards from './pages/Rewards';
import Login from './pages/Login';

const AppContent: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/review/:id" element={<ReviewDetail />} />
            <Route path="/write-review" element={<WriteReview />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
};

const NotFound: React.FC = () => (
  <NotFoundContainer>
    <h1>404</h1>
    <p>페이지를 찾을 수 없습니다.</p>
  </NotFoundContainer>
);

export default App;

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; font-family: ${theme.typography.fontFamily.primary}; }
  body { background-color: ${theme.colors.background.primary}; color: ${theme.colors.gray[800]}; overflow-x: hidden; }
  a { color: inherit; text-decoration: none; }
  button, input, textarea, select { font-family: inherit; }
`;

const AppContainer = styled.div`
  display: flex; flex-direction: column; min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1; width: 100%;
`;

const NotFoundContainer = styled.div`
  display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh;
`;