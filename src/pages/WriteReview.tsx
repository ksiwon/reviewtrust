// src/pages/WriteReview.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { categories } from '../data/mockData';
import { 
  theme, 
  Container, 
  Button, 
  Input, 
  Textarea 
} from '../styles/GlobalStyle';

interface FormData {
  productBrand: string;
  productName: string;
  category: string;
  rating: number;
  title: string;
  content: string;
  pros: string[];
  cons: string[];
  purchaseDate: string;
  usagePeriod: string;
  purchaseProof: File | null;
  images: File[];
  tags: string[];
}

const WriteReview: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    productBrand: '',
    productName: '',
    category: '',
    rating: 0,
    title: '',
    content: '',
    pros: [''],
    cons: [''],
    purchaseDate: '',
    usagePeriod: '',
    purchaseProof: null,
    images: [],
    tags: []
  });
  
  const [proInput, setProInput] = useState<string>('');
  const [conInput, setConInput] = useState<string>('');
  const [tagInput, setTagInput] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // 에러 제거
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleAddPro = () => {
    if (proInput.trim()) {
      setFormData(prev => ({
        ...prev,
        pros: [...prev.pros.filter(p => p), proInput.trim()]
      }));
      setProInput('');
    }
  };

  const handleRemovePro = (index: number) => {
    setFormData(prev => ({
      ...prev,
      pros: prev.pros.filter((_, i) => i !== index)
    }));
  };

  const handleAddCon = () => {
    if (conInput.trim()) {
      setFormData(prev => ({
        ...prev,
        cons: [...prev.cons.filter(c => c), conInput.trim()]
      }));
      setConInput('');
    }
  };

  const handleRemoveCon = (index: number) => {
    setFormData(prev => ({
      ...prev,
      cons: prev.cons.filter((_, i) => i !== index)
    }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (formData.images.length + files.length <= 5) {
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, ...files]
        }));
      } else {
        alert('이미지는 최대 5개까지 업로드할 수 있습니다.');
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleProofUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        purchaseProof: e.target.files![0]
      }));
    }
  };

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (stepNumber === 1) {
      if (!formData.productBrand) newErrors.productBrand = '브랜드를 입력해주세요.';
      if (!formData.productName) newErrors.productName = '제품명을 입력해주세요.';
      if (!formData.category) newErrors.category = '카테고리를 선택해주세요.';
      if (formData.rating === 0) newErrors.rating = '평점을 선택해주세요.';
    }

    if (stepNumber === 2) {
      if (!formData.title) newErrors.title = '제목을 입력해주세요.';
      if (!formData.content || formData.content.length < 50) {
        newErrors.content = '내용을 50자 이상 입력해주세요.';
      }
    }

    if (stepNumber === 3) {
      if (!formData.purchaseDate) newErrors.purchaseDate = '구매일을 선택해주세요.';
      if (!formData.usagePeriod) newErrors.usagePeriod = '사용 기간을 입력해주세요.';
      if (!formData.purchaseProof) newErrors.purchaseProof = '구매 증빙을 업로드해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(step)) return;

    // 실제로는 API 호출
    console.log('리뷰 제출:', formData);
    
    alert('리뷰가 성공적으로 등록되었습니다! 커뮤니티 검증 후 포인트가 지급됩니다.');
    navigate('/reviews');
  };

  return (
    <WriteReviewContainer>
      <Container>
        <PageHeader>
          <PageTitle>리뷰 작성하기</PageTitle>
          <StepIndicator>
            <Step active={step >= 1} completed={step > 1}>1. 제품 정보</Step>
            <StepDivider />
            <Step active={step >= 2} completed={step > 2}>2. 리뷰 작성</Step>
            <StepDivider />
            <Step active={step >= 3} completed={step > 3}>3. 구매 인증</Step>
            <StepDivider />
            <Step active={step >= 4}>4. 추가 정보</Step>
          </StepIndicator>
        </PageHeader>

        <FormContainer>
          {/* Step 1: 제품 정보 */}
          {step === 1 && (
            <StepContent>
              <StepTitle>제품 정보를 입력해주세요</StepTitle>
              
              <FormGroup>
                <Label>브랜드 *</Label>
                <Input
                  type="text"
                  placeholder="예: Apple, Samsung, LG..."
                  value={formData.productBrand}
                  onChange={(e) => handleInputChange('productBrand', e.target.value)}
                />
                {errors.productBrand && <ErrorText>{errors.productBrand}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <Label>제품명 *</Label>
                <Input
                  type="text"
                  placeholder="정확한 제품명을 입력해주세요"
                  value={formData.productName}
                  onChange={(e) => handleInputChange('productName', e.target.value)}
                />
                {errors.productName && <ErrorText>{errors.productName}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <Label>카테고리 *</Label>
                <CategoryGrid>
                  {categories.map((cat) => (
                    <CategoryButton
                      key={cat.value}
                      active={formData.category === cat.value}
                      onClick={() => handleInputChange('category', cat.value)}
                    >
                      <CategoryEmoji>{cat.icon}</CategoryEmoji>
                      <CategoryLabel>{cat.label}</CategoryLabel>
                    </CategoryButton>
                  ))}
                </CategoryGrid>
                {errors.category && <ErrorText>{errors.category}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <Label>평점 *</Label>
                <RatingSelector>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarButton
                      key={star}
                      active={star <= formData.rating}
                      onClick={() => handleInputChange('rating', star)}
                    >
                      ★
                    </StarButton>
                  ))}
                  <RatingText>
                    {formData.rating > 0 ? `${formData.rating}.0` : '평점을 선택하세요'}
                  </RatingText>
                </RatingSelector>
                {errors.rating && <ErrorText>{errors.rating}</ErrorText>}
              </FormGroup>

              <ButtonGroup>
                <Button variant="secondary" onClick={() => navigate(-1)}>
                  취소
                </Button>
                <Button onClick={handleNextStep}>
                  다음 단계
                </Button>
              </ButtonGroup>
            </StepContent>
          )}

          {/* Step 2: 리뷰 작성 */}
          {step === 2 && (
            <StepContent>
              <StepTitle>솔직한 리뷰를 작성해주세요</StepTitle>
              <StepDescription>
                광고나 홍보성 내용이 아닌, 실제 사용 경험을 상세히 작성해주세요.
                커뮤니티 투표로 신뢰도가 결정됩니다.
              </StepDescription>

              <FormGroup>
                <Label>리뷰 제목 *</Label>
                <Input
                  type="text"
                  placeholder="리뷰를 요약하는 제목을 입력하세요"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  maxLength={100}
                />
                <CharCount>{formData.title.length}/100</CharCount>
                {errors.title && <ErrorText>{errors.title}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <Label>상세 리뷰 *</Label>
                <Textarea
                  placeholder="제품을 사용하면서 느낀 점을 자세히 작성해주세요. (최소 50자)"
                  value={formData.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  rows={10}
                />
                <CharCount>{formData.content.length}자</CharCount>
                {errors.content && <ErrorText>{errors.content}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <Label>장점</Label>
                <ListInputContainer>
                  <Input
                    type="text"
                    placeholder="장점을 입력하고 Enter를 누르세요"
                    value={proInput}
                    onChange={(e) => setProInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddPro();
                      }
                    }}
                  />
                  <AddButton type="button" onClick={handleAddPro}>
                    추가
                  </AddButton>
                </ListInputContainer>
                <ItemList>
                  {formData.pros.filter(p => p).map((pro, index) => (
                    <ListItem key={index}>
                      <ItemText>✓ {pro}</ItemText>
                      <RemoveButton onClick={() => handleRemovePro(index)}>×</RemoveButton>
                    </ListItem>
                  ))}
                </ItemList>
              </FormGroup>

              <FormGroup>
                <Label>단점</Label>
                <ListInputContainer>
                  <Input
                    type="text"
                    placeholder="단점을 입력하고 Enter를 누르세요"
                    value={conInput}
                    onChange={(e) => setConInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddCon();
                      }
                    }}
                  />
                  <AddButton type="button" onClick={handleAddCon}>
                    추가
                  </AddButton>
                </ListInputContainer>
                <ItemList>
                  {formData.cons.filter(c => c).map((con, index) => (
                    <ListItem key={index}>
                      <ItemText>✗ {con}</ItemText>
                      <RemoveButton onClick={() => handleRemoveCon(index)}>×</RemoveButton>
                    </ListItem>
                  ))}
                </ItemList>
              </FormGroup>

              <ButtonGroup>
                <Button variant="secondary" onClick={handlePrevStep}>
                  이전
                </Button>
                <Button onClick={handleNextStep}>
                  다음 단계
                </Button>
              </ButtonGroup>
            </StepContent>
          )}

          {/* Step 3: 구매 인증 */}
          {step === 3 && (
            <StepContent>
              <StepTitle>구매를 인증해주세요</StepTitle>
              <StepDescription>
                구매 인증된 리뷰는 더 높은 신뢰도를 받으며, 추가 포인트가 지급됩니다.
              </StepDescription>

              <FormGroup>
                <Label>구매일 *</Label>
                <Input
                  type="date"
                  value={formData.purchaseDate}
                  onChange={(e) => handleInputChange('purchaseDate', e.target.value)}
                />
                {errors.purchaseDate && <ErrorText>{errors.purchaseDate}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <Label>사용 기간 *</Label>
                <Input
                  type="text"
                  placeholder="예: 1개월, 6개월, 1년..."
                  value={formData.usagePeriod}
                  onChange={(e) => handleInputChange('usagePeriod', e.target.value)}
                />
                {errors.usagePeriod && <ErrorText>{errors.usagePeriod}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <Label>구매 증빙 자료 *</Label>
                <UploadDescription>
                  주문 확인서, 영수증, 카드 내역 등을 업로드해주세요.
                  (개인정보는 가려서 업로드하셔도 됩니다)
                </UploadDescription>
                <FileInput
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleProofUpload}
                  id="proof-upload"
                />
                <FileInputLabel htmlFor="proof-upload">
                  {formData.purchaseProof ? 
                    `📄 ${formData.purchaseProof.name}` : 
                    '📁 파일 선택하기'
                  }
                </FileInputLabel>
                {errors.purchaseProof && <ErrorText>{errors.purchaseProof}</ErrorText>}
              </FormGroup>

              <InfoBox>
                <InfoIcon>🔒</InfoIcon>
                <InfoText>
                  업로드된 구매 증빙은 관리자 확인 후 자동으로 삭제됩니다.
                  개인정보는 안전하게 보호됩니다.
                </InfoText>
              </InfoBox>

              <ButtonGroup>
                <Button variant="secondary" onClick={handlePrevStep}>
                  이전
                </Button>
                <Button onClick={handleNextStep}>
                  다음 단계
                </Button>
              </ButtonGroup>
            </StepContent>
          )}

          {/* Step 4: 추가 정보 */}
          {step === 4 && (
            <StepContent>
              <StepTitle>추가 정보 (선택사항)</StepTitle>

              <FormGroup>
                <Label>제품 이미지</Label>
                <UploadDescription>
                  실제 사용한 제품 사진을 업로드하면 신뢰도가 올라갑니다. (최대 5장)
                </UploadDescription>
                <FileInput
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  id="image-upload"
                />
                <FileInputLabel htmlFor="image-upload">
                  📷 이미지 추가하기 ({formData.images.length}/5)
                </FileInputLabel>
                
                {formData.images.length > 0 && (
                  <ImagePreviewGrid>
                    {formData.images.map((img, index) => (
                      <ImagePreview key={index}>
                        <PreviewImage src={URL.createObjectURL(img)} alt={`미리보기 ${index + 1}`} />
                        <RemoveImageButton onClick={() => handleRemoveImage(index)}>
                          ×
                        </RemoveImageButton>
                      </ImagePreview>
                    ))}
                  </ImagePreviewGrid>
                )}
              </FormGroup>

              <FormGroup>
                <Label>태그</Label>
                <UploadDescription>
                  관련 키워드를 추가하면 다른 사용자가 쉽게 찾을 수 있습니다.
                </UploadDescription>
                <ListInputContainer>
                  <Input
                    type="text"
                    placeholder="태그를 입력하고 Enter를 누르세요"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                  />
                  <AddButton type="button" onClick={handleAddTag}>
                    추가
                  </AddButton>
                </ListInputContainer>
                {formData.tags.length > 0 && (
                  <TagList>
                    {formData.tags.map((tag, index) => (
                      <TagItem key={index}>
                        #{tag}
                        <RemoveButton onClick={() => handleRemoveTag(tag)}>×</RemoveButton>
                      </TagItem>
                    ))}
                  </TagList>
                )}
              </FormGroup>

              <RewardInfo>
                <RewardIcon>🎁</RewardIcon>
                <RewardContent>
                  <RewardTitle>예상 보상 포인트</RewardTitle>
                  <RewardText>
                    기본 보상: 100P<br />
                    구매 인증: +50P<br />
                    이미지 첨부: +{formData.images.length * 10}P<br />
                    <RewardTotal>총 예상 포인트: {100 + 50 + (formData.images.length * 10)}P</RewardTotal>
                  </RewardText>
                  <RewardNote>
                    * 커뮤니티 투표에서 높은 신뢰도를 받으면 추가 보상이 지급됩니다.
                  </RewardNote>
                </RewardContent>
              </RewardInfo>

              <ButtonGroup>
                <Button variant="secondary" onClick={handlePrevStep}>
                  이전
                </Button>
                <Button onClick={handleSubmit}>
                  리뷰 등록하기
                </Button>
              </ButtonGroup>
            </StepContent>
          )}
        </FormContainer>
      </Container>
    </WriteReviewContainer>
  );
};

