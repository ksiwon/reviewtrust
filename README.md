# ReviewTrust - 신뢰할 수 있는 리뷰 플랫폼

## 📋 프로젝트 개요

ReviewTrust는 광고와 홍보성 리뷰로 인한 문제를 해결하기 위한 커뮤니티 기반 리뷰 플랫폼입니다.

### 핵심 문제 (Problem)
- 온라인 리뷰 생태계에 광고/홍보성 리뷰가 만연
- 소비자가 진실된 리뷰와 협찬 리뷰를 구분하기 어려움
- 성실한 리뷰어가 정당한 가치를 인정받지 못함

### 해결책 (Solution)
- **커뮤니티 기반 신뢰도 평가**: 사용자 간 리뷰 평가 시스템으로 신뢰도 점수 부여
- **보상 시스템**: 높은 신뢰도를 받은 리뷰에 포인트 보상 제공
- **자율적 품질 관리**: 광고성/홍보성 리뷰는 낮은 평가로 자동 필터링

## 🎯 주요 기능

### 1. 신뢰도 점수 시스템
- 각 리뷰에 0-100점의 신뢰도 점수 부여
- 커뮤니티 투표(도움됨/도움안됨)로 점수 결정
- 신뢰도에 따라 리뷰 노출 순위 조정

### 2. 구매 인증
- 실제 구매 증빙 제출 필수
- 구매 인증된 리뷰는 추가 가산점
- 개인정보는 확인 후 자동 삭제

### 3. 리워드 프로그램
- 기본 리뷰 작성: 100P
- 구매 인증: +50P
- 이미지 첨부: +10P/장
- 높은 신뢰도 달성: 추가 보너스

### 4. 커뮤니티 투표
- 도움됨/도움안됨 투표 기능
- 투표 결과가 신뢰도 점수에 반영
- 광고성 리뷰 신고 기능

## 🏗️ 프로젝트 구조

```
src/
├── types/
│   └── index.ts              # TypeScript 타입 정의
├── data/
│   └── mockData.ts           # Mock 데이터
├── styles/
│   └── GlobalStyle.ts        # 전역 스타일 및 테마
├── components/
│   ├── Header.tsx            # 헤더 컴포넌트
│   └── Footer.tsx            # 푸터 컴포넌트
├── pages/
│   ├── Home.tsx              # 홈 페이지
│   ├── Reviews.tsx           # 리뷰 목록 페이지
│   ├── ReviewDetail.tsx      # 리뷰 상세 페이지
│   └── WriteReview.tsx       # 리뷰 작성 페이지
└── App.tsx                   # 메인 앱 컴포넌트
```

## 💻 기술 스택

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: styled-components
- **Routing**: React Router v6
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: Create React App

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
npm install

# 필요한 패키지
npm install react-router-dom styled-components
npm install --save-dev @types/styled-components
```

### 개발 서버 실행

```bash
npm start
```

개발 서버가 `http://localhost:3000`에서 실행됩니다.

### 빌드

```bash
npm run build
```

## 📱 페이지 구성

### 1. Home (`/`)
- 히어로 섹션: 플랫폼 소개
- 카테고리 탐색
- 신뢰도 높은 리뷰 추천
- 이달의 신뢰받는 리뷰어

### 2. Reviews (`/reviews`)
- 리뷰 목록 및 검색
- 카테고리별 필터링
- 정렬 옵션 (최신순, 신뢰도순, 도움됨순, 평점순)
- 구매 인증 필터
- 페이지네이션

### 3. Review Detail (`/review/:id`)
- 제품 이미지 갤러리
- 상세 리뷰 내용
- 신뢰도 점수 표시
- 장단점 목록
- 투표 기능 (도움됨/도움안됨)
- 리뷰어 정보
- 관련 리뷰 추천
- 신고 기능

### 4. Write Review (`/write-review`)
**4단계 작성 프로세스:**

#### Step 1: 제품 정보
- 브랜드명
- 제품명
- 카테고리 선택
- 평점 (1-5점)

#### Step 2: 리뷰 작성
- 리뷰 제목
- 상세 내용 (최소 50자)
- 장점 목록
- 단점 목록

#### Step 3: 구매 인증
- 구매일
- 사용 기간
- 구매 증빙 자료 업로드

#### Step 4: 추가 정보
- 제품 이미지 업로드 (최대 5장)
- 태그 추가
- 예상 보상 포인트 확인

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: #A332FF (보라색)
- **Success**: #10B981 (녹색)
- **Warning**: #F59E0B (주황색)
- **Danger**: #EF4444 (빨간색)

### 신뢰도 점수 색상
- 90-100점: 녹색 (매우 신뢰)
- 70-89점: 파란색 (신뢰)
- 50-69점: 주황색 (보통)
- 0-49점: 빨간색 (주의)

### 타이포그래피
- Font Family: -apple-system, sans-serif
- Font Sizes: 12px ~ 48px
- Font Weights: 300 ~ 800

## 🔒 보안 및 개인정보

- 구매 증빙 자료는 관리자 확인 후 자동 삭제
- 개인정보 마스킹 처리 권장
- 신고된 리뷰는 관리자 검토 후 조치

## 📊 데이터 구조

### Review 타입
```typescript
interface Review {
  _id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  rating: number;
  productName: string;
  productBrand?: string;
  imageUrl: string;
  trustScore: number;
  helpfulVotes: number;
  notHelpfulVotes: number;
  verifiedPurchase: boolean;
  purchaseDate?: string;
  usagePeriod?: string;
  pros?: string[];
  cons?: string[];
  tags?: string[];
  views: number;
}
```

## 🎯 향후 개선 사항

### 기능 추가
- [ ] 실시간 알림 시스템
- [ ] 리뷰어 프로필 페이지
- [ ] 포인트 사용처 확장
- [ ] 리뷰 댓글 기능
- [ ] 제품 비교 기능
- [ ] 리뷰 북마크

### 기술 개선
- [ ] Redux/Zustand 상태 관리
- [ ] React Query로 서버 상태 관리
- [ ] 이미지 최적화
- [ ] PWA 지원
- [ ] SEO 최적화
- [ ] 접근성 개선

### AI 기능
- [ ] 광고성 리뷰 자동 감지
- [ ] 리뷰 요약 생성
- [ ] 감성 분석
- [ ] 제품 추천 시스템

## 🤝 기여 가이드

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이센스

MIT License

## 👥 팀

- 기획: [Your Name]
- 디자인: [Your Name]
- 개발: [Your Name]

## 📞 문의

- 이메일: contact@reviewtrust.com
- 웹사이트: https://reviewtrust.com
- GitHub: https://github.com/reviewtrust

---

**ReviewTrust** - 신뢰할 수 있는 리뷰 문화를 만들어갑니다 ⭐