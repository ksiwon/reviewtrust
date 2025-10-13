// src/data/mockData.ts

import { Review, TopReviewer, Category } from '../types';

export const categories: Category[] = [
  { value: '전자기기', label: '전자기기', icon: '💻' },
  { value: '가전제품', label: '가전제품', icon: '🏠' },
  { value: '패션/뷰티', label: '패션/뷰티', icon: '👗' },
  { value: '식품/음료', label: '식품/음료', icon: '🍔' },
  { value: '도서/문구', label: '도서/문구', icon: '📚' },
  { value: '생활용품', label: '생활용품', icon: '🛋️' },
  { value: '서비스', label: '서비스', icon: '🎯' },
  { value: '기타', label: '기타', icon: '📦' },
];

export const mockReviews: Review[] = [
  {
    _id: '1',
    title: 'MacBook Pro M3 6개월 사용 후기 - 개발자 관점',
    content: `개발자로서 6개월간 MacBook Pro M3를 메인 개발 머신으로 사용해본 솔직한 후기입니다.

먼저 성능은 정말 만족스럽습니다. Docker 컨테이너를 여러 개 띄우고 동시에 IDE, 브라우저 등을 실행해도 전혀 버벅임이 없습니다. 특히 빌드 속도가 이전 Intel 맥북에 비해 2배 이상 빨라진 것 같습니다.

배터리 수명도 놀랍습니다. 풀로 코딩하면서 10시간 이상 사용 가능하고, 가벼운 작업이면 15시간도 거뜬합니다. 충전기 없이도 하루 종일 작업할 수 있다는 점이 정말 편합니다.

빌드 퀄리티는 역시 애플입니다. 알루미늄 유니바디 디자인에 키보드 타건감도 좋고, 트랙패드는 업계 최고 수준입니다.

단점도 있습니다. 가격이 너무 비쌉니다. 16GB RAM, 512GB SSD 기본 모델이 300만원이 넘는데, 메모리와 스토리지 업그레이드 비용이 너무 높습니다. 업그레이드가 불가능하다는 점도 아쉽습니다.

포트 개수도 부족합니다. USB-C 포트 3개로는 외장 모니터, 마우스, 키보드 등을 연결하면 허브가 필수입니다.

결론적으로 성능과 배터리는 최고지만, 가격 대비 가성비는 고민이 필요합니다. 예산이 충분하고 맥OS 생태계를 선호한다면 강력 추천하지만, 그렇지 않다면 Windows 노트북도 좋은 선택지입니다.`,
    author: '테크리뷰어',
    authorId: 'user1',
    category: '전자기기',
    rating: 4.5,
    productName: 'MacBook Pro 14" M3',
    productBrand: 'Apple',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400'
    ],
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 92,
    helpfulVotes: 145,
    notHelpfulVotes: 8,
    verifiedPurchase: true,
    purchaseDate: '2024-04-15',
    usagePeriod: '6개월',
    pros: ['빠른 성능', '긴 배터리 수명', '뛰어난 빌드 퀄리티', '조용한 팬 소음', '훌륭한 디스플레이'],
    cons: ['높은 가격', '부족한 포트 개수', '업그레이드 불가', '비싼 주변기기', '무거운 무게'],
    tags: ['개발', '프로그래밍', 'M3칩', '맥북', '노트북'],
    isSponsored: false,
    views: 2341
  },
  {
    _id: '2',
    title: 'LG 건조기 실사용 3개월 리얼 후기',
    content: `빨래가 많은 4인 가족이 3개월간 매일 사용해본 경험담입니다.

첫째로 건조 시간이 빠릅니다. 일반 세탁물은 1시간 30분 정도면 완전히 건조되고, 두꺼운 이불도 2시간이면 끝납니다. 예전에 빨래를 널어서 말리던 것에 비하면 시간이 엄청 절약됩니다.

대용량이라 한번에 많은 양을 건조할 수 있습니다. 16kg 용량이라 이불도 여유롭게 들어갑니다. 4인 가족 빨래를 2번이면 모두 처리할 수 있습니다.

소음도 생각보다 조용합니다. TV 볼륨을 조금만 높이면 신경 쓰이지 않을 정도입니다. 밤에 돌려도 가족들이 잠에서 깨지 않습니다.

전기세도 걱정했는데 생각보다 괜찮습니다. 한 달에 3-4만원 정도 증가했는데, 빨래 관리의 편의성을 생각하면 충분히 감수할 만합니다.

옷 상태도 좋습니다. 처음엔 옷이 상할까 걱정했는데, 적절한 온도로 설정하면 오히려 빨래 건조대에 말릴 때보다 부드럽게 마무리됩니다.

단점은 초기 비용이 높다는 점입니다. 100만원이 넘는 가격이 부담스럽습니다. 또한 설치 공간도 필요합니다. 우리 집은 세탁기 위에 스태킹했는데, 천장 높이를 확인해야 합니다.

3개월 사용 후 정말 만족스럽습니다. 특히 비 오는 날이나 미세먼지 심한 날 실내 건조로 인한 스트레스가 완전히 사라졌습니다. 아이들 옷이 많은 가정이라면 강력 추천합니다!`,
    author: '주부리뷰',
    authorId: 'user2',
    category: '가전제품',
    rating: 5.0,
    productName: 'LG 트롬 건조기 16kg',
    productBrand: 'LG전자',
    imageUrl: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400',
    images: ['https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 95,
    helpfulVotes: 203,
    notHelpfulVotes: 5,
    verifiedPurchase: true,
    purchaseDate: '2024-07-10',
    usagePeriod: '3개월',
    pros: ['빠른 건조', '대용량', '저소음', '부드러운 마무리', '전기세 부담 적음'],
    cons: ['높은 초기 비용', '설치 공간 필요', '무게가 무거움'],
    tags: ['가전', '건조기', '4인가족', 'LG', '세탁'],
    isSponsored: false,
    views: 3456
  },
  {
    _id: '3',
    title: '다이슨 청소기 V15 1년 사용 후기',
    content: `청소기 덕후로서 다양한 제품을 사용해봤지만, 다이슨 V15는 특별했습니다.

레이저 감지 기술이 정말 신기합니다. 바닥의 먼지를 눈으로 확인하면서 청소할 수 있어서, 청소가 제대로 됐는지 바로 알 수 있습니다. 특히 타일 바닥에서 효과가 좋습니다.

흡입력은 역시 다이슨입니다. 카펫 깊숙이 박힌 먼지까지 확실하게 빨아들입니다. 반려동물 털도 잘 제거되고, 먼지통을 비울 때마다 이렇게 많은 먼지가 있었나 싶을 정도입니다.

무선이라 이동이 자유롭습니다. 코드 없이 집 안 어디든 청소할 수 있고, 차 안 청소도 편합니다. 벽걸이 거치대로 보관도 깔끔합니다.

다양한 헤드가 유용합니다. 침대 청소용 미니 모터 헤드, 틈새용 브러시 등 상황에 맞게 활용할 수 있습니다.

하지만 무겁습니다. 2.5kg 정도인데, 팔을 들고 천장이나 커튼 청소할 때 힘듭니다. 여성이나 어르신은 좀 부담스러울 수 있습니다.

배터리 수명이 짧습니다. 강력 모드로 사용하면 10분도 안 갑니다. 일반 모드로도 30평대 아파트 청소하려면 중간에 충전해야 합니다.

소모품 가격이 비쌉니다. 필터 교체, 브러시 교체 등 순정품 가격이 부담스럽습니다.

1년 사용 후에도 성능은 여전히 좋지만, 가격 대비 가성비는 아쉽습니다. 70만원이 넘는 가격인데, 배터리와 무게 문제를 고려하면 다른 제품도 고려할 만합니다.`,
    author: '가전마니아',
    authorId: 'user3',
    category: '가전제품',
    rating: 4.0,
    productName: '다이슨 V15 디텍트',
    productBrand: 'Dyson',
    imageUrl: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400',
    images: ['https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400'],
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 88,
    helpfulVotes: 167,
    notHelpfulVotes: 12,
    verifiedPurchase: true,
    purchaseDate: '2023-10-01',
    usagePeriod: '1년',
    pros: ['강력한 흡입력', '무선의 편리함', '레이저 감지 기술', '다양한 헤드', '세련된 디자인'],
    cons: ['무거움', '짧은 배터리', '비싼 소모품', '높은 가격', '시끄러운 소음'],
    tags: ['청소기', '무선청소기', '다이슨', '가전'],
    isSponsored: false,
    views: 1892
  },
  {
    _id: '4',
    title: '에어팟 프로 2세대 - 소음차단 끝판왕',
    content: `출퇴근길 필수템이 되었습니다. 1세대와 비교하며 2세대의 개선점을 상세히 리뷰합니다.

소음차단 성능이 놀라웠습니다. 지하철에서 사용하면 정말 조용합니다. 1세대도 좋았지만 2세대는 훨씬 더 강력합니다. 엔진음, 사람 목소리 등 모든 소음이 거의 들리지 않습니다.

착용감도 편안합니다. 장시간 착용해도 귀가 아프지 않고, 실리콘 팁 사이즈도 다양해서 자신에게 맞는 걸 찾을 수 있습니다.

배터리 수명이 길어졌습니다. 노이즈 캔슬링 켜고 6시간 정도 사용 가능하고, 케이스까지 합치면 30시간 사용할 수 있습니다.

공간 오디오 기능이 신기합니다. 영화나 게임할 때 입체감이 느껴져서 몰입감이 높습니다. 

애플 생태계와의 연동이 완벽합니다. 아이폰, 아이패드, 맥북 간 자동 전환이 매끄럽습니다.

단점은 역시 가격입니다. 35만원이 넘는데, 분실하면 정말 아깝습니다. 실제로 한쪽을 잃어버렸는데 교체 비용이 10만원이 넘었습니다.

안드로이드와는 기능이 제한됩니다. 아이폰 사용자가 아니면 절반의 기능만 사용하는 느낌입니다.

7개월 사용 후 매우 만족합니다. 소음차단 성능만으로도 값어치를 합니다. 출퇴근하는 직장인이나 카페에서 일하는 분들께 강력 추천합니다!`,
    author: '이어폰덕후',
    authorId: 'user4',
    category: '전자기기',
    rating: 4.8,
    productName: 'AirPods Pro 2세대',
    productBrand: 'Apple',
    imageUrl: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400',
    images: ['https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 90,
    helpfulVotes: 189,
    notHelpfulVotes: 7,
    verifiedPurchase: true,
    purchaseDate: '2024-03-20',
    usagePeriod: '7개월',
    pros: ['뛰어난 소음차단', '편안한 착용감', '긴 배터리', '공간 오디오', '애플 생태계 연동'],
    cons: ['높은 가격', '분실 우려', '안드로이드 호환성', '비싼 교체 비용'],
    tags: ['이어폰', '무선이어폰', '에어팟', '애플', '노이즈캔슬링'],
    isSponsored: false,
    views: 2567
  },
  {
    _id: '5',
    title: '삼성 갤럭시북4 프로 실사용 리뷰',
    content: `맥북 vs 갤럭시북을 고민하시는 분들께 도움이 되길 바라며 작성합니다.

AMOLED 디스플레이가 정말 아름답습니다. 색감이 선명하고 명암비가 뛰어나서 사진 작업이나 영상 시청이 즐겁습니다. 맥북의 Liquid Retina보다 더 생생한 느낌입니다.

S펜 지원이 유용합니다. 회의 중 필기하거나 간단한 스케치를 할 때 편리합니다. 별도 구매 없이 기본 제공되는 점도 좋습니다.

얇고 가볍습니다. 1.5kg 정도로 가방에 넣고 다니기 부담 없습니다. 두께도 얇아서 슬림한 백팩에도 잘 들어갑니다.

Windows 11이 생각보다 괜찮습니다. 특히 삼성 갤럭시 폰과 연동하면 파일 전송, 알림 동기화 등이 편리합니다.

성능은 일상 작업에 충분합니다. 문서 작업, 웹 서핑, 가벼운 포토샵 작업 등은 문제없습니다.

하지만 발열이 있습니다. 무거운 작업을 하면 팬 소음과 함께 뜨거워집니다. 맥북에 비해 열 관리가 아쉽습니다.

배터리 수명도 기대에 못 미칩니다. 실사용 6-7시간 정도인데, 맥북의 10시간 이상에 비하면 아쉽습니다.

가격도 비쌉니다. 200만원이 넘는데, 이 가격이면 맥북 에어도 살 수 있어서 고민됩니다.

5개월 사용 후 Windows 노트북 중에서는 최고급이지만, 맥북과 비교하면 배터리와 발열 면에서 아쉽습니다. Windows가 꼭 필요한 분들께 추천합니다.`,
    author: '노트북리뷰어',
    authorId: 'user5',
    category: '전자기기',
    rating: 4.3,
    productName: '갤럭시북4 프로',
    productBrand: '삼성전자',
    imageUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400',
    images: ['https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400'],
    created_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 85,
    helpfulVotes: 134,
    notHelpfulVotes: 15,
    verifiedPurchase: true,
    purchaseDate: '2024-05-01',
    usagePeriod: '5개월',
    pros: ['AMOLED 디스플레이', 'S펜 지원', '얇고 가벼움', '갤럭시 연동', '세련된 디자인'],
    cons: ['발열', '배터리 수명', '높은 가격', '팬 소음', '터치패드 크기'],
    tags: ['노트북', '삼성', '갤럭시북', 'Windows', 'AMOLED'],
    isSponsored: false,
    views: 1745
  },
  {
    _id: '6',
    title: '코스트코 커클랜드 견과류 - 가성비 최고',
    content: `매일 아침 견과류를 먹는 사람으로서 다양한 제품을 먹어봤는데, 커클랜드가 가성비가 제일 좋습니다.

신선도가 좋습니다. 아몬드, 캐슈넛, 피칸 등이 바삭하고 고소합니다. 기름진 느낌 없이 담백합니다.

구성이 알차습니다. 한 봉지에 1kg 정도 들어있고, 여러 종류의 견과류가 골고루 섞여 있습니다. 아침에 한 줌씩 먹기 딱 좋습니다.

가격이 저렴합니다. 코스트코에서 15,000원 정도인데, 같은 양을 마트에서 사면 2-3만원은 합니다.

포장이 지퍼백이라 보관이 편합니다. 개봉 후에도 밀봉해서 보관할 수 있어 신선도 유지가 쉽습니다.

간식으로도 좋고 샐러드에 넣어도 좋습니다. 요거트에 섞어 먹으면 완벽한 아침 식사가 됩니다.

단점은 코스트코 회원만 살 수 있다는 점입니다. 연회비를 내야 하는데, 견과류만 사러 가기엔 아깝습니다. 다른 제품도 같이 구매할 계획이 있어야 합니다.

또한 양이 많아서 보관이 필요합니다. 1kg이라 혼자 먹으면 한 달 이상 걸리는데, 시간이 지나면 눅눅해질 수 있습니다. 밀폐 용기에 보관하거나 냉장 보관을 추천합니다.

1개월 먹어본 결과 매우 만족합니다. 건강도 챙기고 가성비도 좋아서 앞으로 계속 구매할 예정입니다!`,
    author: '건강지킴이',
    authorId: 'user6',
    category: '식품/음료',
    rating: 4.7,
    productName: '커클랜드 믹스너트',
    productBrand: 'Kirkland',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Mixed_Nuts_%28Alabama_Extension%29.jpg',
    images: ['https://upload.wikimedia.org/wikipedia/commons/7/77/Mixed_Nuts_%28Alabama_Extension%29.jpg'],
    created_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 93,
    helpfulVotes: 256,
    notHelpfulVotes: 6,
    verifiedPurchase: true,
    purchaseDate: '2024-09-01',
    usagePeriod: '1개월',
    pros: ['가성비', '신선함', '대용량', '다양한 구성', '편리한 포장'],
    cons: ['코스트코 회원만', '보관 필요', '양 조절 어려움'],
    tags: ['견과류', '코스트코', '건강식품', '아몬드', '캐슈넛'],
    isSponsored: false,
    views: 4123
  },
  {
    _id: '7',
    title: '나이키 에어맥스 러닝화 - 쿠셔닝 최고',
    content: `주 5회 러닝하는 사람으로서 여러 러닝화를 신어봤는데, 에어맥스가 쿠셔닝이 가장 좋았습니다.

착지감이 부드럽습니다. 에어 쿠션 덕분에 무릎과 발목에 충격이 덜 전달됩니다. 장거리 러닝에도 피로감이 적습니다.

디자인이 세련됐습니다. 일상복에도 잘 어울려서 러닝화 겸 운동화로 사용하고 있습니다.

통기성이 좋습니다. 메쉬 소재라 땀이 차지 않고 시원합니다. 여름에도 쾌적하게 신을 수 있습니다.

내구성도 괜찮습니다. 3개월간 거의 매일 신었는데 밑창이나 쿠션이 크게 손상되지 않았습니다.

하지만 무겁습니다. 다른 러닝화에 비해 무게감이 있어서 속도를 내기엔 부담스럽습니다. 레이스용보다는 조깅용으로 적합합니다.

사이즈가 작게 나옵니다. 평소보다 0.5cm 크게 주문하는 것을 추천합니다.

가격도 비쌉니다. 15만원 정도인데, 세일 기간을 노리면 10만원 대에 살 수 있습니다.

3개월 사용 후 러닝 초보자나 조깅 목적이라면 추천하지만, 마라톤 등 본격적인 러닝에는 더 가벼운 신발이 좋을 것 같습니다.`,
    author: '러너',
    authorId: 'user7',
    category: '패션/뷰티',
    rating: 4.2,
    productName: '에어맥스 2024',
    productBrand: 'Nike',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'],
    created_at: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 87,
    helpfulVotes: 112,
    notHelpfulVotes: 9,
    verifiedPurchase: true,
    purchaseDate: '2024-07-15',
    usagePeriod: '3개월',
    pros: ['뛰어난 쿠셔닝', '세련된 디자인', '좋은 통기성', '내구성', '편안한 착용감'],
    cons: ['무거움', '작은 사이즈', '높은 가격', '속도 낼 때 부담'],
    tags: ['러닝화', '운동화', '나이키', '에어맥스', '러닝'],
    isSponsored: false,
    views: 1534
  },
  {
    _id: '8',
    title: '아이패드 프로 M2 - 노트북 대체 가능할까?',
    content: `노트북 대신 아이패드로 작업할 수 있을까 궁금해서 한 달간 테스트해봤습니다.

디스플레이가 환상적입니다. 120Hz ProMotion에 미니 LED 백라이트까지, 화면이 정말 아름답습니다. 영상 편집이나 사진 작업에 최적입니다.

M2 칩 성능이 강력합니다. 4K 영상 편집도 부드럽게 처리되고, 멀티태스킹도 막힘없습니다.

애플 펜슬이 훌륭합니다. 필기감이 종이와 거의 같고, 지연도 거의 없습니다. 회의 노트나 스케치 작업에 완벽합니다.

휴대성이 좋습니다. 매직 키보드와 함께 들고 다녀도 노트북보다 가볍습니다.

하지만 iPadOS의 한계가 명확합니다. 파일 관리, 멀티윈도우 등이 macOS만큼 자유롭지 않습니다. 전문적인 작업에는 제약이 있습니다.

매직 키보드가 너무 비쌉니다. 40만원이 넘는데, 본체와 합치면 200만원이 훌쩍 넘습니다.

결론적으로 가벼운 작업과 콘텐츠 소비에는 최고지만, 노트북 완전 대체는 어렵습니다. 보조 기기로는 완벽합니다.`,
    author: '테크리뷰어',
    authorId: 'user1',
    category: '전자기기',
    rating: 4.3,
    productName: 'iPad Pro 12.9" M2',
    productBrand: 'Apple',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
    images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400'],
    created_at: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 89,
    helpfulVotes: 178,
    notHelpfulVotes: 11,
    verifiedPurchase: true,
    purchaseDate: '2024-06-10',
    usagePeriod: '1개월',
    pros: ['환상적인 디스플레이', '강력한 성능', '애플 펜슬', '휴대성', '배터리'],
    cons: ['iPadOS 한계', '비싼 액세서리', '높은 가격', '파일 관리'],
    tags: ['아이패드', '태블릿', '애플', 'M2', '프로'],
    isSponsored: false,
    views: 2891
  }
];

export const mockTopReviewers: TopReviewer[] = [
  {
    _id: 'reviewer1',
    nickname: '테크리뷰어',
    trustScore: 95,
    reviewCount: 47,
    rewardPoints: 12500,
    totalHelpfulVotes: 2341,
    memberSince: '2023-01-15',
    badges: ['전자기기 전문가', '신뢰받는 리뷰어', '100리뷰 달성'],
    profileImage: undefined
  },
  {
    _id: 'reviewer2',
    nickname: '주부리뷰',
    trustScore: 93,
    reviewCount: 62,
    rewardPoints: 15800,
    totalHelpfulVotes: 3124,
    memberSince: '2023-03-20',
    badges: ['가전 전문가', '신뢰받는 리뷰어', '베스트 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer3',
    nickname: '가전마니아',
    trustScore: 91,
    reviewCount: 85,
    rewardPoints: 18900,
    totalHelpfulVotes: 4567,
    memberSince: '2022-11-10',
    badges: ['가전 전문가', '파워 리뷰어', '200리뷰 달성'],
    profileImage: undefined
  },
  {
    _id: 'reviewer4',
    nickname: '이어폰덕후',
    trustScore: 89,
    reviewCount: 34,
    rewardPoints: 8700,
    totalHelpfulVotes: 1890,
    memberSince: '2023-06-05',
    badges: ['오디오 전문가', '신뢰받는 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer5',
    nickname: '건강지킴이',
    trustScore: 94,
    reviewCount: 56,
    rewardPoints: 14200,
    totalHelpfulVotes: 2876,
    memberSince: '2023-02-28',
    badges: ['식품 전문가', '신뢰받는 리뷰어', '100리뷰 달성'],
    profileImage: undefined
  }
];