export default WriteReview;

// 스타일 컴포넌트
const WriteReviewContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: ${theme.spacing.xl} 0;
  background-color: ${theme.colors.background.secondary};
`;

const PageHeader = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const PageTitle = styled.h1`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
`;

const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
`;

const Step = styled.div<{ active: boolean; completed?: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  border-radius: ${theme.borderRadius.full};
  background-color: ${props => {
    if (props.completed) return theme.colors.success;
    if (props.active) return theme.colors.primary;
    return theme.colors.gray[300];
  }};
  color: ${props => props.active || props.completed ? theme.colors.white : theme.colors.gray[600]};
  transition: all 0.3s ease;
`;

const StepDivider = styled.div`
  width: 40px;
  height: 2px;
  background-color: ${theme.colors.gray[300]};
`;

const FormContainer = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  box-shadow: ${theme.shadows.base};
  max-width: 800px;
  margin: 0 auto;
`;

const StepContent = styled.div`
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StepTitle = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.md};
`;

const StepDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing.xl};
  line-height: 1.6;
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const Label = styled.label`
  display: block;
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[700]};
  margin-bottom: ${theme.spacing.sm};
`;

const ErrorText = styled.span`
  display: block;
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.danger};
  margin-top: ${theme.spacing.xs};
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.md};
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CategoryButton = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.lg};
  border: 2px solid ${props => props.active ? theme.colors.primary : theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  background-color: ${props => props.active ? theme.colors.purple[50] : theme.colors.white};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: ${theme.colors.primary};
    background-color: ${theme.colors.purple[50]};
  }
`;

