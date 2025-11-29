// src/pages/WriteReview.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { categories } from '../data/mockData';
import { reviewService } from '../api/reviewService';
import { useAuth } from '../context/AuthContext';
import { theme, Container, Button, Input, Textarea } from '../styles/GlobalStyle';

const WriteReview: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const [formData, setFormData] = useState({
    productBrand: '', productName: '', category: '', rating: 0, title: '', content: '',
    pros: [], cons: [], purchaseDate: '', usagePeriod: '', verifiedPurchase: true // 데모용 자동 인증
  });

  const handleSubmit = async () => {
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    try {
      await reviewService.createReview(formData);
      alert('리뷰가 등록되었습니다. 100 포인트가 지급되었습니다!');
      navigate('/reviews');
    } catch (e) {
      console.error(e);
      alert('등록 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <PageTitle>리뷰 작성하기</PageTitle>
      <FormGroup>
        <Label>제품명</Label>
        <Input value={formData.productName} onChange={e => setFormData({...formData, productName: e.target.value})} placeholder="제품명을 입력하세요" />
      </FormGroup>
      <FormGroup>
        <Label>카테고리</Label>
        <Select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
          <option value="">선택</option>
          {categories.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>평점</Label>
        <Select value={formData.rating} onChange={e => setFormData({...formData, rating: Number(e.target.value)})}>
          <option value="0">선택</option>
          <option value="5">5점 (최고)</option>
          <option value="4">4점 (좋음)</option>
          <option value="3">3점 (보통)</option>
          <option value="2">2점 (별로)</option>
          <option value="1">1점 (나쁨)</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>제목</Label>
        <Input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
      </FormGroup>
      <FormGroup>
        <Label>내용</Label>
        <Textarea value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} rows={10} />
      </FormGroup>
      <Button onClick={handleSubmit} fullWidth>작성 완료</Button>
    </Container>
  );
};

export default WriteReview;

const PageTitle = styled.h1`font-size: 32px; font-weight: bold; margin-bottom: 30px; text-align: center;`;
const FormGroup = styled.div`margin-bottom: 20px;`;
const Label = styled.label`display: block; margin-bottom: 8px; font-weight: bold;`;
const Select = styled.select`width: 100%; padding: 12px; border: 1px solid ${theme.colors.gray[300]}; border-radius: 8px;`;