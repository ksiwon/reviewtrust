// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { theme, Container, Button, Input, Card } from '../styles/GlobalStyle';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await login(); // Mock login (always success)
    setIsLoading(false);
    navigate('/');
  };

  return (
    <LoginContainer>
      <Container>
        <LoginCard>
          <LoginHeader>
            <Logo>⭐</Logo>
            <Title>ReviewTrust 로그인</Title>
            <Subtitle>신뢰할 수 있는 리뷰 플랫폼에 오신 것을 환영합니다</Subtitle>
          </LoginHeader>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>이메일</Label>
              <Input 
                type="email" 
                placeholder="user@example.com" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label>비밀번호</Label>
              <Input 
                type="password" 
                placeholder="비밀번호를 입력하세요" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </FormGroup>

            <Button type="submit" fullWidth disabled={isLoading}>
              {isLoading ? '로그인 중...' : '로그인'}
            </Button>
          </Form>

          <Divider>또는</Divider>

          <DemoButton type="button" onClick={handleSubmit} variant="secondary" fullWidth>
            데모 계정으로 체험하기
          </DemoButton>
        </LoginCard>
      </Container>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  padding: ${theme.spacing['3xl']} 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  background-color: ${theme.colors.background.secondary};
`;

const LoginCard = styled(Card)`
  max-width: 450px;
  margin: 0 auto;
  padding: ${theme.spacing['2xl']};
`;

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const Logo = styled.div`
  font-size: ${theme.typography.fontSize['4xl']};
  margin-bottom: ${theme.spacing.sm};
`;

const Title = styled.h1`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing.xs};
`;

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[500]};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const Label = styled.label`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[700]};
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: ${theme.spacing.xl} 0;
  color: ${theme.colors.gray[400]};
  font-size: ${theme.typography.fontSize.sm};
  
  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${theme.colors.gray[200]};
  }
  
  &::before { margin-right: ${theme.spacing.md}; }
  &::after { margin-left: ${theme.spacing.md}; }
`;

const DemoButton = styled(Button)``;