const CategoryEmoji = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
  margin-bottom: ${theme.spacing.sm};
`;

const CategoryLabel = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[700]};
`;

const RatingSelector = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const StarButton = styled.button<{ active: boolean }>`
  font-size: ${theme.typography.fontSize['3xl']};
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.active ? theme.colors.warning : theme.colors.gray[300]};
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const RatingText = styled.span`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[700]};
  margin-left: ${theme.spacing.md};
`;

const CharCount = styled.span`
  display: block;
  text-align: right;
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[500]};
  margin-top: ${theme.spacing.xs};
`;

const ListInputContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;

const AddButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;

const ItemList = styled.div`
  margin-top: ${theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.background.secondary};
  border-radius: ${theme.borderRadius.md};
`;

const ItemText = styled.span`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[700]};
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.gray[500]};
  cursor: pointer;
  line-height: 1;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${theme.colors.danger};
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  background-color: ${theme.colors.purple[100]};
  color: ${theme.colors.primary};
  border: 2px dashed ${theme.colors.primary};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${theme.colors.purple[200]};
  }
`;

const UploadDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing.md};
`;

const InfoBox = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.blue[50]};
  border-radius: ${theme.borderRadius.md};
  margin-top: ${theme.spacing.lg};
`;

const InfoIcon = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  flex-shrink: 0;
`;

const InfoText = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[700]};
  line-height: 1.6;
`;

const ImagePreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImagePreview = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  border: 2px solid ${theme.colors.gray[200]};
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  background-color: ${theme.colors.danger};
  color: ${theme.colors.white};
  border: none;
  border-radius: 50%;
  font-size: ${theme.typography.fontSize.lg};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #dc2626;
    transform: scale(1.1);
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
`;

const TagItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: ${theme.colors.purple[100]};
  color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const RewardInfo = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.xl};
  background: linear-gradient(135deg, ${theme.colors.warning}15 0%, ${theme.colors.warning}05 100%);
  border-radius: ${theme.borderRadius.lg};
  border: 2px solid ${theme.colors.warning};
  margin-top: ${theme.spacing.xl};
`;

const RewardIcon = styled.div`
  font-size: ${theme.typography.fontSize['5xl']};
  flex-shrink: 0;
`;

const RewardContent = styled.div`
  flex: 1;
`;

const RewardTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.md};
`;

const RewardText = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[700]};
  line-height: 1.8;
`;

const RewardTotal = styled.div`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.warning};
  margin-top: ${theme.spacing.sm};
`;

const RewardNote = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  margin-top: ${theme.spacing.md};
  font-style: italic;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing['2xl']};
  justify-content: center;
`;