// src/data/mockData.ts

import { Review, TopReviewer, Category, RewardTransaction, RewardTier } from '../types';

export const categories: Category[] = [
  { value: '가전제품', label: '가전제품', icon: '🏠' },
  { value: '전자기기', label: '전자기기', icon: '💻' },
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
    title: '작고 강력한 완소 미니 블렌더',
    content: `유튜브(핑계고)보고 유느님소개로 알게된후 검색해서 다른후기들도 참고해서 구매했습니다.
크기는 정말 더도말고 덜도말고 딱 적당하구요 디자인과 색감도 세련되고 고급지네요^^
받자마자 세척후 이틀정도 건조하고 충전해서 드디어 설레여하며 작동해봤어요.
설명데로 생수먼저채우고 사과1개 당근은 사과보다 작아서 1개 다넣었더니 당근향이 좀더강하긴했지만 건강쥬스니깐 괜찮찮아요ㅎ 반개넣는건 애매할것같더라구요
아몬드는 같이 갈까하다가 그냥 따로먹었습니다.
크기는 작지만 정말 강하네요. 30초 자동으로 갈리고 중간에 스톱할수있구요 무엇보다도 소음도 정말 작아요!!(동영상 참고)
쥬스는 컵에 따라 마시고 본체에 물 넉넉히 넣고 돌려서 4전정고 헹구고 세척완료. 자연건조 시켜놓았습니다^^
물이랑 사과,당근만 넣고 갈자마자 세척하는거라 세제는 안넣어도 될것같아서요~~
너무너무 간편하고 좋아요!!
단점 1도없이 완벽해요. 완전 강추! 필수템! 애정템! 입니당^^`,

    author: '주스좋아92',
    authorId: 'user1',
    category: '가전제품',
    rating: 5,
    productName: '닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2025_05_31_23%2FQqdMNDMVFJ_03.jpg&type=ofullfill340_600_png',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2025_05_31_23%2FQqdMNDMVFJ_03.jpg&type=ofullfill340_600_png'],
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 92,
    helpfulVotes: 88,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2025-01-30',
    usagePeriod: '1개월',
    pros: ['무선 편의성', '충전 지속력 좋음', '휴대성 뛰어남'],
    cons: ['딱딱한 재료는 약함'],
    tags: ['포터블', '무선블렌더', 'M3칩', '휴대성', '일상용'],
    isSponsored: false,
    views: 4200,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  {
    _id: '2',
    title: '무선이라 너무 편한 강추 블렌더',
    content: `선 없는 믹서기는 처음 쓰는데 너무 편해요. 
충전하면 2주는 거뜬하게 매일 쓸 수 있어요. 
하루에 두번씩도 쓴 거 같아요. 
갈리는 정도는 딱딱한 건 한 번에 안되긴하는데 선없는게 너무 편해서 후회없이 사용하고 있습니다!` ,


    author: '아침루틴장인',
    authorId: 'user2',
    category: '가전제품',
    rating: 5,
    productName: '닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 86,
    helpfulVotes: 104,
    notHelpfulVotes: 1,
    verifiedPurchase: true,
    purchaseDate: '2025-11-27',
    usagePeriod: '1개월',
    pros: ['무선이라 편함', '충전 오래감', '매일 사용 가능'],
    cons: ['단단한 재료는 여러 번 갈아야 함'],
    tags: ['무선', '휴대용블렌더', '간편사용'],
    isSponsored: false,
    views: 5129,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  {
    _id: '3',
    title: '배송 빠르고 색감 예쁜 만족 구매',
    content: `배송 빠르고 데님블루 이뻐요.잘 쓰겠습니다.
배송 빠르고 데님블루 이뻐요. 잘 쓰겠습니다. `,


    author: '블루데님덕후',
    authorId: 'user3',
    category: '가전제품',
    rating: 5,
    productName: '닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 80,
    helpfulVotes: 45,
    notHelpfulVotes: 7,
    verifiedPurchase: true,
    purchaseDate: '2023-10-01',
    usagePeriod: '1년',
    pros: ['배송 빠름', '디자인 예쁨'],
    cons: ['사용 기간 짧음'],
    tags: ['디자인좋음', '빠른배송'],
    isSponsored: false,
    views: 2008,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  {
    _id: '4',
    title: '조용하고 간편한 아침 루틴 블렌더',
    content: `건강 챙기려고 구입했습니다. 
아침에 쓰기 소음이 적어서 좋아요. 빠르고 간편하네요. 모터가 힘이 좋아서인지 적은 소음에도 잘 갈립니다.
아침에 섞어서 가져가고 사무실가서 탕비실에서 30초 갈아서 먹기 딱입니다.
건강하고 배가 든든히 섬유질 챙겨먹을 수 있어서 속도 편안합니다.
무엇보다 가지고 다니기 편하고 청소 편해요 간단하면서 빠르게 사용하기에 딱입니다.` ,


    author: '고요한아침5',
    authorId: 'user4',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20251020_230%2F1760956332949rR3wE_JPEG%2F95089172066577385_15367319.jpg&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20251020_230%2F1760956332949rR3wE_JPEG%2F95089172066577385_15367319.jpg&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 89,
    helpfulVotes: 147,
    notHelpfulVotes: 2,
    verifiedPurchase: true,
    purchaseDate: '2024-03-20',
    usagePeriod: '3개월',
    pros: ['소음 적음', '아침 사용 적합', '휴대성 좋음'],
    cons: [],
    tags: ['저소음', '아침루틴', '휴대용'],
    isSponsored: false,
    views: 6130,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },

  {
    _id: '5',
    title: '강력·저소음·세척 쉬운 재구매템',
    content: `너무 만족스러워요.
예전에 다른브랜드거 사용하다가 모터 타는 냄새 때문에 버리고 다시 구매하려고 새로운거 알아보면서 비슷하게 생긴 믹서기는 다 걸렀거든요ㅋ 세척 어려운 거, 소리가 넘 큰거, 잘 안갈리는거 다 거르고나니까 딱 요제품만 남았길래 행사할때 구매했어요 ㅎㅎ
목적은 2인가구 해독쥬스 인데 2명거를 한번에 만들기는 용량이 적어서 야채 소분한거 1인분씩 갈아만들고 있고, 한번보다는 두번 갈아야 마실때 더 부르럽더라구요ㅎㅎ
소리도 안커서 밤에 해도 신경안쓰이고 완전 강력해요 ㅠㅠㅠ진짜 갬덩..
단점은 세척 하나인데 상품에 포함되있는 깊은 뚜껑? 거기에 물 담궈서 모터쪽이랑 연결하고 씻겨내면 되더라구요ㅎㅎ 추천드려여 진짜`,


    author: '세척간편러77',
    authorId: 'user5',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 94,
    helpfulVotes: 131,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2024-04-25',
    usagePeriod: '4개월',
    pros:  ['세척 쉬움', '성능 강함'],
    cons: ['용량 아쉬움'],
    tags:  ['세척간편', '강한성능', '포터블'],
    isSponsored: false,
    views: 5548,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },

  {
    _id: '6',
    title: '작지만 단점도 있는 실사용 후기',
    content: `열심히 갈아보고 있는 중입니다. 
장점은 다 아는거고. 미니사이즈니 어쩔수없는 단점은 자꾸 걸리고, 냉동과일은 몇번씩 에러나네요. 
집에서 거의 사용하는거라 뚜껑에 손잡이가 거슬리긴해요. 
탈부착이면 좋았을텐데 하는 아쉬움. 기계에 표면 방수기능은 있다지만 물 흐르고 하면 되게 신경쓰이고 적응이 필요할듯. 
우선 잘 쓰고있습니다. 가격은 좀 높게책정된듯.` ,


    author: '싱글홈쿠커',
    authorId: 'user6',
    category: '가전제품',
    rating: 3,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MDNfMTcx%2FMDAxNzE3MzkyMTYzMjk0.xhgTW-OQ0l1Ea9Fv83T_9FbPdoA80VR4TI4JMueA-L8g.y2IdXbSjaahFLdo9gJyd54_--wlndLXDBoSHVOn__94g.JPEG%2F18.jpg&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MDNfMTcx%2FMDAxNzE3MzkyMTYzMjk0.xhgTW-OQ0l1Ea9Fv83T_9FbPdoA80VR4TI4JMueA-L8g.y2IdXbSjaahFLdo9gJyd54_--wlndLXDBoSHVOn__94g.JPEG%2F18.jpg&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 65,
    helpfulVotes: 39,
    notHelpfulVotes: 31,
    verifiedPurchase: true,
    purchaseDate: '2024-07-30',
    usagePeriod: '1개월',
    pros: ['휴대성 좋음', '일반 재료는 잘 갈림'],
    cons: ['냉동 과일 성능 아쉬움'],
    tags: ['휴대성', '간편사용'],
    isSponsored: false,
    views: 3300,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '7',
    title: '휴대성은 최고, 작지만 꽤 파워풀한 블렌더',
    content:`잘 쓰고 있어요!!
유튜브에서 스무디 만들어먹는거보고 드릉드릉했다가 핑계고 보고 장바구니 담아놨다가 네쇼페때 구매했어요.

✔️무게 : 생각보다 무거움!! 뚜벅이라면 들고다니기엔 부담스러워요.

✔️ 무선이라 편하고, 세척도 생각보다 편해요.

✔️ 플라스틱이 갈린다는 이슈가 있는데 넣는 순서 잘 지켜서하면 안갈린더라고요. 꼭 물을 채우고 그 다음에 넣어주세요~~!!

✔️ 고구마는 좀 작게 잘라서 넣어야지 안그러면 걸리더라구요.. 그럴땐 전원껐다 다시 켜서 갈거나 통을 살짝 흔들어주면 잘 갈려요. 근데 소리랑 진동이 생각보다 강한편이에요!!

✔️ 추천 : 사과케일스무디, 고구마라떼, 단맛이 부족하다면 알룰로스나 코코넛워터 추가해보세요.

✔️ 직구가 더 저렴한데 컵커버랑 중간마개(?)는 국내정발제품에만 들어있고, 부품구매도 불가능해서 분리해서 보관하거나 들고다니실 분들은 여기 스마트스토어에서 구매하심 될 것 같아요!` ,


    author: '혼밥의기술',
    authorId: 'user7',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 86,
    helpfulVotes: 88,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2024-11-08',
    usagePeriod: '3개월',
    pros: ['휴대성 좋음', '파워 괜찮음'],
    cons:  ['용량 작음'],
    tags: ['휴대용', '강한성능', '포터블 블렌더'],
    isSponsored: false,
    views: 4001,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '8',
    title: '소형이지만 성능 확실한 1인 가구 필수템',
    content: `일단 배송이 빨리 와서 너무 좋았습니다. 당장 써보고 싶었는데 빨리 와서 충전 바로 시켜두고 사용해봤어요. 
본체 연결된 채로 세척하는 게 충전단자에 물 들어갈까봐 좀 걱정되긴 하지만 세제 넣고 윙윙 돌리면 깨끗하게 세척돼서 은근히 간편하네요. 
1인 가구라 큰 믹서는 필요 없는데 또 가끔씩 믹서가 필요할 때가 있어서 작은 걸로 구매했습니다. 작아도 모터에 힘이 좋아서 빨리 잘 갈리네요. 
얼린 과일이나 얼음은 아직 안 넣어보긴 했는데 후기들 보면 살짝 녹여서 넣거나 액체류를 먼저 넣고 넣어야할 거 같아요. 다양한 요리나 베이킹에 잘 쓸 수 있어 좋습니다. 
통은 하나 더 사고 싶긴 해요. 추천합니다.` ,


    author: '원룸살림꾼',
    authorId: 'user8',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 93,
    helpfulVotes: 110,
    notHelpfulVotes: 2,
    verifiedPurchase: true,
    purchaseDate: '2024-05-03',
    usagePeriod: '7개월',
    pros: ['작지만 성능 좋음', '1인 가구 적합'],
    cons: [],
    tags: ['1인가구', '소형블렌더', '휴대용'],
    isSponsored: false,
    views: 5300,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '9',
    title: '예뻐서 또 샀고, 성능도 좋아서 만족',
    content: `닌자 무선 블라스트 포터블 블렌더 BC151KR를 두 번째 구매했어요. 
    첫 번째 사용 후 너무 만족스러워서 다시 구매하게 되었답니다. 
    색상도 너무 예쁘고, 디자인이 세련돼서 주방에 두기에도 좋고, 휴대하기도 편해요. 
    이 블렌더는 과일이나 채소를 쉽게 갈아주고, 스무디도 정말 부드럽게 만들어줘요. 
    무선이라서 어디서든 사용할 수 있는 점이 특히 마음에 들어요. 정말 추천해요!` ,


    author: '주방귀염둥이',
    authorId: 'user9',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 91,
    helpfulVotes: 78,
    notHelpfulVotes: 1,
    verifiedPurchase: true,
    purchaseDate: '2024-10-31',
    usagePeriod: '1개월',
    pros:  ['색감 예쁨', '디자인 만족'],
    cons: [],
    tags: ['예쁜가전', '감성주방'],
    isSponsored: false,
    views: 2567,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '10',
    title: '간단한 음료용으로 딱 좋은 만족템',
    content: `사용도 편하고 성능조아요` ,


    author: '간편주스러버',
    authorId: 'user10',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMDNfMTc2%2FMDAxNzM1ODg4NTg1MDUz.517BueeXOgeehZ2b56r1MiJPAdWCWMK8cYrQOETHpVMg.2SyY-Xclb-DLgVmgI3irpzWdLBwkzEPA0KKqqazWKAog.JPEG%2FIMG_2275.JPG&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMDNfMTc2%2FMDAxNzM1ODg4NTg1MDUz.517BueeXOgeehZ2b56r1MiJPAdWCWMK8cYrQOETHpVMg.2SyY-Xclb-DLgVmgI3irpzWdLBwkzEPA0KKqqazWKAog.JPEG%2FIMG_2275.JPG&type=sc960_832'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 82,
    helpfulVotes: 63,
    notHelpfulVotes: 4,
    verifiedPurchase: true,
    purchaseDate: '2025-10-31',
    usagePeriod: '2개월',
    pros: ['간편함', '휴대성 좋음'],
    cons: ['용량 작음'],
    tags: ['간편조작', '휴대용', '빠른사용'],
    isSponsored: false,
    views: 2567,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '11',
    title: '세척 간편하고 강력한 성능에 놀란 후기',
    content: `제가 기대했던 것 이상으로 만족스러웠습니다.
장점
1. 휴대성
• 이 블렌더는 정말 가벼워서 어디든지 가지고 다니기 쉽습니다. 특히, 여행이나 야외 활동 시 매우 유용합니다. 손잡이가 있어 들고 다니는 것도 편리합니다.
2. 강력한 성능
• 얼음이나 냉동 과일도 쉽게 갈아내는 데 성공했습니다. 6중 스테인리스 칼날이 정말 강력하다는 것을 느낄 수 있었습니다.
3. 무선 충전
• USB-C로 충전할 수 있어 편리합니다. 완충 후 최대 15회 사용할 수 있어 하루 종일 사용하기 충분합니다.
4. 간편한 세척
• 세척 모드가 있어 물로 간단히 세척할 수 있고, 식기세척기에도 넣을 수 있어 청소가 정말 편리합니다.
5. 소음
• 아침에 사용해도 소음이 적어서 가족들이 자고 있는 동안에도 사용할 수 있었습니다.

휴대성과 성능 면에서 매우 만족스러운 제품입니다. 특히, 야외 활동이나 간단한 음료를 만들 때 유용하게 사용하고 있습니다. 용량과 속도 조절 기능이 부족하다는 점은 고려해야 하지만, 추천합니다!` ,


    author: '야외활동매니아',
    authorId: 'user11',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 90,
    helpfulVotes: 128,
    notHelpfulVotes: 1,
    verifiedPurchase: true,
    purchaseDate: '2024-03-20',
    usagePeriod: '4개월',
    pros: ['휴대성 뛰어남', '얼음도 갈리는 성능', 'USB-C 충전 편리'],
    cons: ['속도 조절 기능 없음'],
    tags: ['야외사용', '강한모터', '포터블', 'USB충전'],
    isSponsored: false,
    views: 6867,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '12',
    title: '운동 시작하며 찾은 최적의 포터블 블렌더',
    content: `아 진짜 너무 너무 좋네요~!
운동 시작하면서 건강한 음료를 마시기 위해 2주 동안 블렌더를 알아보고 구매 했습니다. 
기존의 블렌더는 가격을 떠나서 크기도 크고 콘센트도 필요한데다 세척까지 번거로워 계속 고민을 했는데 그 모든 고민이 한번에 해결 되었습니다.
배송은 바로 다음날 박스포장으로 잘 도착했구요, 설명서 정독 후에 바로 충전, 세척하고 오렌지 쥬스, 키위 쥬스(사진), CCA 쥬스 만들어 먹었습니다. 
성능 테스트 겸 얼음도 같이 갈았구요. 사용 후 처음 놀란 건 생각보다 조용하다 였습니다. 기존 블렌더 소음 대비 반정도 밖에 안되는 것 같구요. 
성능은 과일은 물론 얼음도 싹 다 갈립니다. 세척도 본체 그대로 물세척 하니 너무 편합니다. 버튼도 어려울 것 없이 딱 하나이니 편의성까지 최고네요.
다른 리뷰들 보면 성능의 아쉬움이나 세척의 불편함을 얘기하시던데 전 포터블 블렌더로서 충분한 성능과 간편한 세척이 너무 좋았습니다.
마지막으로 제게 최고의 장점은 포터블 입니다. 기존의 블렌더, 믹서기는 큰 덩치에 전원이 필요하니 주방에서 자리를 차지하는데 이건 C타입 충전으로 15회 블렌딩이 가능하니 어디든 들고 다니다 신선한 과일쥬스를 바로 먹을 수 있습니다. 
아침에 블렌딩한 사과쥬스 점심에 드셔 보셨나요? 절대 못 먹어요. 저희 가족은 피크닉은 물론 캠핑까지 하기에 더없이 좋은 제품이라고 생각합니다. 
내일부터 아침마다 온가족이 과일 쥬스 해먹고 회사에도 가져갈 생각입니다.` ,


    author: '운동중독인간',
    authorId: 'user12',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 95,
    helpfulVotes:  118,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2024-05-23',
    usagePeriod: '7개월',
    pros: ['저소음', '얼음 가능', '세척 간편'],
    cons: ['용량은 아쉬울 수 있음'],
    tags: ['헬스', '스무디', '아침식사', '저소음'],
    isSponsored: false,
    views: 7054,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '13',
    title: '용량은 아쉽지만 조용한 야간 사용엔 최고',
    content: `1.설겆이할때 작동되지않으니 걱정마세요 컵과 완전일체되지않으면 눌러도 작동되지않습니다
2.바이타믹스 소음때문에 간편하게 사용하려고 구매했는데 용량작아서 cca주스 1인용도 안됩니다 ㅠ
즉 도깨비방망이를 살걸 후회되는 부분임
3.늦은밤 바나나 우유나 오트밀우유 등등 만들기에는 소음걱정 없어서 괜찮음
상상한것보다 소음 더 작음` ,


    author: '주말요리스타',
    authorId: 'user13',
    category: '가전제품',
    rating: 3,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMDhfMTAy%2FMDAxNzM2Mjc1ODE5Mzk2.eJruG0aX82TBv2i3v9GvqjAMtayqhAsJ3mW2C05DoC8g.f90pl_6JD9-F3iaG9aE1xvCWIRI8i7IfJsjNP5PJA9Mg.JPEG%2F%25B4%25D1%25C0%25DA_%25B9%25AB%25BC%25B1_%25BA%25ED%25B6%25F3%25BD%25BA%25C6%25AE_%25C6%25F7%25C5%25CD%25BA%25ED_%25BA%25ED%25B7%25BB%25B4%25F5_BC151KR_%25288%2529.jpg&type=ofullfill340_600_png',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMDhfMTAy%2FMDAxNzM2Mjc1ODE5Mzk2.eJruG0aX82TBv2i3v9GvqjAMtayqhAsJ3mW2C05DoC8g.f90pl_6JD9-F3iaG9aE1xvCWIRI8i7IfJsjNP5PJA9Mg.JPEG%2F%25B4%25D1%25C0%25DA_%25B9%25AB%25BC%25B1_%25BA%25ED%25B6%25F3%25BD%25BA%25C6%25AE_%25C6%25F7%25C5%25CD%25BA%25ED_%25BA%25ED%25B7%25BB%25B4%25F5_BC151KR_%25288%2529.jpg&type=ofullfill340_600_png'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 81,
    helpfulVotes: 55,
    notHelpfulVotes: 12,
    verifiedPurchase: true,
    purchaseDate: '2024-05-04',
    usagePeriod: '7개월',
    pros: ['세척 간편', '소음 적음'],
    cons: ['용량 작음', '1인분도 조금 부족함'],
    tags:  ['세척쉬움', '소용량', '블렌더리뷰'],
    isSponsored: false,
    views: 2580,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '14',
    title: '소형인데 냉동 과일까지 잘 갈리는 만족 제품',
    content: `큰 믹서기를 쓰다 너무 무겁고 설거지하기 힘들고, 음식을 갈고나면 믹서기 안에 남는 내용물이 많아서 아까웠어요~ 
작은 믹서기는 파워가 약해서 너무 안갈려서 화가난 참에 매일 간편히 쓸 수 있는 믹서기를 구입하려고 맘먹고 여기저기 뒤졌습니다
휴롬과 닌자 두 종류 중 고민 끝에 닌자를 질렀네요 무선이라 파워가 약하지 않을까 동영상도 많이 보고 리뷰도 많이 찾아봤어요 정보가 생각보다 없더라구요
저는 일단 냉동 파인애플이나 냉동 블루베리 정도는 잘 갈려야 한다고 생각했는데 일단 냉동 블루베리는 잘 갈렸어요!
저번주에 도착해서 두 번 써봤는데 아쉬운점은 본체통이 한 개라는 것 ㅜㅜ 추가 구매 가능한지 궁금해요 ! 장점은 소음이 적은 것 ! 
아침마다 온가족 깨울까바 아침엔 제대로 쓰기 힘들었는데 이건 아침마다 써도 되겠어요!! 세척도 편하구요. 사용법도 너무 간단해서 자주 사용 할 거 같아요 `,


    author: '주방효율러',
    authorId: 'user14',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 90,
    helpfulVotes: 92,
    notHelpfulVotes: 5,
    verifiedPurchase: true,
    purchaseDate: '2024-04-22',
    usagePeriod: '3개월',
    pros: ['소음적음', '휴대성 좋음', '냉동과일 가능'],
    cons: ['용기 추가 구매 불가'],
    tags:  ['혼합음료', '냉동과일', '저소음'],
    isSponsored: false,
    views: 4520,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '15',
    title: '하루 한 컵에 최적화된 충전식 미니 블렌더',
    content: `우선 가장 좋은건 충전식이고 자리 차지를 많이 안해서 싱크대에 쏟 들어가고 간편하게 꺼내서 먹을 수 있어 좋아요.
예전에 쓰던건 크기만 커서 과일이라도 갈아먹으려면 일이었는데 이건 그냥 컵에 부을 필요없이 딱 한컵량 갈아서 먹고 바로 설거지하니깐 날파리 꼬일일 없어 좋네요 
그리고 마늘이랑 과일 두가지 갈아보았는데 매우 잘갈려요 ㅎㅎ` ,

    author: '간편요리의신',
    authorId: 'user15',
    category: '가전제품',
    rating: 5,
    productName: '닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 90,
    helpfulVotes: 84,
    notHelpfulVotes: 2,
    purchaseDate: '2025-07-03',
    verifiedPurchase: true,
    usagePeriod: '1개월',
    pros: ['다용도 활용 가능', '세척편함', '휴대성 좋음'],
    cons: ['용량 제한'],
    tags: ['주방템', '건강관리', '간편사용'],
    isSponsored: false,
    views: 3800,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },

  {
    _id: '16',
    title: '세련된 디자인과 휴대성의 균형',
    content: `디자인도 예쁘고 다양하게 잘 사용할 수 있을 거 같아요.
그리고 내가 들고 다니기엔 좀 무거운 감이 있지만 그래도 충분히 휴대성은 좋은 거 같아요` ,


    author: '감성가전수집가',
    authorId: 'user16',
    category: '가전제품',
    rating: 5,
    productName: '닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20251020_230%2F1760956332949rR3wE_JPEG%2F95089172066577385_15367319.jpg&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20251020_230%2F1760956332949rR3wE_JPEG%2F95089172066577385_15367319.jpg&type=a340'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 94,
    helpfulVotes: 99,
    notHelpfulVotes: 1,
    verifiedPurchase: true,
    purchaseDate: '2025-07-07',
    usagePeriod: '3개월',
    pros: ['디자인 예쁨', '휴대성 좋음', '충전 편리'],
    cons: ['무게감 있음'],
    tags: ['감성가전', '포터블블렌더', '미니가전'],
    isSponsored: false,
    views: 5100,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  {
    _id: '17',
    title: '첫 믹서기로 완벽한 선택, 캠핑에서도 활약',
    content: `인생 첫 믹서기입니다! 사용법 간단하고 소음도 적고 너무 만족합니다.
두부마요네즈 자주만들어먹고있어요.통 설거지 어찌하나 고민할 필요없어서 너무 좋아요. 
물넣고 주방세제 넣고 그냥 돌리면 말끔히 설거지 완료. 두부마요네즈 만들때 올리브오일 사용때문에 걱정했는데 걱정할 필요없음. 
너무 잘 닦여요. 사이즈가 작아서 캠핑갈때도 자주이용합니다~ `,



    author: '첫블렌더성공기',
    authorId: 'user17',
    category: '가전제품',
    rating: 5,
    productName: '닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 93,
    helpfulVotes: 112,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2025-06-05',
    usagePeriod: '3개월',
    pros: ['세척 쉬움', '사용법 간단', '작지만 성능 좋음'],
    cons: ['용량은 크지 않음'],
    tags: ['초보자용', '세척쉬움', '간단조작'],
    isSponsored: false,
    views: 5583,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  {
    _id: '18',
    title: '매일 아침 스무디 생활 필수템',
    content: `3개월 사용 후기! 닌자 무선 블라스트 포터블 블렌더 
한 줄 요약: 매일 아침을 책임지는 필수템! 하지만 충전은 미리미리 해야 함.

닌자 무선 블라스트 포터블 블렌더를 구매한 지 벌써 3개월! 처음에는 “무선 블렌더가 얼마나 편할까?” 싶었는데, 이제는 이 제품 없이는 아침을 시작할 수 없을 정도로 손이 자주 가는 아이템이 되었다.

🔥 장점
✔ 강력한 블렌딩 파워

생각보다 모터 힘이 강해서 얼음까지 가볍게 갈린다.
과일, 프로틴 파우더, 요거트 넣고 돌리면 부드러운 스무디 완성!
✔ 완전 포터블!

선이 없으니 어디서든 사용 가능!
출근 준비하면서 부엌에서 한 번, 가방에 넣고 이동하면서 한 번, 자유도가 높다.
✔ 세척이 간편하다

물이랑 세제 조금 넣고 돌리면 자동 세척 끝!
조립, 분리 과정도 간단해서 관리하기 쉬움.
⚡ 단점
⚠ 충전은 신경 써야 함

사용하려고 했는데 배터리가 부족하면 낭패... 😭
최소 2~3일에 한 번씩 미리 충전해두는 습관이 필요함.
✅ 결론: 강추! 하지만 충전은 습관화해야 함
전체적으로 만족도가 매우 높은 제품! 무선이라 이동이 자유롭고, 블렌딩 성능도 기대 이상. 
아침을 간편하게 해결하고 싶은 분들에게 강력 추천! 다만, 꾸준한 충전이 필요하다는 점은 감안하고 구매하는 게 좋겠다.` ,


    author:  '아침스무디러버',
    authorId: 'user18',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2024_07_02_2741%2F9jIj8dEvOR_01.jpg&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2024_07_02_2741%2F9jIj8dEvOR_01.jpg&type=sc960_832'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 97,
    helpfulVotes: 145,
    notHelpfulVotes: 2,
    verifiedPurchase: true,
    purchaseDate: '2025-03-18',
    usagePeriod: '5개월',
    pros: ['강력파워', '스무디 최적화', '휴대성 좋음'],
    cons: ['충전 미리 해야 함'],
    tags: ['스무디', '아침루틴', '건강관리'],
    isSponsored: false,
    views: 6198,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },

  {
    _id: '19',
    title: '조용한데 여러 번 갈면 매우 부드럽게 완성',
    content: `케일, 양배추 등을 갈았습니다. 한 번 갈아서는 덩어리가 남아있고 두 번 갈아서는 작은 건더기가 있고 큰 믹서기 사용만큼 곱지는 않았습니다. 
세 번 가니 아주 부드러워지네요. 소음 작은 거 좋습니다. 칼날이 믹서기 본체에 붙어있는 건 설거지에 불편합니다. 
정말 갖고싶었고 무선과 휴대 간편이라는 혁신적인 믹서기는 분명합니다. 갈리는 건 생각보다는 아쉽네요.` ,




    author: '케일러버',
    authorId: 'user19',
    category: '가전제품',
    rating: 4,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 88,
    helpfulVotes: 71,
    notHelpfulVotes: 5,
    verifiedPurchase: true,
    purchaseDate: '2024-09-09',
    usagePeriod: '2개월',
    pros: ['저소음', '부드러운 텍스처 가능'],
    cons: ['1~2회 갈면 입자 남음'],
    tags: ['그린스무디', '저소음', '식감'],
    isSponsored: false,
    views: 3610,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },

  {
    _id: '20',
    title: '이유식 만들 때 특히 진가를 발휘하는 제품',
    content: `닌자 블라스트 포터블 무선 블렌더를 한 달간 사용해보니 정말 만족스러워요. 아기가 있어서 이유식을 자주 만드는데, 작동이 강력해서 재료가 아주 잘 갈리고 곱게 만들어져요.
닌자 블라스트 포터블 무선 블렌더를 한 달간 사용해보니 정말 만족스러워요. 아기가 있어서 이유식을 자주 만드는데, 작동이 강력해서 재료가 아주 잘 갈리고 곱게 만들어져요. 
무엇보다 세척이 간편해서 바쁜 육아 중에도 큰 부담이 없어요. 무선이라 어디서든 사용할 수 있다는 점도 정말 편리하고요. 
가볍고 디자인도 예뻐서 주방에 두고 쓰기 좋아요. 이유식뿐만 아니라 간단한 스무디나 소스 만들 때도 유용합니다. 추천!`,


    author: '육아파워맘',
    authorId: 'user20',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 99,
    helpfulVotes: 138,
    notHelpfulVotes: 1,
    verifiedPurchase: true,
    purchaseDate: '2024-12-04',
    usagePeriod: '1개월',
    pros: ['이유식 잘 갈림', '무선 편리함', '세척 빠름'],
    cons: ['장시간 연속 사용은 어려움'],
    tags: ['이유식', '육아템', '무선블렌더'],
    isSponsored: false,
    views: 7330,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '21',
    title: '1인 가구에 최적화된 실용적인 블렌더',
    content:`일단 한달 이상 사용해본결과
다들 너무 부러워함... 내껀데...
편리성이 띄어나며 (토마토. 바나나.블루베이.키위)
만 갈아먹는 1인이라.. 가지고 다니기에도 좋고
바로 갈아먹을수잇어서 신선해서 좋고 충전도 차에서 시켜 운전하는동안 충전도 가능하고 최적에 편리성을 볼수잇어서 만족하면서 쓰고 잇다
다만 아쉬운건... 가격에 변동이 큰거 외엔 (내가 살땐 ..119000원.)
그뒤 점점 내리더니 79000원대로도 밧다는...
하지만 ...난... 내가 만족하니 댓다고 위안을 삼으며
잘 활용하면서 쓸꺼다 ^^ `, 



    author: '출근전한잔러',
    authorId: 'user21',
    category: '가전제품',
    rating: 4,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 92,
    helpfulVotes: 87,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2024-08-01',
    usagePeriod: '1개월',
    pros: ['속도 빠름', '간편조작', '세척 쉬움'],
    cons: ['용량은 적당 수준'],
    tags: ['아침식사', '간편사용', '스무디'],
    isSponsored: false,
    views: 4155,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '22',
    title: '제품은 좋지만 교환 과정은 아쉬웠던 경험',
    content: `라방에서 보고 주문했어요^^
우선 충전후 무선으로 사용할수 있어서 좋고, 미니라 휴대하기도 간편해서 좋을것 같아요.
디자인과 색상도 화면에서 본것처럼 예뻐서 만족합니다.
아쉬웠던점은 추석연휴 전 주문했는데 하자있는 제품을 받아서 교환하고 다시받기까지 약10일 이상이 소요됐던점과 고객센터 상담이 잘되지않아 아쉬웠습니다.
아직 사용전인데 사용후 후기 추가로 남기겠습니다.` ,


    author: '라방구매러92',
    authorId: 'user22',
    category: '가전제품',
    rating: 4,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MDNfODAg%2FMDAxNzE3MzkyMTU5ODE3.97LTlJQA0Farke5YmgCQNFR4kTlKnT_UC7f00d78HWAg.GhWya7I14Q73ol4Gsx9IshHSZv7-inRLeeymifr25cUg.JPEG%2F09_1.jpg&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MDNfODAg%2FMDAxNzE3MzkyMTU5ODE3.97LTlJQA0Farke5YmgCQNFR4kTlKnT_UC7f00d78HWAg.GhWya7I14Q73ol4Gsx9IshHSZv7-inRLeeymifr25cUg.JPEG%2F09_1.jpg&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 78,
    helpfulVotes: 64,
    notHelpfulVotes: 12,
    verifiedPurchase: true,
    purchaseDate: '2024-10-09',
    usagePeriod: '1개월',
    pros: ['무선 사용 가능', '휴대성 좋음', '디자인 만족'],
    cons: ['초기 불량 발생', '교환 지연됨', '고객센터 응대 아쉬움'],
    tags: ['초기불량', '교환경험', '무선블렌더'],
    isSponsored: false,
    views: 3991,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '23',
    title: '큰 믹서기 대신 선택한 최고의 대안기',
    content: `집에 큰 믹서기가 있는데 꺼내서 쓰기 번거로우니 잘 안쓰게 되더라구요! 
2인 가구라 더 번거롭게 느껴지는 것 같기도 하구...둘이서 스무디 한잔씩 먹으려는데 세팅하고 설거지하는 에너지가 더 드니 잘 안먹게 돼서 이 제품으로 구매해봤어요. 
받자마자 스무디 해먹었는데 무선이라 세팅 번거롭지 않고, 세척도 그냥 물이랑 세제 넣고 휘리릭 돌리면 끝나니 넘 좋네요! 닌자 워낙 유명해서 궁금했는데 만족스럽습니다` ,


    author: '2인가구스무디러버',
    authorId: 'user23',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://ibb.co/ynt6f3VZ'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 95,
    helpfulVotes: 124,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2025-03-01',
    usagePeriod: '2개월',
    pros: ['무선 사용 편리', '세척 매우 간편', '작지만 잘 갈림', '2인 가구 적합'],
    cons: ['용량은 크지 않음'],
    tags: ['2인가구', '무선블렌더', '스무디', '간편세척'],
    isSponsored: false,
    views: 6091,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '24',
    title: '정품 구매의 안정감, 첫 사용 전 기대되는 제품',
    content:`부속품 빠짐없이 다 있고 받고서 씻기전에 빈칼날 돌려보니 잘 돌아갑니다. 
과일넣고 사용하진 않았어요. 충전하래서 충전하니 초록불 깜박거리면서 충전 잘 되요. 
여러사이트에서 몇만원 싸게 팔지만 그래도 정품은 닌자코리아서 사는게 사후 as처리도 좋을듯 하여 정품사이트서 구매했어요. 
그런데 박스뜯다보니 누가 투명스티커를 한번 뜯은 흔적이 있어 찜찜하긴한데 검수하는 분이라 믿고 잘 써볼께요. 가볍고 소음 생각보다 작고 휴대서좋을 듯 하네요` ,


    author: '정품중시하는사람',
    authorId: 'user24',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMDNfMTc2%2FMDAxNzM1ODg4NTg1MDUz.517BueeXOgeehZ2b56r1MiJPAdWCWMK8cYrQOETHpVMg.2SyY-Xclb-DLgVmgI3irpzWdLBwkzEPA0KKqqazWKAog.JPEG%2FIMG_2275.JPG&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMDNfMTc2%2FMDAxNzM1ODg4NTg1MDUz.517BueeXOgeehZ2b56r1MiJPAdWCWMK8cYrQOETHpVMg.2SyY-Xclb-DLgVmgI3irpzWdLBwkzEPA0KKqqazWKAog.JPEG%2FIMG_2275.JPG&type=sc960_832'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 87,
    helpfulVotes: 68,
    notHelpfulVotes: 6,
    verifiedPurchase: true,
    purchaseDate: '2024-09-20',
    usagePeriod: '1개월',
    pros: ['정품 구매 안정감', '소음 적음', '충전 잘됨', '휴대성 좋음'],
    cons: ['스티커가 한 번 뜯긴 흔적 있음'],
    tags: ['정품구매', '저소음', '휴대용', '새제품체크'],
    isSponsored: false,
    views: 3400,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '25',
    title: '콤팩트한 크기 속 숨겨진 강한 성능',
    content: `1. 사이즈
자리차지않고 보관하기 편한 컴팩트한 사이즈로 물병과 비교하면 조금 크고 테이크아웃 커피컵과 비슷한 둘레라고 생각하면 될 것 같아요. 최대 500밀리라고 되어있는데 느낌상 좀 더 많은 느낌이라 음료를 만들면 한 번에 두명은 너끈하게 마실 수 있는 양이 나와요!

2. 무게
생각보다 무게감이 있어서 작동시 안정감이 있어요. 그렇기 때문에 손잡이를 들고 이동할 때는 괜찮은데 광고처럼 한손으로 들고 음료를 마시기에는 맥아리없는 제 팔은 좀 무거워서 컵에 따라 마시고 있어요. 저는 다이슨도 왠만해선 잘...안쓰게 되는게 팔이 아파서^-^;;
음료를 넣는 용기가 하나 밖에 없어서 불편할까 싶었는데 회전 날 부분이 아래에 박혀있어서 새로운 음료를 만들려면 사용한 용기 윗쪽 뚜껑열고 물 채워 넣고 1차 세척한 후 분리해서 사용해야하고, 동일한 음료 만들거면 역시나 기존음료 쉽게 따라내고 뚜껑열고 만들면 되니, 다른 용기 필요하지도 않았어요.

3. 편의성
무선이고 사이즈 작고 손잡이 있고 충전도 c타입으로 되어서 집에서나 야외에서 너무 좋아요. 놀러갈때 휴양지서 아이들신나게 밀크쉐이크 만들어 줄 수 있어서 좋았답니다.

4. 회전력
닌자 회전력이야 유명한 만큼 사이즈 작더라도 잘 갈립니다. 당연히 휴롬 쥬서기처럼이야 당연히 매끈하게 가는 용도가 아니기에 어느정도 입자감은 있어요. 아스파라거스의 경우 요구르트 4개에 아스파라거스 4대를 넣었는데 줄기가 조금 덜 갈린게 있긴했어요. 두번 돌렸지만 땅콩 두껍께 빻은 것 같은 느낌으로 바닥에 조금 깔렸고 마실다가 조금 걸렸지만 괜찮았어요. 주로 케일을 가는데 그런 느낌없었고 양배추도 없었어요.

여튼 가격대비 아직 까지는 매우 만족하고 있는 제품입니다!` ,


    author: '컴팩트선호러',
    authorId: 'user25',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20251020_230%2F1760956332949rR3wE_JPEG%2F95089172066577385_15367319.jpg&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20251020_230%2F1760956332949rR3wE_JPEG%2F95089172066577385_15367319.jpg&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
     trustScore: 96,
    helpfulVotes: 139,
    notHelpfulVotes: 4,
    verifiedPurchase: true,
    purchaseDate: '2024-05-21',
    usagePeriod: '3개월',
    pros: ['콤팩트한 크기', '충분한 용량', '회전력 좋음', '휴대성 우수'],
    cons: ['무게감 있음', '꾸덕한 재료는 두 번 갈아야 함'],
    tags: ['콤팩트', '강한회전력', '휴대성', '2인분가능'],
    isSponsored: false,
    views: 6430,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '26',
    title: '디자인·휴대성·세척 모두 만족도 높은 제품',
    content: `일단 디자인이 맘에 들어요~^^ 생각보다 많이 묵직한데 가벼운것보단 전 무거워서 더 안정감이 느껴졌어요!
패키지를 처음 오픈하면 회색 두껑이 나오는데 어디 쓰는 물건인지 모르다 세척을 하고 말리다 알게됐어요! 칼날 덮게, 본체 받침! 디테일한 센스에 ‘오~’ 감탄을 했어요!
무선이라 사용하기 엄청 편리하고 들고 다니면서 마실 수도 있어 넘 좋아요~
휴대성이 큰 장점 같아요!!
30초 작동하다 자동으로 멈춰서 안전하게 사용할 수 있어요!
건강생각해서 자주 갈아 마실 수 있는 제품 찾다 발견했는데 좋은 선택이었어요!! :)` ,


    author: '감성주방유저',
    authorId: 'user26',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 94,
    helpfulVotes: 121,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2024-06-27',
    usagePeriod: '6개월',
    pros: ['디자인 예쁨', '안정감 있는 무게', '무선 사용 편리', '세척감 좋은 구조'],
    cons: ['살짝 무거움'],
    tags: ['감성가전', '무선사용', '휴대용블렌더', '간편세척'],
    isSponsored: false,
    views: 5030,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '27',
    title: '한 달 사용 후 느낀 실용적이고 강한 블렌더',
    content:`한달사용 찐후기입니다 일단 생과일넣고 우유나 요구르트넣은 다음에 얼음이랑 갈면 1잔 반정도 마실 수 있는 분량나오더라구요! 
무엇보다 와이프가 활용도가 높다며 만족해합니다~ 세척도 간편하고 휴대성도 높아서 블렌더지만 텀블러처럼 들고다니기도 좋은 것 같습니다 추천합니다!!` ,


    author: '스무디부부',
    authorId: 'user27',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 92,
    helpfulVotes: 108,
    notHelpfulVotes: 2,
    verifiedPurchase: true,
    purchaseDate: '2024-09-06',
    pros: ['생과일+얼음도 가능', '세척 빠름', '휴대성 좋음', '텀블러로 활용 가능'],
    cons: ['연속 사용은 조금 제한'],
    tags: ['부부템', '스무디제작', '휴대성', '간편세척'],
    isSponsored: false,
    views: 4700,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '28',
    title: '용량 아쉽지만 휴대성 하나로 모든 걸 커버함',
    content: `한 달간 쓰면서 단점이 딱 두 개 있는데 큰 문제가 되지는 않습니다.
용량이 아쉬울 수 있다 : 한 번에 많이 갈아서 소분해 보관하거나 하시는 분들은 부족한 용량이에요. 
저는 데일리로 요거트 스무디 제조 위주로 사용하기 때문에 괜찮았습니다!
조금만 꾸덕하게 갈아져도 자주 멈춘다 : 이건 오히려 안전상의 이유라 단점이라 할 수는 없지만 폭이 좁고 길다 보니 갈리면서 아래 공간이 붕 뜰 때가 많아요. 
휘적거리기가 조금 귀찮습니다. 하지만 압도적으로 편리하고 휴대성으로는 원탑이라 올해 구매한 가전 중 굿소비에 포함되는 제품이에요.
무엇보다 저 슬림한 사이즈에 파워 넘치는 분쇄력이 가장 강점입니다.` ,


    author: '데일리스무디인',
    authorId: 'user28',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
     trustScore: 93,
    helpfulVotes: 115,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2024-06-05',
    usagePeriod: '2개월',
    pros: ['압도적 휴대성', '파워 좋은 분쇄력', '작지만 충분한 성능'],
    cons: ['용량 아쉬움', '꾸덕한 재료는 자주 멈춤'],
    tags: ['휴대성최강', '작지만강함', '스무디', '분쇄력'],
    isSponsored: false,
    views: 6200,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '29',
    title: '여름 과일 음료용으로 최강 활용템',
    content: `복잡하게 코드 꽂아서 돌릴 필요없이
충전해두고 편하게 쓰기 좋았어요!
또 몇초, 몇분 돌려야지 고민할 필요없이 알아서 시간지나면 꺼지는 부분도 좋았고요.
밑에 날이 있는 부분은 빼고 휴대하기도 좋고 무엇보다 손잡이가 있어서도 편해요~
여름이라 수박쥬스 갈아서 들고 나가면 극락!-!
집에 큰 블렌더만 있다면 하나 꼭 소장해서 써보세요! 너무너무 만족한 소비였습니다!` ,


    author: '여름과일광인',
    authorId: 'user29',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MTdfNDYg%2FMDAxNzQ0ODY2OTg1OTMx.3MFLFIfkZfAc-l3PyhTGfsFoxr84zd4MuV_ock5HXlkg.QW0PVH7ppVPKqGS70qp_-imgBnfx7HOxfJDm-6TtxAcg.JPEG%2FIMG_8756.jpg&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MTdfNDYg%2FMDAxNzQ0ODY2OTg1OTMx.3MFLFIfkZfAc-l3PyhTGfsFoxr84zd4MuV_ock5HXlkg.QW0PVH7ppVPKqGS70qp_-imgBnfx7HOxfJDm-6TtxAcg.JPEG%2FIMG_8756.jpg&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
     trustScore: 95,
    helpfulVotes: 143,
    notHelpfulVotes: 1,
    verifiedPurchase: true,
    purchaseDate: '2024-06-30',
    usagePeriod: '3개월',
    pros: ['여름 음료에 최적화', '시간 설정 자동', '야외 사용 좋음', '손잡이 편함'],
    cons: ['용량이 아주 크진 않음'],
    tags: ['여름음료', '과일주스', '휴대성', '무선블렌더'],
    isSponsored: false,
    views: 7000,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '30',
    title: '아침 얼음 음료에도 무난히 잘 갈리는 성능',
    content: `얼음도 잘갈리고 아침에 챙겨다니기 좋아요` ,


    author: '아침햇살',
    authorId: 'user30',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 91,
    helpfulVotes: 82,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2025-10-23',
    usagePeriod: '1개월',
    pros: ['얼음 잘 갈림', '아침 휴대 음료 최적', '작동 간편'],
    cons: ['용량 작은 편'],
    tags: ['얼음가능', '아침루틴', '휴대용', '간편사용'],
    isSponsored: false,
    views: 3900,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '31',
    title: '물이 꼭 필요해서 아쉬운 점이 남는 제품',
    content: `생각보다 귀찮아서 안써요 ㅜ
토마토 갈아먹으려고 샀는데 물이 꼭 있어야 되서 생과일 주스 만들기 어려워요` ,


    author: '하늘바라기',
    authorId: 'user31',
    category: '가전제품',
    rating: 3,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
     trustScore: 78,
    helpfulVotes: 47,
    notHelpfulVotes: 11,
    verifiedPurchase: true,
    purchaseDate: '2025-09-26',
    usagePeriod: '2주',
    pros: ['휴대성 나쁘지 않음', '간단한 주스는 가능'],
    cons: ['물이 꼭 필요함', '생과일 주스 만들기 어려움', '점점 손이 안 감'],
    tags: ['생과일주스', '물필수', '아쉬운구매'],
    isSponsored: false,
    views: 3200,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '32',
    title: '누구나 쉽게 사용할 수 있는 직관적 블렌더',
    content: `작동하기 쉽고, 세척이 편해요` ,


    author: '초보도잘씀',
    authorId: 'user32',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MDNfNzkg%2FMDAxNzE3MzkyMTU4NjQy.lgZmnu_dp5MyqfFXikN4zoABuzL4E0vGxtGUrgOTM-Ig.QtYp0RBKM6SZiZX9jEKTeRmG5hEaP6A3Vrvc_uInzFsg.JPEG%2F02.jpg&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MDNfNzkg%2FMDAxNzE3MzkyMTU4NjQy.lgZmnu_dp5MyqfFXikN4zoABuzL4E0vGxtGUrgOTM-Ig.QtYp0RBKM6SZiZX9jEKTeRmG5hEaP6A3Vrvc_uInzFsg.JPEG%2F02.jpg&type=sc960_832'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 90,
    helpfulVotes: 76,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2025-07-16',
     usagePeriod: '3개월',
    pros: ['작동법 아주 쉬움', '세척이 빠르고 간편함', '버튼 수가 적어 직관적임'],
    cons: ['세밀한 설정 기능은 없음'],
    tags: ['입문자용', '간편세척', '직관적조작'],
    isSponsored: false,
    views: 4000,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '33',
    title: '충전 횟수는 아쉽지만 성능은 만족',
    content: `사용하기 정말 간단하고 휴대성도
좋고요 의외로 잘 갈아지기도합니다
조금 아쉬운점은 한번충전 15회는... 않된다는게 아쉽네요` ,


    author: '프로틴매일마심',
    authorId: 'user33',
    category: '가전제품',
    rating: 4,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA1MjZfMjEy%2FMDAxNzQ4MjE2Nzc1OTkz.FzdK7rYeP1edQ5NI6iClCS2dpmKjEEiH7lwbG8FuIc0g.XaYalOlRkuXDcSi3Jh3c2VAf5T--ciltJ53xWt7m3Jcg.JPEG%2F20250522%25A3%25DF235434.jpg&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA1MjZfMjEy%2FMDAxNzQ4MjE2Nzc1OTkz.FzdK7rYeP1edQ5NI6iClCS2dpmKjEEiH7lwbG8FuIc0g.XaYalOlRkuXDcSi3Jh3c2VAf5T--ciltJ53xWt7m3Jcg.JPEG%2F20250522%25A3%25DF235434.jpg&type=sc960_832'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 88,
    helpfulVotes: 69,
    notHelpfulVotes: 6,
    verifiedPurchase: true,
    purchaseDate: '2025-04-13',
    usagePeriod: '5개월',
    pros: ['휴대성 좋음', '생각보다 잘 갈림', '사용법 단순'],
    cons: ['광고보다 충전 지속 시간이 짧게 느껴짐'],
    tags: ['휴대용블렌더', '충전식', '가벼운스무디'],
    isSponsored: false,
    views: 3900,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '34',
    title: '적당히 넣어야 잘 갈리는 실사용 팁 포함 후기',
    content: `처음에 빨간불 들어오길래 너무 충전이
오래 안간다 했더니 주황불이었어요 너무 내용물을 많이 넣었나봐요 적당히 조절해주니
정말 편리합니다 ㅎ 매일 아침 잘 쓰고 있어요
세척도 편리하고 보관하기도 너무 좋아요` ,


    author: '붉은노을',
    authorId: 'user34',
    category: '가전제품',
    rating: 4,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 93,
    helpfulVotes: 92,
    notHelpfulVotes: 4,
    verifiedPurchase: true,
    purchaseDate: '2024-12-17',
    usagePeriod: '9개월',
    pros: ['용량만 맞추면 잘 갈림', '세척 매우 간편', '보관하기 좋음', '아침 루틴에 적합'],
    cons: ['내용물 많이 넣으면 바로 멈춤'],
    tags: ['사용노하우', '아침루틴', '간편세척', '용량주의'],
    isSponsored: false,
    views: 5819,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '35',
    title: '간단하고 조용해서 자주 손이 가는 블렌더',
    content:`아주잘 쓰고 있습니다 시끄럽지않게 잘 갈리고 휴대용으로 너무 좋고 만족스러워요`,

    author:  '조용한사람',
    authorId: 'user35',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 92,
    helpfulVotes: 81,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2025-11-06',
    usagePeriod: '3주',
    pros: ['소음이 크지 않음', '휴대용으로 활용도 높음', '자주 쓰기 부담 없는 크기'],
    cons: ['대량으로 갈기에는 부족함'],
    tags: ['저소음', '휴대성', '자주사용', '소형가전'],
    isSponsored: false,
    views: 3605,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '36',
    title: '1~2인 가구에 이상적인 조용한 블렌더',
    content: `사용하기 편리하고 소음도 없이 잘 갈리네요
1,2인 정도 쓰기에는 사이즈도 적당하고 아주 좋아요~` ,

    author: '원투펀치가구',
    authorId: 'user15',
    category: '가전제품',
    rating: 4,
    productName: '닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 75,
    helpfulVotes: 50,
    notHelpfulVotes: 12,
    verifiedPurchase: true,
    purchaseDate: '2025-11-04',
    usagePeriod: '3개월',
    pros: ['1~2인분에 딱 맞는 용량', '조용하게 잘 갈림', '사용법이 단순함'],
    cons: ['가족 단위 사용에는 아쉬운 용량'],
    tags: ['1인가구', '2인가구', '저소음', '소형블렌더'],
    isSponsored: false,
    views: 2878,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },

  {
    _id: '37',
    title: '냉동 블루베리 스무디에 최적화된 포터블템',
    content: `냉동 블루베리나 프로틴쉐이크 먹을때 들고 다니면서 바로 사용하기 편해서 좋아요. 
다만 냉동 블루베리는 덩어리 진건 갈기 전에 부숴서 넣는게 좋습니다. 덩어지진건 잘 안갈리더라고요. 
그리 어려운일이 아니라 아주 만족하며 사용중입니다. 세척도 매우 간편해요.` ,


    author: '블루베리',
    authorId: 'user37',
    category: '가전제품',
    rating: 5,
    productName: '닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTNfMzkg%2FMDAxNzI4ODI2MjIxOTM2.z8zTbYyhAa_il3IuLKxTFGFxs53oCCPrwwuuLA2N9jcg.ED4M3Hb6LMv4zmU5qsmOq1YYfjtDNaM3F2tliH87KnIg.JPEG%2FVideoCapture%25A3%25DF20241013%25A3%25AD221543.jpg&type=ofullfill340_600_png',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTNfMzkg%2FMDAxNzI4ODI2MjIxOTM2.z8zTbYyhAa_il3IuLKxTFGFxs53oCCPrwwuuLA2N9jcg.ED4M3Hb6LMv4zmU5qsmOq1YYfjtDNaM3F2tliH87KnIg.JPEG%2FVideoCapture%25A3%25DF20241013%25A3%25AD221543.jpg&type=ofullfill340_600_png'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
     trustScore: 94,
    helpfulVotes: 112,
    notHelpfulVotes: 4,
    verifiedPurchase: true,
    purchaseDate: '2024-10-10',
   usagePeriod: '3개월',
    pros: ['냉동과일 스무디에 잘 맞음', '프로틴 쉐이크 만들기 좋음', '들고 다니며 바로 사용 가능', '세척이 매우 간편'],
    cons: ['덩어리진 냉동 과일은 미리 잘라 넣어야 함'],
    tags: ['냉동과일', '프로틴쉐이크', '휴대성', '간편세척'],
    isSponsored: false,
    views: 5511,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  {
    _id: '38',
    title: '품질 문제와 AS 불만족으로 남은 아쉬움',
    content: `올해 소비중 제일 잘했다고 생각했으나, 사후 서비스가 개판이네요. 샤크 AS센터 왜 욕먹는지 알겠습니다. 
뚜껑과 용기 사용 4개월 만에 둘다 파손,변형되었고 뚜껑은 스프링이 망가지고, 용기는 하단부가 칼날과 닿아서 다 까져가지고 미세플라스틱 잔뜩 먹게 생겼네요. 
여기까진 제 불찰이라 생각하고, 부속품 주문했습니다. 근데 새로 온 용기가 기존꺼보다 결합이 느슨하게되어 잘못하다간 내용물 다 쏟을거 같아서 상황 설명하고 다시 보냈더니, 같은 내용을 2-3번 얘기해도 제대로 알아듣질 못함. 
담당기사와 바로 통화가 안되는 시스템때문에 계속 상담원 통해서 얘기하고, 그걸 전달하고 다시 상담원통해서 전달받고, 대기업 기준 반나절이면 끝날걸 일주일을 헤맵니다. 
결론은 대체재있다면 절대 다신 샤크 안삽니다.` ,



    author: '지옥경험자',
    authorId: 'user38',
    category: '가전제품',
    rating: 1,
    productName: '닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 42,
    helpfulVotes: 15,
    notHelpfulVotes: 78,
    verifiedPurchase: true,
    purchaseDate: '2024-11-09',
    usagePeriod: '4개월',
    pros: ['처음에는 만족도 높은 성능'],
    cons: ['뚜껑과 용기 파손', '플라스틱 마모 우려', '부속품 결합 불량', 'AS 응대 불친절', '문제 해결에 과도한 시간 소요'],
    tags: ['내구성문제', '부품파손', '사후서비스불만', '재구매의사없음'],
    isSponsored: false,
    views: 8101,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  {
    _id: '39',
    title: '간단함의 끝판왕, 혼자 사는 사람에게 딱',
    content: `닌자라는 믹서기가 있는줄도 몰랐음.

1. 사용법 초간단! 전원 누르고 위에 네모버튼
보라색 LED 일때 누르면? 끝

2. 세척 개편함! 눈금 6번까지 물넣고,
세제 한방울 떨구고 그대로 믹서기 돌리면됨
그리고 물만 다시한번 넣고 한번 더 돌리면
행구기 까지 완료!

3. 사과는 껍질채 먹어야 좋고 당근은
그냥 먹어도 좋은데 둘다 씹어먹는거 보다
갈아먹는게 훨씬편함. 문제는? 완전 잘갈림!

총평!
일인가구 시대에 혼자사는 사람한테 딱좋음!` ,


    author: '하모니카',
    authorId: 'user39',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 98,
    helpfulVotes: 120,
    notHelpfulVotes: 5,
    verifiedPurchase: true,
    purchaseDate: '2025-06-25',
   usagePeriod: '8개월',
    pros: ['버튼 두 개로 끝나는 간단한 조작', '세척 과정이 매우 단순', '사과·당근도 잘 갈림', '1인 가구에 최적화된 용량'],
    cons: ['대가족용으로는 부족한 사이즈'],
    tags: ['1인가구필수', '간편조작', '간편세척', '야채주스'],
    isSponsored: false,
    views: 7120,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },

  {
    _id: '40',
    title: '큰 블렌더보다 더 잘 갈려서 놀란 제품',
    content: `집에 블렌더가 있는데 크기가 너무 크다 보니 청소가 귀찮아서 잘 안 쓰게 되더라구요.. 
    그래서 간단하게 사용할 수 있는 제품을 찾다가 닌자 포터블 블렌더를 구매하게 되었습니다.
크기는 딱 한명~두명이서 갈아마시기 좋은 사이즈고, 무선이라 잘 안갈리지는 않을까 걱정했는데 진짜 잘 갈립니다. 
냉동블루베리를 넣고 갈면 진짜 몇초만에 다 갈려요!
소리도 생각보다 크지 않아서 더 마음에 듭니다~ 컵도 분리가 잘 되다 보니 세척도 용이하고 너무 만족스럽습니다!!!!` ,




    author: '반듯한생활',
    authorId: 'user40',
    category: '가전제품',
    rating: 3,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
     trustScore: 94,
    helpfulVotes: 115,
    notHelpfulVotes: 6,
    verifiedPurchase: true,
    purchaseDate: '2024-05-11',
    usagePeriod: '5개월',
    pros: ['대형 블렌더보다 자주 쓰게 됨', '냉동 블루베리도 빠르게 분쇄', '무선이라 사용 위치 자유로움', '소음이 생각보다 크지 않음', '컵 분리 잘 되어 세척 편리'],
    cons: ['1~2인 기준 용량', '장시간 연속 사용에는 부담'],
    tags: ['냉동과일스무디', '소형블렌더', '무선사용', '간편세척'],
    isSponsored: false,
    views: 5249,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },

  {
    _id: '41',
    title: '작고 가벼워 1인 가구 생활을 바꿔준 블렌더',
    content: `작년 출시 이후 광고가 너무 많고 인스타 공구도 많이해서 반신반의로 안사고 있었습니다.
그런데 이번 할인기간 + 자취 시작으로 구매했는데 매우 만족이에요.
잘 갈리고 가볍고 얇고 작아서 만족도 100
1인 가구에게 딱입니다.
부피 크지 않아 보관하기도 좋아요.
높이는 오일스프레이랑 비슷!
무엇보다 냉동 바나나도 잘 갈려서 대대만족` ,


    author: '물방울',
    authorId: 'user41',
    category: '가전제품',
    rating: 4,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 93,
    helpfulVotes: 118,
    notHelpfulVotes: 5,
    verifiedPurchase: true,
    purchaseDate: '2025-01-21',
    usagePeriod: '3개월',
    pros: ['작고 슬림한 사이즈', '1인 가구에 최적화', '냉동 바나나도 잘 갈림', '보관하기 편한 부피', '무게가 가벼워 휴대 용이'],
    cons: ['여러 명이 한 번에 마시기엔 용량이 아쉬움'],
    tags: ['1인가구', '자취템', '냉동바나나', '슬림디자인', '소형블렌더'],
    isSponsored: false,
    views: 4804,sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '42',
    title: '제품은 좋지만 박스 포장이 아쉬웠던 구매',
    content:`사이즈가 생각보다 작네요 그랴고 잘 갈려서 토마토 쥬스라도 열심히 만들어 먹으려규요~
근데 포장 상태가 박스 밀봉 테이프 접착력이 거의 없고 흐드드 떨어지던데.. 누가 반품한걸 보낸거 아닌지.... 
포장도 비닐이 삐죽 삐져 나와 있구요.. 일단 그냥 사용 합니다` , 



    author: '찬란한바람',
    authorId: 'user42',
    category: '가전제품',
    rating: 4,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 85,
    helpfulVotes: 72,
    notHelpfulVotes: 9,
    verifiedPurchase: true,
    purchaseDate: '2025-01-14',
    usagePeriod: '1개월',
    pros: ['생각보다 컴팩트한 사이즈', '토마토 주스 만들기 충분한 성능', '초기 작동 상태 양호'],
    cons: ['박스 밀봉 상태 불량', '반품품 의심 들게 하는 포장', '브랜드 이미지와 맞지 않는 포장 퀄리티'],
    tags: ['포장아쉬움', '초기인상중요', '토마토주스', '선물용비추'],
    isSponsored: false,
    views: 3650
  },
  
  {
    _id: '43',
    title: '할인 때 산 최고의 선택, 성능 기대 이상',
    content: `라방때 네이버쿠폰이 생겨서 고민하다가 구매했어요 고민하다보니 라방이벤트를 다 놓쳐서 안살까하다가ㅋㅋ 
가격이 너무 좋아서 끝나기직전 그냥 사버렸어요 그 어떤 공구보다 최저가~ 넘 만족입니다~ 배송 진짜 빠르고요 요즘 바나나블루베리쉐이크를 자주 먹는데 사용하던 믹서기와 비교를하면 일단
무선인거 너무 편하고요 상대적으로 소리 조용한편이에요 기존사용하던 믹서기는 진짜 폭발할것같은 소리와 냄새로 사용때마다 불안했거든요ㅎㅎ 닌자가 더 잘갈리고 더 맛있네요~~ 별55555입니다 ^^` ,


    author: '라방좋아',
    authorId: 'user43',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA3MjhfMTQz%2FMDAxNzIyMTc2MDc0NzQ0.hhIRXJWInRuVw5SW_kp0fLEvVq1w6Qj6dEi_uzjLuVgg.jalyjOnpaIj4-31-vKTfoETAOqMYar6lOoNEOcrhb54g.JPEG%2F%25BB%25FE%25C5%25A9%25B4%25D1%25C0%25DA_%25BA%25ED%25B6%25F3%25BD%25BA%25C6%25AE_%25C6%25F7%25C5%25CD%25BA%25ED_BC151KR_%25C8%25DE%25B4%25EB%25BF%25EB_%25C1%25F8%25B0%25F8_%25C0%25AF%25B8%25AE_%25B9%25CD%25BC%25AD%25B1%25E2_%25C3%25CA%25B0%25ED%25BC%25D3_%25BA%25ED%25B7%25A3%25B4%25F5_%25C3%25DF%25C3%25B57.jpg&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA3MjhfMTQz%2FMDAxNzIyMTc2MDc0NzQ0.hhIRXJWInRuVw5SW_kp0fLEvVq1w6Qj6dEi_uzjLuVgg.jalyjOnpaIj4-31-vKTfoETAOqMYar6lOoNEOcrhb54g.JPEG%2F%25BB%25FE%25C5%25A9%25B4%25D1%25C0%25DA_%25BA%25ED%25B6%25F3%25BD%25BA%25C6%25AE_%25C6%25F7%25C5%25CD%25BA%25ED_BC151KR_%25C8%25DE%25B4%25EB%25BF%25EB_%25C1%25F8%25B0%25F8_%25C0%25AF%25B8%25AE_%25B9%25CD%25BC%25AD%25B1%25E2_%25C3%25CA%25B0%25ED%25BC%25D3_%25BA%25ED%25B7%25A3%25B4%25F5_%25C3%25DF%25C3%25B57.jpg&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 94,
    helpfulVotes: 134,
    notHelpfulVotes: 6,
    verifiedPurchase: true,
    purchaseDate: '2024-06-25',
    usagePeriod: '3개월',
    pros: ['라방 특가로 높은 가성비', '무선이라 사용이 매우 편리함', '기존 믹서기보다 소음이 훨씬 적음', '바나나·블루베리 쉐이크가 부드럽게 잘 갈림', '배송이 매우 빠름'],
    cons: ['정가 기준으로 보면 가격이 다소 높게 느껴질 수 있음'],
    tags: ['라방구매', '가성비굿', '저소음', '쉐이크전용', '무선블렌더'],
    isSponsored: false,
    views: 6686,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '44',
    title: '아침 주스 한 잔 만들기엔 최고의 제품',
    content: `적은 양의 쥬스나 스무디를 만들어 먹기 딱 좋아요.

아침에 cca쥬스를 한 잔 마시려면 큰 믹서기에 갈아서 먹는거 까진 괜찮은데 설거지거리가 만만치 않았는데 닌자블라스트가 싹 해결해 주네요.

받자마자 세척하고 사과양배추 주스 한잔 시원하게 마셨어요~^^` ,
    author: '바다새야',
    authorId: 'user44',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://ibb.co/ynt6f3VZ'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 92,
    helpfulVotes: 101,
    notHelpfulVotes: 5,
    verifiedPurchase: true,
    purchaseDate: '2024-05-29',
     usagePeriod: '3개월',
    pros: ['적은 양 주스·스무디에 최적화', '세척이 간단해 아침에 쓰기 부담 없음', '큰 믹서기 대신 설거지 스트레스 감소', '사과·양배추 주스도 무난히 갈림'],
    cons: ['여러 잔을 한 번에 만들기에는 용량이 부족함'],
    tags: ['아침루틴', '소량제조', '주스용', '설거지간편'],
    isSponsored: false,
    views: 4311,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '45',
    title: '간편함과 맛을 동시에 잡은 블렌더 경험',
    content:`믹서기의 신세계입니다. 크고 무겁고 한번 쓰면 일이 커지는 믹서기 때문에 사용을 꺼렸는데요, 친구 소개로 구입했는데 너무 간편하고 좋아요!!!
소리도 너무 요란하지 않구요, 정말 부드러운 식감으로 잘 갈립니다!!
(우유100ml, 바나나1/2, 그릭요거트 1스푼, 믹스 견과류 한 봉지, 냉동 블루베리 15알 정도 넣고 갈았는데 넘 맛나요!!)` ,


    author: '홈카페도전러',
    authorId: 'user45',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 93,
    helpfulVotes: 119,
    notHelpfulVotes: 7,
    verifiedPurchase: true,
    purchaseDate: '2024-10-13',
     usagePeriod: '3개월',
    pros: ['무거운 기존 믹서기 대체 가능', '조작이 쉽고 사용이 간편함', '소음이 과하게 크지 않음', '재료를 곱게 잘 갈아 부드러운 식감', '단백질·과일 조합 레시피에 잘 맞음'],
    cons: ['여러 잔을 연속으로 만들기엔 약간 번거로울 수 있음'],
    tags: ['홈카페', '쉐이크레시피', '기존믹서대체', '저소음'],
    isSponsored: false,
    views: 5003,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '46',
    title: '디자인·성능·휴대성 모두 합격',
    content: `무엇보다 이뻐요!
저소음에 충전후 사용 시간도 만족할만합니다.
만듬새가 좋아서 결합시 딱 맞게 들어가고 부드럽게 열려서 사용하기 편리해요.
이동이랑 보관도 편리합니다
텀블러 사이즈가 조금 작기는 한데 한번 만들때 2잔정도 나오는 분량이네요.`,


    author:'예쁜가전좋아함',
    authorId: 'user46',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://ibb.co/9kj0ZLv9'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 93,
    helpfulVotes: 111,
    notHelpfulVotes: 6,
    verifiedPurchase: true,
    purchaseDate: '2024-05-28',
   usagePeriod: '3개월',
    pros: ['외관 디자인이 세련됨', '소음이 적은 편', '충전 후 사용 시간 만족도 높음', '결합부 마감이 좋아 열고 닫기 편리함', '이동과 보관이 모두 편한 사이즈'],
    cons: ['텀블러 자체 용량이 살짝 아쉬움'],
    tags: ['디자인중요', '저소음', '휴대성', '2인분용량'],
    isSponsored: false,
    views: 4700,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '47',
    title: '매일 사용하게 되는 조용하고 강력한 블렌더',
    content: `성능이 이리 좋은데 소음이 작아서 아주 만족하고 쓰고 있습니다. 세척도 간편해서 날마다 갈아마시게 되네요. 
사이즈 콤팩트 하고 바쁠땐 손질해둔 재료 넣어서 가지고 출근합니다. 사용하기도 직관적입니다. 가격대비 너무 잘샀습니다!` ,


    author: '파릇파릇',
    authorId: 'user47',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA1MjZfMjEy%2FMDAxNzQ4MjE2Nzc1OTkz.FzdK7rYeP1edQ5NI6iClCS2dpmKjEEiH7lwbG8FuIc0g.XaYalOlRkuXDcSi3Jh3c2VAf5T--ciltJ53xWt7m3Jcg.JPEG%2F20250522%25A3%25DF235434.jpg&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA1MjZfMjEy%2FMDAxNzQ4MjE2Nzc1OTkz.FzdK7rYeP1edQ5NI6iClCS2dpmKjEEiH7lwbG8FuIc0g.XaYalOlRkuXDcSi3Jh3c2VAf5T--ciltJ53xWt7m3Jcg.JPEG%2F20250522%25A3%25DF235434.jpg&type=sc960_832'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 95,
    helpfulVotes: 138,
    notHelpfulVotes: 5,
    verifiedPurchase: true,
    purchaseDate: '2024-05-03',
    usagePeriod: '11개월',
    pros: ['성능 대비 소음이 매우 작은 편', '세척이 간편해 매일 사용 가능', '콤팩트한 사이즈로 보관 용이', '손질해둔 재료만 넣으면 바로 출근용 음료 완성', '직관적인 버튼 구성'],
    cons: ['긴 시간 연속 사용에는 다소 부담'],
    tags: ['매일사용', '저소음', '출근템', '콤팩트', '직관조작'],
    isSponsored: false,
    views: 7112,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '48',
    title: '프로틴 파우더 용도로 최적, 세척도 간편',
    content:`사무실, 휴대용으로 프로틴파우더 블랜딩 용도로 사용하려고 구매했는데 좋은것 같아요~​
들고있는 사진들 보면 좀 커보여서 계속 고민하다가 말았던 제품인데 생각보다 작고 세척으로 세제 넣은 물만 돌려봤지만 소음도 거슬림 없이 괜찮았어요.
얼음 과일 갈때는 소음이 좀 더 있겠지만 주사용 용도가 프로틴파우더라 괜찮을것 같아요.
★ 하나 뺀 이유는 용기 하단 컵커버가 실리콘, 커버 이 두가지를 결합해서 끼워야 하는데 이부분이 넘 번거로운거 같아요.
좀 더 손쉬운 방법으로 개선되면 좋겠어요.` ,

    author: '로보트',
    authorId: 'user48',
    category: '가전제품',
    rating: 4,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 89,
    helpfulVotes: 97,
    notHelpfulVotes: 10,
    verifiedPurchase: true,
    purchaseDate: '2025-04-19',
     usagePeriod: '1개월',
    pros: ['프로틴 파우더 블렌딩에 최적화', '사무실·외출용으로 들고 다니기 좋음', '생각보다 크지 않아 책상 위에서 사용 가능', '세제 넣은 물만 돌려도 세척이 쉬움', '소음이 지나치게 크지 않음'],
    cons: ['하단 컵 커버 결합 구조가 번거로움', '부품 조립 과정이 직관적이지 않음'],
    tags: ['프로틴쉐이크', '사무실템', '휴대용', '세척간편', '구조개선필요'],
    isSponsored: false,
    views: 4450,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '49',
    title: '운동 후 간단한 건강 음료 만들기 최고',
    content: `운동하면서 출근해서 간단히 건강쥬스 먹고 싶기에 샀는데 너무 활용도가 좋네요!! 
잘갈리고 어느.장소에서도 먹을수 있어서 너무 좋습니다.` ,


    author: '운동하고한잔',
    authorId: 'user49',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
     trustScore: 90,
    helpfulVotes: 104,
    notHelpfulVotes: 8,
    verifiedPurchase: true,
    purchaseDate: '2025-01-11',
    usagePeriod: '2개월',
    pros: ['운동 후 간단한 주스 만들기 딱 좋음', '원하는 장소 어디서든 사용 가능', '생각보다 잘 갈려 활용도가 높음'],
    cons: ['대용량 스무디 제조에는 한계가 있음'],
    tags: ['운동후한잔', '건강쥬스', '휴대용', '헬스보조'],
    isSponsored: false,
    views: 4600,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },
  
  {
    _id: '50',
    title: '대형 믹서기 대체 성공! 두 명 사용에도 충분',
    content: `라이브방송 할때 샀는데
진짜 저렴하게 잘산거같아요!! 전이 있던 믹서기는 너무 커서 잘안쓰게 되었는데 이거사고 매일 아침마다 남편이랑 생과일 주스 마시게 되써용!! 
사용도 편하고 청소 관리도 편하고 일단 가벼운데 힘이 좋네요!! 2인이 쓰기에 진짜 딱이네용! 강추!! 
아 근데 뚜껑이나 컵? 을 여유분으로 사고 싶어요! 얼릉 살 수 있게 해주세용!` ,


    author: '달롱달롱',
    authorId: 'user50',
    category: '가전제품',
    rating: 5,
    productName:'닌자 블라스트 포터블 블렌더',
    productBrand: '닌자',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307558/53075588684.20250218181551.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 93,
    helpfulVotes: 129,
    notHelpfulVotes: 7,
    verifiedPurchase: true,
    purchaseDate: '2024-07-26',
    usagePeriod: '4개월',
    pros: ['대형 믹서기 대신 매일 쓰게 되는 크기', '아침마다 두 사람이 생과일 주스 마시기 충분한 용량', '사용법이 단순하고 청소도 편함', '가벼운데 파워가 좋아 얼음·과일도 잘 갈림'],
    cons: ['뚜껑·컵 여분을 별도로 구매하기 어려움'],
    tags: ['2인가구', '대형믹서대체', '아침주스', '간편청소', '파워좋은소형'],
    isSponsored: false,
    views: 5867,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53075588684?cat_id=50001861&frm=NVSCPRO&query=%EB%AF%B9%EC%84%9C%EA%B8%B0%EC%83%A4%ED%81%AC%EB%8B%8C%EC%9E%90&nl-ts-pid=jf0ohdqXKZwssh8X%2B4N-116944&NaPm=ct%3Dmimr6prs%7Cci%3Da30d5dc74d25be6b04bc2b740fba41cecefe445b%7Ctr%3Dsls%7Csn%3D95694%7Chk%3D8e62c2f32e0294f20cd6cf133074bbd61938ce3f',
  },









             


















  {
    _id: '1a',
    title: '유리용기지만 강력한 분쇄력, 가성비 최고 블렌더 후기',
    content: `*구매동기
기존에 사용하던 도깨비방망이기 사망하시는 바람에 괜찮고 가성비좋은 블랜더를 알아보다가 정말 가성비 최고인 제품을 만나서 얼른 겟했네요^^

*배송
정말 총알배송입니다.
저녁때 구매했는데 바로 다음날 받아보았네요.
쿠O 새벽배송인줄 알았네요♡

*포장
유리제품이라서 걱정했는데 안전하게 배송되었어요♡

*사용후기
유리용기 블랜더이기에 한손으로 들기에 무거운감이 살짝 있지만 아무리 젖병소재 용기라해도 미세플라스틱에서 완전히 안전한지 걱정이 되었기에 살짝 무거운건 감당하고 쓰겠다고 첨부터 생각했었기 때문에 그리 큰 단점은 아니었어요.
무겁지만 그만큼 튼튼한 유리라서 안심이되네요.
일단은 단호박 라떼를 해본정도라 분쇄력은 만족합니다.
얼음도 한차례 갈아서 스무디도 해봤는데~
분쇄력은 충분한것 같아서 만족해요♡♡
세척역시 자동세척기능도 있고 밑에 칼날부분도 분리하여 세척할수있어서 위생적으로 관리도 할 수 있는것 같아요.

유리용기에 얼음도 갈리는 블랜더를 찾으신다면 필립스 5000시리즈 HR3040 강추합니다♡♡
올여름 더운데 팥빙수도 도전해보렵니다!!

`,

    author: '달빛행주394',
    authorId: 'user1a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640'],
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 94,
    helpfulVotes: 112,
    notHelpfulVotes: 4,
    verifiedPurchase: true,
    purchaseDate: '2024-07-30',
    usagePeriod: '1개월',
    pros: ['강한 분쇄력', '세척 쉬움'],
    cons: ['무거움'],
    tags: ['유리용기', '세척간편'],
    isSponsored: false,
    views: 6800,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  {
    _id: '2a',
    title: '유리용기 + 세기조절 + 자동세척까지 만족스러운 선택',
    content: `야채랑 과일 갈아마시려고 알아보다가 구매했어요.
도착배송 상품이라 그 다음날 바로 받아볼 수 있었고, 큰 택배 상자 안에 이중으로 박스포장돼서 왔어요. 상품은 포장이 꼼꼼하게 돼있어서 아무 이상 없고, 구성품 모두 잘들어있었어요.

제가 해당 제품을 선택한 이유는,
1. 여러가지 제품 고민하다가 필립스는 가전쪽으로 워낙 유명하고, 최근에 다른 필립스 제품 A/S때문에 서비스센터 방문했는데 체계적으로 잘처리해주셔서 믿고 선택했어요.
2. 블렌더 통이 유리라서 선택했어오. 다른 브랜드의 플라스틱인 제품은 플라스틱이 갈렸다는 얘기가 있어서 무겁더라도 유리제품이 마음이 놓이겠다고 생각했어요. 생각했던 것보다는 많이 무겁지는 않아서 잘사용할 것 같아요.
3. 해당 시리즈에도 몇 가지의 종류가 있어서 고민했는데 HR3040/00제품이 세기 조절이 더 세분화돼있어서 선택했어요.
4. 얼음도 잘갈린다고 해서 구매한거였는데 냉동 블루베리, 냉동 파인애플을 넣고 갈아보니 시원하게 잘갈려서 너무 만족해요. 얼마 돌리지 않아도 세세하게 잘갈려있어요. 블루베리 껍질이 조금 보이지만 마실 때 이질감이 없을정도로 정말 곱게 잘 갈렸어요.
5. 자동세척 기능이 유용할 것 같아서 선택했어요. 예전에 쓰던 다른 제품은 날 사이에 작은 것들이 끼면 빼다가 손 다치기도 하고 그랬는데 자동세척을 돌리니까 깨끗하게 다 빠지더라고요. 아주 만족합니다!

이렇게 다섯가지정도 장점을 생각하고 구매했는데 너무 만족합니다. 배송 받고 두 번 사용해봤지만 세척도 편하고 부피 차지도 크지 않아서 잘 사용할 것 같아요. 잘 사용해보고 한달 사용 후기도 남겨보겠습니다:)

` ,


    author: '수박전사',
    authorId: 'user2a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA1MjVfMTkx%2FMDAxNzQ4MTcxNzY1OTcw.2nkbQPbTQrjqrGT0hLS7iwKWSvv7WoAxjBnmngkj1u4g.UxxUwAnyaFac3NGbf93HoZjIJ_9mnvjF_I2Q5McoyUog.JPEG%2F20250525_193308.jpg&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA1MjVfMTkx%2FMDAxNzQ4MTcxNzY1OTcw.2nkbQPbTQrjqrGT0hLS7iwKWSvv7WoAxjBnmngkj1u4g.UxxUwAnyaFac3NGbf93HoZjIJ_9mnvjF_I2Q5McoyUog.JPEG%2F20250525_193308.jpg&type=a340'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 86,
    helpfulVotes: 95,
    notHelpfulVotes: 6,
    verifiedPurchase: true,
    purchaseDate: '2025-01-05',
    usagePeriod: '1개월',
    pros: ['깔끔한 세척', '얼음 가능'],
    cons: ['무게감'],
    tags: ['자동세척', '강한분쇄'],
    isSponsored: false,
    views: 5400,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  {
    _id: '3a',
    title: '파손 사고 후 다시 선택한 블렌더, 성능과 세척 모두 만족',
    content: `필립스 믹스기를 오랫동안 너무 만족하면서 쓰고 있었는데ᆢ최근 날도 덥고 ᆢ좀 사용하지 않다가 바나나 스무디를 만들려고 했지요
냉동 바나나 살짝 녹이고, 얼음, 요거트 가루, 우유 넣고ᆢ 시작버튼 누르는 순간 굉음이 나면서 ᆢ급기야 그 두꺼운 유리통을 뚫고 내용물이 다 터져나왔지요
부엌 초토화, 옆에 있던 강아지에게 다 튀고ᆢ
확인 결과 큰 포크가 안에 들어 있었던 거지요
투명 유리에 두껑 열고 내용물도 넣었는데ᆢ전혀 뭔가가 들어 있다는걸 생각지도 못했으니ᆢ
정말 식겁했네요ᆢ

여튼 그래서 얘는 수습하여 가전폐기물로 보내기로 하고새로운 믹서를 사야했습니다
최신 상품들이 너무 많아는데 대부분은 밑에 칼날도 분리되는 제품이었어요
자동세척 기능이 있는것이 좋을지를 두고 고민을 좀 했는데ᆢ
결론적으로 힘도 좋고, 자동세척 기능있는 이 제품으로 선택했네요

예전것 보다는 쬐끔 더 가벼운 느낌이고, 칼날 분리되어 씻기도 좋네요.
두껑이나 유리병 재질이 좀 더 가볍고 덜 투박하다고 해야하나ᆢ

토마토 갈아보니 봉으로 살짝만 눌러주니 잘 돌아가고 부드러운 토마토 주스를 마실수 있었어요
앞으로 계속 애용할겁니다ᆢ

사용전에 항상 용기 안을 꼭 확인해야!!

 `,


    author: '고요한바람술사',
    authorId: 'user3a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640'],
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 91,
    helpfulVotes: 61,
    notHelpfulVotes: 10,
    verifiedPurchase: true,
    purchaseDate: '2024-08-24',
    usagePeriod: '1년',
    pros: ['배송 빠름', '칼날 분리 가능'],
    cons: ['무거움', '내구성 편차'],
    tags: ['빠른배송', '기본성능'],
    isSponsored: false,
    views: 3900,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  {
    _id: '4a',
    title: '무겁지만 강력한 유리 블렌더, 녹즙·주스용으로 최고',
    content: `매일 녹즙 가는 1인 요즘 들어 매일 아이들 바나나 우유까지 만들어 먹이느라 믹서기를 하루도 쉴틈 없이 사용중입니다 조금 큰용량의 제품이 필요해서 이것저것 찾아보니 가격도 기능도 모터 힘도 너무 다양해서 결정장애 올듯해요 그래도 요아이로 결정 했습니다 택배 받는순간 뭔박스가 이렇게 크지 했는데 외부택배박스만 크고 실제 믹서기는 너무 오버사이즈까지는 아니었네요~
제품 받았으니 세척부터 시작하기 👀실리콘패드도 분리가 되네요 사실 요부분 분리 안되면 오래 사용하다 보면 곰팡이 생길수 있는분분인데 개인적으로 너무 맘에 듭니다.그리고 다른 제품과 다르게 유리제품라 너~~~~~~~무 무겁습니다.😭 그래도 녹즙 가는1인이라 냄새나 착색 문제때문에 유리제품이 더 좋음.우선 수박쥬스 만들어 봤는데 수박씨 까지 잘 갈리네요 소음이 크다는 얘기가 있는데 개인적으로 지금까지 5개의 먹서기를 써본 결론은 믹서기의 모터 힘이 강하면 소리도 큰거같아요 내집에서 사용하는건데 잘 갈리면 소음쯤이야 ㅋㅋㅋ
앞으로 더 사용해 봐야겠지만 별 탈 없이 몇년 잘 사용할수 있었으면 좋겠습니다~~

` ,


    author: '초록숲파수꾼',
    authorId: 'user4a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 93,
    helpfulVotes: 128,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2024-07-14',
    usagePeriod: '3개월',
    pros: ['저소음', '녹즙 잘됨'],
    cons: ['무거움'],
    tags: ['저소음', '녹즙'],
    isSponsored: false,
    views: 7811,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },

  {
    _id: '5a',
    title: '냉동과일도 문제없는 파워와 편한 세척에 만족',
    content: `[브랜드로부터 제품비를 지원받아 작성하였습니다]

요즘 건강 챙긴다고 탄산음료 대신 야채나 과일 스무디를 직접 만들어 먹는데요.
ABC 주스도 자주 해먹고요..
그런데 예전에 쓰던 믹서기는 냉동 과일이나 얼음을 넣으면 잘 안갈려서 답답 하더라고요.
블렌더에 관심이 생겨서 잘 갈린다는 후기를 보고 디자인도 예뻐서 괜찮다 싶었어요.
가격도 착하구요~
단단한 재료도 부드럽게 잘 갈리고, 입자도 곱게 갈려서 저희 아이도 잘 먹어요.
개인적으로 용기가 유리라서 좋더라고요.
세척 모드가 파워풀해서 씻는것도 편해서 매일 쓰기 좋아요.
아침마다 과일 주스를 갈아먹거나
요즘에는 더워서 낮에 시원한 스무디 한 잔씩 만들어서 먹으니까 좋아요.
잘 선택한 것 같아요.

`,


    author: '빙수도적',
    authorId: 'user5a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fai.esmplus.com%2Funigame%2FPhilips%2FKA%2FHR3040_00%2FNEW%2FHR3040_00_30.jpg&type=a340',
    images: ['https://search.pstatic.net/sunny/?src=https%3A%2F%2Fai.esmplus.com%2Funigame%2FPhilips%2FKA%2FHR3040_00%2FNEW%2FHR3040_00_30.jpg&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 95,
    helpfulVotes: 147,
    notHelpfulVotes: 4,
    verifiedPurchase: true,
    usagePeriod: '4개월',
    pros: ['냉동과일 가능', '세척 쉬움'],
    cons: ['용량 작음'],
    tags: ['강한파워', '세척간편'],
    isSponsored: false,
    views: 6513,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },

  {
    _id: '6a',
    title: '배송 상태 아쉬웠지만 분쇄력·세척은 만족한 실사용 리뷰',
    content: `믹서기가 마침 고장나서 필립스로 구해했는데요. 유튜브 믹서기 비교영상 보고 제품을 선택해보았어요.마침 이벤트 행사중이기도 하네요. 제품은 하루만에 배송처리되었는데 박스가 벌어져서 왔는데요..제품이 제대로 배송된것이 신기하네요.

본체가 유리라서 무겁기도한데..박스상태가 엉망이라 믹서기는 제품확인상 바로씻고 테스트해보았어요. 오디랑 우유 꿀을 넣고 갈아봤는데 입자가 곱게 잘 갈리고 좋아요. 자동세척기능도 맘에들긴하는데 칼날이 분리되어 깨끗이 씻을수있어 좋아요.

` ,


    author: '바닐라군단장9021',
    authorId: 'user6a',
    category: '가전제품',
    rating: 4,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 72,
    helpfulVotes: 35,
    notHelpfulVotes: 28,
    verifiedPurchase: true,
    purchaseDate: '2025-07-02',
    usagePeriod: '1개월',
    pros: ['기본 분쇄력 무난'],
    cons: ['냉동과일 약함', '배송 상태 불량'],
    tags: ['기본성능', '배송아쉬움'],
    isSponsored: false,
    views: 2798,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '7a',
    title: '교환 여러 번 있었지만 성능은 괜찮은 유리 블렌더',
    content:`첫번째 배송받은 제품이 마감이 살짝 문제가 있어 교환 받았고, 교환받은 후 설거지해서 사용하려고 보니 유리부분 이가 나가서 재교환. 다시 교환받은 제품은 처음거랑 똑같이 마감이 살짝 문제가 있긴했으나, 이러다 언제쓸지 모르겠다 싶어서 걍 쓰기로했어요.
자동세척기능이 유용할지알았는데, 딱히.. 유리라 식세기 돌릴수있는건 좋구요. 다만 유리라 많이 무겁네요. 과일 같은건 아주 잘갈리고, 수분기없는 단단한 견과류같은건 조금 버거워보여요.`,



    author: '조용한별지기347',
    authorId: 'user7a',
    category: '가전제품',
    rating: 4,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 88,
    helpfulVotes: 83,
    notHelpfulVotes: 5,
    verifiedPurchase: true,
    purchaseDate: '2025-08-30',
    usagePeriod: '1개월',
    pros: ['휴대성 좋음', '과일 분쇄 잘됨'],
    cons: ['무거움'],
    tags: ['휴대성', '유리용기'],
    isSponsored: false,
    views: 5200,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '8a',
    title: '무겁지만 잘 갈리고 세척 쉬운 1인 가구 최적 블렌더',
    content: `박스는 좀 뜯겨서 왔네요.. 믹서기는 너무 좋아요! 오자마자 키위, 케일, 사과 넣고 돌렸는데 곱게 잘 갈렸어요! 
누름봉도 있으니까 너무 편하네요👍 세척기능 있는 제품으로 샀는데 요긴하게 사용할 것 같아요! 저렇게 세제, 물 넣고 돌리고 헹구기만 했는데 깨끗하네요! 플라스틱에 비해서 확실히 무겁지만 무거운거 감안하고 구매했어요 만족해요~!!
` ,


    author: '초보자취생',
    authorId: 'user8a',
    category: '가전제품',
    rating: 4,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 92,
    helpfulVotes: 102,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2025-09-11',
    usagePeriod: '3개월',
    pros: ['고운 분쇄력', '세척 쉬움'],
    cons: ['무게감'],
    tags: ['1인가구', '세척간편'],
    isSponsored: false,
    views: 6542,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '9a',
    title: '9년 쓰던 제품 대체, 유리용기와 성능 모두 만족',
    content: `신혼때 산 9년된 필립스 플라스틱 제품 보내주고 새로 장만 했어요. 유리라서 무겁긴 하지만 깨끗하게 쓸수 있어서 좋아요. 얼음도 잘 갈리고 성능 좋네요. 저는 소음도 기존께 더 컸던지라 만족합니다. 세척 기능 있는 것도 좋네요. 싹~ 다 갈아마실꺼예요.

` ,


    author: '과일잘먹는언니',
    authorId: 'user9a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 91,
    helpfulVotes: 76,
    notHelpfulVotes: 2,
    verifiedPurchase: true,
    purchaseDate: '2024-07-16',
    usagePeriod: '1개월',
    pros: ['디자인 예쁨', '얼음 잘 갈림'],
    cons: [],
    tags: ['예쁜디자인', '얼음가능'],
    isSponsored: false,
    views: 4501,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '10a',
    title: '1200W 출력의 시원한 분쇄력, 가성비 만족 블렌더',
    content: `솔직히 왠만한 가정집에서 믹서기를 쓰면 얼마나 써먹겠습니까??

하지만, 그 한번 쓰는데 "믹서기 출력이 약해서" 속상한거 보다, "출력 짱짱하니 좋네!!" 하며 시원하게 갈아 마시는게 좋다고 생각 하신다면 1200W모터 달린 이녀석이 적당하다 봅니다.

리뷰접기` ,


    author: '자취7년차',
    authorId: 'user10a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fai.esmplus.com%2Funigame%2FPhilips%2FKA%2FHR3040_00%2FNEW%2FHR3040_00_30.jpg&type=a340',
    images: ['https://search.pstatic.net/sunny/?src=https%3A%2F%2Fai.esmplus.com%2Funigame%2FPhilips%2FKA%2FHR3040_00%2FNEW%2FHR3040_00_30.jpg&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 84,
    helpfulVotes: 57,
    notHelpfulVotes: 6,
    verifiedPurchase: true,
    purchaseDate: '2024-07-27',
    usagePeriod: '2개월',
    pros: ['출력 강함', '간편함'],
    cons: ['용량 작음'],
    tags: ['강한파워', '간편사용'],
    isSponsored: false,
    views: 4100,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '11a',
    title: '빙수도 가능한 파워, 휴대성 좋은 포터블 블렌더',
    content: `파워 엄청쎄고 빙수기만큼은아니지만 빙수해먹기도 좋네요 ㅎㅎ

` ,


    author: '깔끔성애자',
    authorId: 'user11a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://images.philips.com/is/image/philipsconsumer/vrs_b7559cc22cc21ed7358fa289f4c9f6396f76d429?wid=700&hei=700&$pnglarge$',
    images: ['https://images.philips.com/is/image/philipsconsumer/vrs_b7559cc22cc21ed7358fa289f4c9f6396f76d429?wid=700&hei=700&$pnglarge$'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 77,
    helpfulVotes: 66,
    notHelpfulVotes: 12,
    verifiedPurchase: true,
    purchaseDate: '2024-06-24',
    usagePeriod: '4개월',
    pros: ['파워 좋음', '얼음 가능'],
    cons: ['속도 조절 없음'],
    tags: ['강한파워', '얼음가능'],
    isSponsored: false,
    views: 4320,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '12a',
    title: '10년 블렌더 교체 후 감탄한 유리용기 + 자동세척 성능',
    content: `10년 썼던 필립스믹서기 보내주고, 새로 다시 또 필립스네요.
유리라 미세플락스틱 걱정 적고, 1200w라 예전 상품보다 힘도 좋아졌네요.
예전 상품에 없던 자동세척기능이 추가되어 있어 처음 사용해 봤는데,편리해서 좋아요.

` ,


    author: '차분한주말유저',
    authorId: 'user12a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTEwMjFfNTUg%2FMDAxNzYxMDI4ODkxMDAw.zI5-Jr83UDBd__HrtLd_QNmjb6h4mL6swcHHhBBQLvQg.jXWkhHY3IXB3AnKHdKvg8pMZmlc3Tr6g7ZOcwXrxlKMg.PNG%2Fremote_0.png&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTEwMjFfNTUg%2FMDAxNzYxMDI4ODkxMDAw.zI5-Jr83UDBd__HrtLd_QNmjb6h4mL6swcHHhBBQLvQg.jXWkhHY3IXB3AnKHdKvg8pMZmlc3Tr6g7ZOcwXrxlKMg.PNG%2Fremote_0.png&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 97,
    helpfulVotes: 131,
    notHelpfulVotes: 1,
    verifiedPurchase: true,
    purchaseDate: '2024-08-21',
    usagePeriod: '10년',
    pros: ['자동세척 유용함', '파워 강함'],
    cons: ['무게 있음'],
    tags: ['자동세척', '강한파워'],
    isSponsored: false,
    views: 7691,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '13a',
    title: '세척 쉽고 조용한 블렌더, 작은 용량은 아쉬움',
    content: `한달째 사용중인데, 모터힘도 좋고 세척도 너무 편리해요!

` ,


    author: '딸기스무디러버',
    authorId: 'user13a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMTVfMTM0%2FMDAxNzM2OTI1MzgwNTc5.H1kYRPLhERWUfwusnx8JR6ttKVC_5_CR6-thVygZUKMg.QoSBX7XeT6x2aefpOjG2kEdYNsUiLQtvTWsmE5BCWLEg.JPEG%2FKakaoTalk_20250115_154619532_09.jpg&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMTVfMTM0%2FMDAxNzM2OTI1MzgwNTc5.H1kYRPLhERWUfwusnx8JR6ttKVC_5_CR6-thVygZUKMg.QoSBX7XeT6x2aefpOjG2kEdYNsUiLQtvTWsmE5BCWLEg.JPEG%2FKakaoTalk_20250115_154619532_09.jpg&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 83,
    helpfulVotes: 47,
    notHelpfulVotes: 8,
    verifiedPurchase: true,
    purchaseDate: '2024-09-27',
    usagePeriod: '7개월',
    pros: ['소음 적음', '세척 간편'],
    cons: ['용량 작음'],
    tags: ['저소음', '소용량'],
    isSponsored: false,
    views: 3380,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '14a',
    title: '무겁지만 냉동과일도 매끄럽게 갈리는 강한 성능',
    content: `사용하던 믹서기 모터 불나서 가격 적당한 필립스 제품 구매. 3일째 사용중. 유리용기라 많이 무거워서 들고 씻기 힘들지만 갈리는건 엄청 잘 갈림. 
    매일 닭가슴살, 얼린 바나나와 블루베리, 두유와 아몬드 갈았는데, 너무 잘갈려서 씹히는게 없어서 3일째 되는날엔 덜 갈았음. 성능은 좋음.

 `,


    author: '건강챙기는직장인',
    authorId: 'user14a',
    category: '가전제품',
    rating: 3,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MDNfMjMw%2FMDAxNzU2ODc3MzE3NDYx.b4vOGDNhp-tGsJNpbKR4AWsv4hEvqVIgO1AcFEeSng4g.NvElZoPYHMFcS4Ahh4CSNtbDVsNJb5cM_Y9S16kauMsg.JPEG%2FIMG%25A3%25DF8635.JPG&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MDNfMjMw%2FMDAxNzU2ODc3MzE3NDYx.b4vOGDNhp-tGsJNpbKR4AWsv4hEvqVIgO1AcFEeSng4g.NvElZoPYHMFcS4Ahh4CSNtbDVsNJb5cM_Y9S16kauMsg.JPEG%2FIMG%25A3%25DF8635.JPG&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 68,
    helpfulVotes: 44,
    notHelpfulVotes: 29,
    verifiedPurchase: true,
    purchaseDate: '2025-07-11',
    usagePeriod: '1주',
    pros: ['냉동과일 가능', '분쇄력 좋음'],
    cons: ['무거움', '설명 부족'],
    tags: ['냉동과일', '강한분쇄'],
    isSponsored: false,
    views: 3700,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '15a',
    title: '크게 특별하진 않음',
    content: `그냥그냥 그래요 그냥그냥 그래요 그냥그냥 그래요 그냥그냥 그래요` ,

    author: '조용한하루살이' ,
    authorId: 'user15a',
    category: '가전제품',
    rating: 2,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MDNfMjMw%2FMDAxNzU2ODc3MzE3NDYx.b4vOGDNhp-tGsJNpbKR4AWsv4hEvqVIgO1AcFEeSng4g.NvElZoPYHMFcS4Ahh4CSNtbDVsNJb5cM_Y9S16kauMsg.JPEG%2FIMG%25A3%25DF8635.JPG&type=a340'],
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 42,
    helpfulVotes: 5,
    notHelpfulVotes: 19,
    purchaseDate: '2024-05-14',
    verifiedPurchase: true,
    usagePeriod: '1개월',
    pros: [],
    cons: ['성능 부족', '가격 대비 만족도 낮음'],
    tags: ['사용간편', '아쉬움'],
    isSponsored: false,
    views: 2370,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },

  {
    _id: '16a',
    title: '블렌더가 잘 안 갈리는 사용 후기',
    content: `생각보다 잘 안갈림` ,


    author: '달콤한아침',
    authorId: 'user16a',
    category: '가전제품',
    rating: 2,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MDNfMjMw%2FMDAxNzU2ODc3MzE3NDYx.b4vOGDNhp-tGsJNpbKR4AWsv4hEvqVIgO1AcFEeSng4g.NvElZoPYHMFcS4Ahh4CSNtbDVsNJb5cM_Y9S16kauMsg.JPEG%2FIMG%25A3%25DF8635.JPG&type=a340'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 36,
    helpfulVotes: 3,
    notHelpfulVotes: 34,
    verifiedPurchase: true,
    purchaseDate: '2025-07-09',
    usagePeriod: '1개월',
    pros: [],
    cons: ['무게감 있음'],
    tags: ['미니가전'],
    isSponsored: false,
    views: 2511,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  {
    _id: '17a',
    title: '밤 주문해 다음날 도착, 강력한 분쇄력이 포인트',
    content: `매일 아침에 토마토와 블루베리쥬스를 갈아마셔요 ^^ 기존에 테x 블렌더를 썼었는데 어느 순간부터 모터 타는 냄새가 나더라구요 
    아 이거 위험 하겠다 싶어 바로 필립스 블렌더를 구매했습니다 밤 11시에 주문했는데 다음날 정오도 되지않아 도착했어요 
    유리라서 좀 무겁기는 했어도 플라스틱보다 훨씬 안전해보이고 위생적으로 보였습니다 용량도 엄청 크고 분쇄기능도 엄청쎕니다 ㅎㅎ

 `,



    author: '믹서기찾는중',
    authorId: 'user17a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA1MTNfMTM1%2FMDAxNzQ3MTQyNDg3OTkz.6oW_wZjTxqB0ivVggURO-bsmQElF-zUuBwO7MIrMss8g.XUNCFMssHHILcgko3DMh3IsWk7gVEmpIq5ojcxFv31Ig.JPEG%2F900%25A3%25DF20250508%25A3%25DF175814.jpg&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA1MTNfMTM1%2FMDAxNzQ3MTQyNDg3OTkz.6oW_wZjTxqB0ivVggURO-bsmQElF-zUuBwO7MIrMss8g.XUNCFMssHHILcgko3DMh3IsWk7gVEmpIq5ojcxFv31Ig.JPEG%2F900%25A3%25DF20250508%25A3%25DF175814.jpg&type=a340'],
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 94,
    helpfulVotes: 88,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2025-07-10',
    usagePeriod: '3개월',
    pros: ['분쇄력 강함', '세척 쉬움'],
    cons: ['무게 있음'],
    tags: ['스무디', '강한성능'],
    isSponsored: false,
    views: 6400,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  {
    _id: '18a',
    title: '로켓 같은 배송 + 강력 모터에 매우 만족',
    content: `사람이 많아서 큰 믹서기 찾고잇다 구매햇습니다 필립스에대해 소문을 듣고 또 리뷰도 너무좋아서 기대햇는데 배송은 거의 로켓수준 점심에 주문햇더니 저녁에왓어요
게다가 성능도 기대이상이고 너무 좋아요 속이 뻥 뚫리는 성능이랄까..!
암튼간 너무 너무 만족하고 앞으로도 고장없이 잘쓰면 좋겟어요.` ,


    author:  '차분한집사',
    authorId: 'user18a',
    category: '가전제품',
    rating: 5,
   productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20250912_155%2F1757646130810fwtSI_JPEG%2F12360628523565063_1928153745.jpg&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20250912_155%2F1757646130810fwtSI_JPEG%2F12360628523565063_1928153745.jpg&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 97,
    helpfulVotes: 120,
    notHelpfulVotes: 2,
    verifiedPurchase: true,
    purchaseDate: '2024-10-20',
    usagePeriod: '5개월',
    pros: ['파워 강함', '배송 빠름'],
    cons: ['충전 필요'],
    tags: ['강한파워', '스무디전용'],
    isSponsored: false,
    views: 7800,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },

  {
    _id: '19a',
    title: '여름 스무디용으로 얼음도 잘 갈리는 가성비',
    content: `여름마다 스무디 만들어 먹고 싶어서 잘 갈리는 믹서기 가 항상 갖고 싶었어요~ 
    마침 라이브 방송때 신상 제품으로 잘 구매했네요! 우선 얼음 갈아봤는데 잘 갈려서 만족이에요. 
    다만 강한 만큼 소음은 좀 있다는 점 ㅋㅋㅋ 유리가 무거운 편이지만 오래 쓸수 있을 것 같아서 좋아요~ 세척기능도 굿굿!!` ,




    author: '고구마',
    authorId: 'user19a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20250912_155%2F1757646130810fwtSI_JPEG%2F12360628523565063_1928153745.jpg&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20250912_155%2F1757646130810fwtSI_JPEG%2F12360628523565063_1928153745.jpg&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 87,
    helpfulVotes: 59,
    notHelpfulVotes: 4,
    verifiedPurchase: true,
    purchaseDate: '2024-04-16',
    usagePeriod: '2개월',
    pros: ['얼음 분쇄 잘됨', '부드러운 식감'],
    cons: ['소음 있음'],
    tags: ['여름음료', '얼음가능'],
    isSponsored: false,
    views: 3709,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },

  {
    _id: '20a',
    title: '힘 좋고 조용한 유리 블렌더 사용 후기',
    content: `많은 블렌더 중에 고민하다 결정한 필립스블렌더!! 믿고 구매하는 브랜드 가격도 너무 좋고 평이 좋더라구요 
    사용해보니 왜그런지 알꺼 같아요!! 힘도 좋고 생각보다 시끄럽지 않았어요
유리로 되있어 무겁지만 환경호로몬 걱정 없오요! 바닥에는 뽁뽁이 붙어있어서 안전도 덤 굿굿!! 👍`,


    author: '감자',
    authorId: 'user20a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20250912_155%2F1757646130810fwtSI_JPEG%2F12360628523565063_1928153745.jpg&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20250912_155%2F1757646130810fwtSI_JPEG%2F12360628523565063_1928153745.jpg&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 99,
    helpfulVotes: 140,
    notHelpfulVotes: 1,
    verifiedPurchase: true,
    purchaseDate: '2024-04-28',
    usagePeriod: '6개월',
      pros: ['이유식 최적', '세척 쉬움'],
    cons: [ ],
    tags: ['이유식', '육아템'],
    isSponsored: false,
    views: 7980,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '21a',
    title: '미세플라스틱 걱정 없는 유리용기, 세척 쉬워 만족',
    content:`작은 사이즈의 믹서 썼는데 밧데리가 오래되어 나갔는지 작동이 안되어 급하게 구입했는데 큰사이즈로 
    바꾸니 평소 쥬스 등 2인 분 만 들때 두 번에 나눠 만들던거 한 번에 뚝딱 만들 수 있어 좋네요. 
    유리라 무겁다는 분들 계시던데 유리로 되어있어 미세 플라스틱 걱정없이 쓸 수 있어 추천합니다.
     또 시간이 지나면 플라스틱처럼 색이 변하는 그런 단점 없어서 좋고요. 특히 맘에 드는건 하단 부분이 분리가 되어 남은 
     찍꺼기 걱정없이 꼼꼼하게 세척 할 수 있어 안심입니다.제품 받자마자 콩국수 도전했는데 골고루 잘 갈려서 좋네요. 추천합니다.`, 



    author: '빨간머리 유',
    authorId: 'user21a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20251028_98%2F17615796377024rmKI_PNG%2F11249611819284676_1044934875.PNG&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20251028_98%2F17615796377024rmKI_PNG%2F11249611819284676_1044934875.PNG&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 90,
    helpfulVotes: 77,
    notHelpfulVotes: 5,
    verifiedPurchase: true,
    purchaseDate: '2024-06-27',
    usagePeriod: '3개월',
    pros: ['위생적 유리용기', '세척 쉬움'],
    cons: ['무게감'],
    tags: ['유리용기', '세척간편'],
    isSponsored: false,
    views: 4400,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '22a',
    title: '부모님용 단순 블렌더, 자동세척 좋은데 칼날 분리 아쉬움',
    content: `부모님쓰실거라서 단순한거 구매했어요. 요새 나오는 이유식도 만들고 아이스크림도 만드는 
    기능많은것은 복잡하기만 할것같아서 주로 가는 기능만쓰시기때문에요.무겁지만 유리용기선호하셔서 이제품이 딱인거같습니다. 
    전에쓰던거는 칼날까지 분리되는데 이제품은 칼날은분리가 안되는것같아요.그래도 자동세척되니까 괜찮을것 같아요` ,


    author: '책과 연필',
    authorId: 'user22a',
    category: '가전제품',
    rating: 4,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 83,
    helpfulVotes: 44,
    notHelpfulVotes: 7,
    verifiedPurchase: true,
    purchaseDate: '2025-07-20',
    usagePeriod: '1개월',
    pros: ['자동세척 편함', '분쇄력 충분'],
    cons: ['칼날 분리 불편'],
    tags: ['자동세척', '부모님선물'],
    isSponsored: false,
    views: 3500,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '23a',
    title: '무겁지만 성능 좋고 2인 가구에 적합한 무선 블렌더',
    content: `진공 살려다 최신 제품이라해서 이걸로 구매했어요. 
    유리 용기라 컵이랑 부딪칠까 조심하고 있어요. 무게는 있지만 저는 괜찮네요. 설명서가 너무
     내용이 없어서 아쉬워요. 레시피북도 없고요 ^^ 아침에 블루베리랑 바나나랑 우유 갈아서 매일 
     애들이랑 먹고있어요. 레시피 찾아서 많이 활용해볼께요~` ,


    author: '아이엄마의선택',
    authorId: 'user23a',
    category: '가전제품',
    rating: 4,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20251028_98%2F17615796377024rmKI_PNG%2F11249611819284676_1044934875.PNG&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20251028_98%2F17615796377024rmKI_PNG%2F11249611819284676_1044934875.PNG&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 92,
    helpfulVotes: 72,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2024-05-23',
    usagePeriod: '2개월',
    pros: ['강한 성능', '2인 가구 적합'],
    cons: ['무거움'],
    tags: ['2인가구', '강한파워'],
    isSponsored: false,
    views: 5900,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '24a',
    title: '유리용기 파손으로 아쉬운 경험, 내구성은 의문',
    content:`구입한지 1달 되어가는데..
사용은 15일정도..
블렌더 사용중에 유리용기 머리부분이 깨졌네요..a/s물어보니 소비자 과실로
제가 직접구입을해야. 한다고하네요..
이게 맞는지 모르겠네요
너무약한거 같아요..
다른제품 추천합니다..
최악이네요.` ,


    author: '가느다란머리',
    authorId: 'user24a',
    category: '가전제품',
    rating: 1,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 47,
    helpfulVotes: 9,
    notHelpfulVotes: 28,
    verifiedPurchase: true,
    purchaseDate: '2025-07-24',
    usagePeriod: '1개월',
    pros: ['분쇄력 무난'],
    cons: ['내구성 의문'],
    tags: ['내구성아쉬움'],
    isSponsored: false,
    views: 2800,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '25a',
    title: '빠른 배송과 준수한 성능, 가성비 좋은 콤팩트 블렌더',
    content: `빠른 배송 제품 품질 모두 만족합니다~` ,


    author: '익숙한 나날들',
    authorId: 'user25a',
    category: '가전제품',
    rating: 4,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTExMjRfNjQg%2FMDAxNzYzOTQ0ODU0NDk0.1k4eeg2z6yAH5uDzhbm4Imb5IdeWmLsh9caWBMvscP8g.YZ3YoIQ8Hirlg-fU0Lbw6CFonX0OavJgTG4_x-InPhMg.PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2025-11-24_093517.png&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTExMjRfNjQg%2FMDAxNzYzOTQ0ODU0NDk0.1k4eeg2z6yAH5uDzhbm4Imb5IdeWmLsh9caWBMvscP8g.YZ3YoIQ8Hirlg-fU0Lbw6CFonX0OavJgTG4_x-InPhMg.PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2025-11-24_093517.png&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 81,
    helpfulVotes: 71,
    notHelpfulVotes: 8,
    verifiedPurchase: true,
    purchaseDate: '2024-10-03',
    usagePeriod: '3개월',
    pros: ['가성비 좋음', '성능 준수'],
    cons: ['디자인 평범'],
    tags: ['가성비', '기본성능'],
    isSponsored: false,
    views: 5102,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '26a',
    title: '4인 가족용으로 선택한 2L 대용량 필립스 블렌더 후기',
    content: `2리터 생각보다 크긴 하네요
역시 필립스예요 갈리는 힘이 좋습니다.
4인 가족이라 큰거 샀어요
원래 500쓰다 친정드리고 없으니 불편해서
재구매입니다 여름에 수박주스 자주 해먹으려고요.` ,


    author: '파마주부',
    authorId: 'user26a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 90,
    helpfulVotes: 68,
    notHelpfulVotes: 4,
    verifiedPurchase: true,
    purchaseDate: '2025-07-08',
    usagePeriod: '6개월',
    pros: ['예쁜 디자인', '무선 편리함'],
    cons: ['분쇄력 보통'],
    tags: ['감성디자인', '무선사용'],
    isSponsored: false,
    views: 5300,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '27a',
    title: '두유·블루베리·바나나도 곱게, 강력 성능의 만족 후기',
    content:`오자마자 두유+블루베리+바나나+얼음 넣고 갈아서 마셨는데 너무 곱게 잘갈립니다
디자인도 이쁘고,, 성능도 좋고,, 튼튼포장으로 잘 보내주셨습니다
만족도 좋습니다~필립스라서 AS 걱정도 없을듯 합니다`,



    author: '개와 고양이',
    authorId: 'user27a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTExMjRfNjQg%2FMDAxNzYzOTQ0ODU0NDk0.1k4eeg2z6yAH5uDzhbm4Imb5IdeWmLsh9caWBMvscP8g.YZ3YoIQ8Hirlg-fU0Lbw6CFonX0OavJgTG4_x-InPhMg.PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2025-11-24_093517.png&type=a340',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTExMjRfNjQg%2FMDAxNzYzOTQ0ODU0NDk0.1k4eeg2z6yAH5uDzhbm4Imb5IdeWmLsh9caWBMvscP8g.YZ3YoIQ8Hirlg-fU0Lbw6CFonX0OavJgTG4_x-InPhMg.PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6_2025-11-24_093517.png&type=a340'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 92,
    helpfulVotes: 78,
    notHelpfulVotes: 2,
    verifiedPurchase: true,
    purchaseDate: '2025-07-11',
    pros: ['스무디 최적', '강한 파워'],
    cons: ['무게 다소 있음'],
    tags: ['스무디', '부부사용'],
    isSponsored: false,
    views: 6400,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '28a',
    title: '작지만 강력한 성능, 가성비 뛰어난 휴대 블렌더',
    content: `일단 품질이 좋고 제품 기능 자체도 좋네요!! 가성비가 참 좋습니다.!!!.` ,


    author: '보글보글',
    authorId: 'user28a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 89,
    helpfulVotes: 74,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2025-10-05',
    usagePeriod: '2개월',
    pros: ['휴대성 뛰어남', '데일리 사용 적합'],
    cons: ['용량 작음'],
    tags: ['휴대용', '데일리템'],
    isSponsored: false,
    views: 5000,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '29a',
    title: '아침 주문·저녁 도착, 얼음도 잘 갈리는 강한 파워',
    content: `아침에 시켰는데 저녁에 도착해있어서 진짜 깜짝놀랐습니다.
힘도 좋아서 얼음ㄴ넣어서 갈아도 잘갈립니다!!` ,


    author: '영화가 좋아',
    authorId: 'user29a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.1.20250318134439.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5309239/53092393189.1.20250318134439.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 87,
    helpfulVotes: 70,
    notHelpfulVotes: 7,
    verifiedPurchase: true,
    purchaseDate: '2025-08-08',
    usagePeriod: '1개월',
    pros: ['얼음 잘 갈림', '여름 음료 최적'],
    cons: ['소음 다소 있음'],
    tags: ['얼음가능', '여름음료'],
    isSponsored: false,
    views: 3880,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  
  {
    _id: '30a',
    title: '용기 안정감 + 강한 모터, 한 달 사용 후 완전 만족',
    content: `지난 첫 게시글 때도 상세하게 적었습니다만 용기가 주는 안정감과 여러 모터의 성실한 작동도 마음에 들고 있습니다.

한 달을 사용했지만 딱히 단점이라고 할 것이 없네요. (단점을 위주로 적어볼까 했으나... 정말 없습니다)

여러가지 음료를 만들 때도 그렇고 , 요리 전반에도 쓰이는 아주 유용한 제품입니다.

가성비도 정말 좋고 무엇보다 브랜드가 주는 안정감도 대단합니다 ㅎㅎ 다들 좋은 선택이되시길 바라면서 꼭 도움이 되셨으면 합니다!!

궁금하신점은 언제든지 판매자 문의로 대응 잘 해주실겁니다!` ,


    author: '아침햇살궁수',
    authorId: 'user30a',
    category: '가전제품',
    rating: 5,
    productName: '필립스 파워 핸드 블렌더',
    productBrand: '필립스',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5309239/53092393189.20250318134439.jpg?type=f640'],
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 91,
    helpfulVotes: 66,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2024-08-30',
    usagePeriod: '1개월',
    pros: ['얼음 분쇄 강함', '아침 루틴 적합'],
    cons: ['용량 적음'],
    tags: ['아침루틴', '얼음가능'],
    isSponsored: false,
    views: 5900,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53092393189?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmiosxfzk%7Cci%3D2ee8e85acbc22f7f04d4eb897f5415a9ced0634f%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Decf3de5b58dbffa8f39fa6bb9fbb204b398a8196',
  },
  






































  {
    _id: '1b',
    title: '가볍고 단단한 트라이탄 보울, 기대 이상 성능의 블렌더',
    content: `얼음까지 잘 갈리는 믹서가 필요했는데 검색을 해보니 테팔 퍼펙트믹스 플러스 제품이 마음에 들어서 구매하였습니다.

박스 배송 상태 및 포장 상태는 사진과 같았고 전혀 문제 없었습니다. 그리고 제품의 상태 및 구성품들도 사진과 같았고 특히 트라이탄 재질의 믹서 보울은 가볍고 좋았습니다. 칼날부분도 티타늄 코팅이 되어있다고 하여 살펴보니 칼날 표면에 황색 코팅이 되어있는게 보입니다. 그리고 제가 고민했던 닌자 제품과 비교하자면 하부의 폭이 너무 넓지 않아서 좋았습니다. 닌자제품의 경우 30cm가 넘어가는데 저는 좀 더 슬림한 제품을 원했거든요.

제품의 전체 무게도 측정해봤는데 본체 하부가 2336.3g 이었고 상부가 521.8g 으로 결합하면 약 2858.1g으로 3kg이 조금 안되는 무게였습니다.
쓰기에 너무 가볍거나 무겁지 않고 바닥면에 흡착판이 붙어있어서 좀 더 고정하기에 용이할 것 같네요.

총평을 드리자면 부피 많이 차지하지 않고 무게도 너무 무겁지 않고 보울도 가벼운 트라이탄 재질의 쓸만한 믹서입니다. 강력 추천드립니다.

` ,


    author: '소담이22',
    authorId: 'user1b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 94,
    helpfulVotes: 109,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2024-11-01',
    usagePeriod: '2개월',
    pros: ['탄탄한 내구성', '트라이탄 보울 가벼움', '안정감 있는 무게'],
    cons: ['무게감 있음'],
    tags: ['미니가전', '트라이탄'],
    isSponsored: false,
    views: 7124,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },

  {
    _id: '2b',
    title: '조용하고 세척 편한 신혼 주방 필수템 블렌더',
    content: `신혼때 엄마가 주신 투박한거 쓰다가 세척이 불편해서 새로 장만 했습니다^^ 
    예전게 소음이 워낙 컸어서 그런지 이건 적당히 들을만한 소리로 느껴지네요ㅎㅎ 실버 앤 블랙 색상이 깔
    끔해서 주방에 꺼내둬도 괜찮아요~ 딸기바나나주스 만들어 먹어봤는데 잘 갈리고 세척하기도 편해요!` ,


    author: '은솔바람',
    authorId: 'user2b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MjBfMjky%2FMDAxNzE4ODgwMTU1NTg2.fuDTXET7GfTl8aHeLnQAqLUJxmBwWHRQTUL0SmYj1wsg.hx5y58zVaWc2QB0sEhmkkqVzpz0L8uj0yKzpywya-0og.JPEG%2FMEITU%25A3%25DF20240620%25A3%25DF171231659.jpg&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MjBfMjky%2FMDAxNzE4ODgwMTU1NTg2.fuDTXET7GfTl8aHeLnQAqLUJxmBwWHRQTUL0SmYj1wsg.hx5y58zVaWc2QB0sEhmkkqVzpz0L8uj0yKzpywya-0og.JPEG%2FMEITU%25A3%25DF20240620%25A3%25DF171231659.jpg&type=sc960_832'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 92,
    helpfulVotes: 88,
    notHelpfulVotes: 2,
    verifiedPurchase: true,
    purchaseDate: '2024-05-18',
    usagePeriod: '1개월',
    pros: ['세척 쉬움', '소음 적당함', '디자인 깔끔함'],
    cons: [],
    tags: ['미니가전', '신혼템'],
    isSponsored: false,
    views: 4210,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },

  {
    _id: '3b',
    title: '가성비 최고, 스무디 자동 기능이 만족스러운 제품',
    content: `집에 테팔 블렌더가있는데 시골에서 사용할게 필요해서 고민하던중 좋은가격의 제품을 발견!

도착보장배송으로 다음날 바로 받았고, 기존 제품은 LED버튼을 누르면 자동작동되었는데 본 제품은 스무디LED를 누른후 다이얼을 START로 옮겨줘야 자동으로 믹스 합니다! 1분정도 후 삐 소리 4번이 나면 완료된거니 참고하세요!

단점은 작동시 타는듯한 냄새가 나는데 Q&A보니 모터에 오일링한것 때문이라 하셔서 쫌 사용 해보아야 알것같아요!

현재 N페이 페이백 받으면 가격이 7만5천원으로 깡패라 진짜 강추 입니다!!

` ,


    author: '하늘비102',
    authorId: 'user3b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 95,
    helpfulVotes: 120,
    notHelpfulVotes: 2,
    verifiedPurchase: true,
    purchaseDate: '2024-07-05',
    usagePeriod: '3개월',
    pros: ['가격 대비 성능 좋음', '자동 스무디 기능', '빠른 배송'],
    cons: ['초기 타는 냄새'],
    tags: ['미니가전', '가성비'],
    isSponsored: false,
    views: 6893,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '4b',
    title: '힘 좋고 부드럽게 갈리는 가정용 블렌더 후기',
    content: `할인하기에 조금 저렴하게 구입했어요
힘 좋고 좋은 소재라고 되어 있어 믿고 구매했습니다
바나나랑 우유 갈아봐는데 곱게 잘 갈리네요
거친게 아니라 당연하지만 힘이 좋게 느껴집니다
소음이 크다고 하는데 제가 듣기엔 보통이고
크기도 가정용으론 적당합니다

` ,


    author: '모카초코',
    authorId: 'user4b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 91,
    helpfulVotes: 79,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2025-01-21',
    usagePeriod: '1개월',
    pros: ['힘 좋은 모터', '부드러운 갈림', '적당한 크기'],
    cons: [],
    tags: ['미니가전'],
    isSponsored: false,
    views: 4290,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '5b',
    title: '묵직한 안정감과 강력한 성능, 김치 양념도 문제 X',
    content: `우와~~~~이거 진짜 잘산거 같네요 우선 묵직해요 아래몸통 자체도 무게가 있고 바닥에 
    딱 달라붙어서 흔들림이 거의 없네요 김치양념 하려고 이것저것 넣으면 기존 믹서기는 잘 안갈려서 흔들어줘야 
    했는데 이건 묵직하게 바로 갈려버리네요 세기도 조절이 되고 전원도 윗부분을 딸깍 맞추면 바로 전원이 들어와서 
    이중으로 안전하다는 느낌이 드네요 이 가격대에 이정도 성능은 찾아보기 힘들것 같아요 대만족입니다~~~^^ 
    여름에 슬러시 기능도 너무 잘 쓸것 같아요` ,


    author: '포근한하루',
    authorId: 'user5b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 96,
    helpfulVotes: 108,
    notHelpfulVotes: 4,
    verifiedPurchase: true,
    purchaseDate: '2024-10-22',
    usagePeriod: '1개월',
    pros: ['안정적인 흡착판', '강한 갈림 성능', '슬러시 기능 우수'],
    cons: ['무게감 있음'],
    tags: ['미니가전', '강력모터'],
    isSponsored: false,
    views: 7432,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '6b',
    title: '내구성 좋고 세척 쉬운 실사용 만족 리뷰',
    content: `쓰고 있던 믹서기가 플라스틱 금이 가서 새상품으로 교체하려고 여러가지 모델 보고 있었는데 
    테팔 행사에 좋은 가격으로 구입하게 된거 같아요.
내구성도 좋고 컵 소재도 좋고 맘에 들어요.
첫날 토마토 갈아 마시고 내일은 당근,사과, 바나나 갈아보려구요. 개인차 있겠지만 소음은 이정도 갈린다면 
심하지 않은거 같고 세척도 편해서 아주 굿입니다.` ,


    author: '달콤해진',
    authorId: 'user6b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20241223_224%2F1734912033161KjYNM_JPEG%2F52613223036597881_723821792.jpg&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20241223_224%2F1734912033161KjYNM_JPEG%2F52613223036597881_723821792.jpg&type=sc960_832'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 93,
    helpfulVotes: 44,
    notHelpfulVotes: 2,
    verifiedPurchase: true,
    purchaseDate: '2024-02-18',
    usagePeriod: '4개월',
    pros: ['내구성 우수', '세척 편함', '소음 적당함'],
    cons: [],
    tags: ['미니가전'],
    isSponsored: false,
    views: 5391,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '7b',
    title: '믿고 쓰는 테팔! 매끄럽게 잘 갈리는 프리미엄 블렌더',
    content: `믿고쓰는 테팔! 믹서기가 시원치않아서 알아보다가 그래도 명성높은 테팔제품으로 낫지않겠나싶어 
    알아보던중 워낙 여러모델이 있어 고민했습니다. 더 저렴한 모델도 평이 좋았지만 잘 알아보니까 이 제품이 제
    가 원하던 트라이탄이고 모터나 칼날등등 우수한 제품이고 마침 가격도 많이 할인해서 살 수 있어서 이걸로 
    골랐습니다! 퍼펙트믹스블렌더라니 이름도 쏙 마음에 드네요.ㅎㅎ 제품도 잘 포장되어 왔고 배송도 도착보
    장성품이라 바로 받아볼 수 있었습니다. 사용해보니 매끄럽게 너무나 잘 갈려서 최고입니다. 고장없이 오래오래 썼으면 좋겠습니다🤭😉👍` ,


    author: '느린오후',
    authorId: 'user7b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 90,
    helpfulVotes: 82,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2025-01-22',
    usagePeriod: '2개월',
    pros: ['고성능 칼날', '배송 빠름', '트라이탄 재질 만족'],
    cons: ['무게감 있음'],
    tags: ['미니가전', '트라이탄'],
    isSponsored: false,
    views: 4022,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '8b',
    title: '작동력 우수하지만 묵직한 본체… 그래도 만족스럽습니다',
    content: `핸드블랜더에 붙어있는 쪼마난 믹서기 쓰다가
뚜껑부분 세척도 안되고 말려도 물이 계속 나오고
쓸때마다 뚜껑쪽으로 액체가 역류하고 열받아서 질렀어요
소음은 전과 비슷하지만 작동시간이 다르니 훨씬 좋네요ㅎㅎ 용량도 2인 딸바주스 만들기엔 넘쳐나요ㅎ
리뷰보고 자리차지 덜하고 비교적 작다길래
일부러 용량작은 이걸로 선택했는데
기대한거에 비해선 큰듯은 해요ㅋ
그리고 본체부분이 엄청 무겁습니다
어쨌든 맘에들어요 잘쓰겠습니다~

` ,


    author: '초여름바람',
    authorId: 'user8b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
   trustScore: 87,
    helpfulVotes: 19,
    notHelpfulVotes: 5,
    verifiedPurchase: true,
    purchaseDate: '2025-05-05',
    usagePeriod: '3개월',
    pros: ['용량 넉넉함', '작동 성능 좋음'],
    cons: ['본체 무거움', '기대한 것보다 크기 큼'],
    tags: ['미니가전'],
    isSponsored: false,
    views: 3144,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '9b',
    title: '첫 사용 시 타는 냄새 있었지만 가격 대비 만족한 구매',
    content: `1.오늘도착보장 아주좋음 최고임
2.박스개봉후 제품확인하는데 온갖기스에 지문 찍혀있음 반품상품인가했는데 뚜껑은 깨끗
3.방금 오자마자 씻어서 제품물로헹구기기능으로해봤는데 모터에서 타는냄새남 고객qna도 오일링이라니 아 그런가해봄 근데 옆에있는 공기청정기들이 갑자기 폭풍 날뜀 빨간불이 터보로작동됨 참고로 최신식 삼성 공기청정기들임
머 한번사용해본거니 앞으로 더사용해볼텐데 네이버페이에 7만원대라는 이점
대신 구글에 찾아봐도 이모델은 아직많은사용자가 없는듯함 2024년2월제품인걸로암
결론 7만원대가격+오늘도착보장+테팔 무상수리도있으니
내일은 다지기도 살수잇는지 테팔에 문의할려고기다리는중
암튼 이가격에 잘산듯

` ,


    author: '산들산들',
    authorId: 'user9b',
    category: '가전제품',
    rating: 3,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 60,
    helpfulVotes: 7,
    notHelpfulVotes: 21,
    verifiedPurchase: true,
    purchaseDate: '2024-07-03',
    usagePeriod: '1개월',
    pros: ['빠른 배송', '가성비 괜찮음'],
    cons: ['초기 기스', '타는 냄새', '품질 불안'],
    tags: ['미니가전', '품질이슈'],
    isSponsored: false,
    views: 7100,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '10b',
    title: '누구나 쉽게 사용 가능한 가벼운 디자인의 블렌더',
    content: `배송 무척 빠릅니다.
일단 디자인이 사용하기에 컴팩트해서 이쁩니다.
사용하실분이 저희 장모님과 장인어르신께서 사용하실건데 믹서기 자체가 가벼워서 아주 많이 만족하셨습니다.
또한 모터부분이 가벼워서 전처적으로 가볍습니다.
믹서기 본체도 아랫부분에 흡착판 같은게 있어서 고정되어 안정감 있어 좋습니다.
믹서기 사몽자인터페이스도 간결하게 구성되어서 연세드신 어른부터 아이까지 사몽하기 아주 좋습니다.
주인장님 많이 파셔서 부자되세요

` ,


    author: '해맑은초이',
    authorId: 'user10b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MjNfODAg%2FMDAxNzE5MTIwMjgzNDY2.rOQ6sC6D-EAyr1T1A37Cvid995wDWHT0opDOzr8x1v4g.XWowNEmkXm1cof84ymskL3edw65RFKRRXKSUmYblThsg.JPEG%2FDSC03646.JPG&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MjNfODAg%2FMDAxNzE5MTIwMjgzNDY2.rOQ6sC6D-EAyr1T1A37Cvid995wDWHT0opDOzr8x1v4g.XWowNEmkXm1cof84ymskL3edw65RFKRRXKSUmYblThsg.JPEG%2FDSC03646.JPG&type=sc960_832'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 89,
    helpfulVotes: 68,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2024-04-16',
    usagePeriod: '1개월',
    pros: ['가벼운 본체', '흡착판 안정감', '사용법 간단함'],
    cons: [],
    tags: ['미니가전', '부모님선물'],
    isSponsored: false,
    views: 3398,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '11b',
    title: '가볍지만 성능은 괜찮은 플라스틱 컵 블렌더 첫 사용 후기',
    content: `사이즈는 좀 크다고 느껴졌구요
유리가 아닌 플라스틱같은 느낌의 컵이구요
느낌상 좀 약하겠단 느낌이들었구요
써보면 알겠죠
성능은 좋은것같아요 물을넣고 갈아보니 힘이 쎄네요
올여름 얼음도갈고 시원한음료 만들어먹어야겠어요

` ,


    author: '작은행복09',
    authorId: 'user11b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 92,
    helpfulVotes: 71,
    notHelpfulVotes: 6,
    verifiedPurchase: true,
    purchaseDate: '2024-05-14',
    usagePeriod: '2개월',
    pros: ['성능 좋음', '얼음 갈기 가능'],
    cons: ['내구성 의문'],
    tags: ['미니가전'],
    isSponsored: false,
    views: 5184,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '12b',
    title: '힘 좋고 잘 갈리는 만족스러운 블렌더 사용 후기',
    content: `이전에 쓰던 믹서기와는 차원이 다르네요(:
토마토 갈아봤는데 힘이 좋아서 엄~청 잘 갈려요ㅎㅎ
소리도 조금 있긴한데.. 낮 시간에 쓰기 거슬릴 정도는 아니구요ㅎ
날카로워서 좀 조심히 써야할거 같긴 하구요~
잘 쓰겠습니다~~ㅎㅎ

` ,


    author: '포도나무',
    authorId: 'user12b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 95,
    helpfulVotes: 121,
    notHelpfulVotes: 4,
    verifiedPurchase: true,
    purchaseDate: '2024-09-10',
    usagePeriod: '3개월',
    pros: ['강한 모터', '부드러운 갈림', '소음 적당'],
    cons: ['칼날이 매우 날카로움'],
    tags: ['미니가전'],
    isSponsored: false,
    views: 7341,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '13b',
    title: '세일로 구매한 보람! 곱게 잘 갈리는 고성능 블렌더',
    content: `테팔중에 어떤걸 살까 엄청 고민하다가
세일하길래 고민고민하다가 이 모델을 샀는데
바나나 닭가슴살 우유 서리태 넣고
안자른 상태에서 아무버튼없이 그냥 돌려서 갈았는데 씹히는거 하나도 없이 완전 주스 처럼 물처럼 잘 마셨습니다
이제품 고민이신분 추천!
유리제품 할려다가 일단 처음이라 이거했는데 가볍고 분리도 되고 소음이야 믹서기 없는걸 기대하면 못쓰죠 ㅎㅎ
처음 사용했는데 탄내도 안나고 좋네요 ㅎ` ,


    author: '바닐라크림',
    authorId: 'user13b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20241223_224%2F1734912033161KjYNM_JPEG%2F52613223036597881_723821792.jpg&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20241223_224%2F1734912033161KjYNM_JPEG%2F52613223036597881_723821792.jpg&type=sc960_832'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 94,
    helpfulVotes: 79,
    notHelpfulVotes: 5,
    verifiedPurchase: true,
    purchaseDate: '2025-02-04',
    usagePeriod: '1개월',
    pros: ['부드러운 갈림', '가벼운 재질', '탄내 없음'],
    cons: ['무게감 있음'],
    tags: ['미니가전'],
    isSponsored: false,
    views: 6103,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '14b',
    title: '소음은 아쉽지만 갈림과 세척은 만족스러운 블렌더',
    content: `소음이 커서 별하나 뺐어요.
받아서 사과랑 양배추 갈았는데 곱게 잘 갈립니다.
갈리는 정도를 다이얼로 편하게 조절할수 있어서 좋았고, 세척할때 칼날 분리되서 편했어요.
다만 칼날은 정말 날카로우니 조심해야 합니다.
믹스컵도 유리가 아니어서 가볍고 좋습니다.` ,


    author: '바람결27',
    authorId: 'user14b',
    category: '가전제품',
    rating: 4,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MTNfMjY0%2FMDAxNzIzNTU2NjcxMTQ1.BiBR6YUQXqA4nyN1c7sJ4T1ixbTh4v_LoRVEJ8cxuBkg.uIo7wYQMIMPX7Nz4OqTwA8GCGbHu62EAwJIWirMfe_kg.JPEG%2F23.jpg&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MTNfMjY0%2FMDAxNzIzNTU2NjcxMTQ1.BiBR6YUQXqA4nyN1c7sJ4T1ixbTh4v_LoRVEJ8cxuBkg.uIo7wYQMIMPX7Nz4OqTwA8GCGbHu62EAwJIWirMfe_kg.JPEG%2F23.jpg&type=sc960_832'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 84,
    helpfulVotes: 55,
    notHelpfulVotes: 9,
    verifiedPurchase: true,
    purchaseDate: '2024-03-29',
    usagePeriod: '1개월',
    pros: ['갈림 좋음', '세척 쉽고 칼날 분리 가능'],
    cons: ['소음 큼'],
    tags: ['미니가전'],
    isSponsored: false,
    views: 4372,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '15b',
    title: '얼음도 잘 갈리는 실사용 만족 블렌더 후기',
    content: `남편이 얼음 잘갈리는 믹서기 사준다고 해서(본인이 먹을 스무디용) 검색하다가 
    크긴한데 믹서기가 원래 그런 기계니까요 ㅎㅎ얼음도 잘 갈리고 금방 갈려서 만족해요 ^^` ,


    author: '따뜻한손길',
    authorId: 'user15b',
    category: '가전제품',
    rating: 4,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MjBfMjky%2FMDAxNzE4ODgwMTU1NTg2.fuDTXET7GfTl8aHeLnQAqLUJxmBwWHRQTUL0SmYj1wsg.hx5y58zVaWc2QB0sEhmkkqVzpz0L8uj0yKzpywya-0og.JPEG%2FMEITU%25A3%25DF20240620%25A3%25DF171231659.jpg&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MjBfMjky%2FMDAxNzE4ODgwMTU1NTg2.fuDTXET7GfTl8aHeLnQAqLUJxmBwWHRQTUL0SmYj1wsg.hx5y58zVaWc2QB0sEhmkkqVzpz0L8uj0yKzpywya-0og.JPEG%2FMEITU%25A3%25DF20240620%25A3%25DF171231659.jpg&type=sc960_832'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 91,
    helpfulVotes: 64,
    notHelpfulVotes: 8,
    verifiedPurchase: true,
    purchaseDate: '2024-08-24',
    usagePeriod: '3개월',
    pros: ['얼음 잘 갈림', '빠른 작동'],
    cons: ['무게감 있음'],
    tags: ['미니가전'],
    isSponsored: false,
    views: 5290,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '16b',
    title: '소음·타는 냄새는 아쉽지만 성능은 더 사용해봐야 알 듯한 제품',
    content: `소음이 엄청나네요. 타는 냄새도 나고… 성능은 좀 더 사용해봐야 알 듯합니다.

` ,


    author: '구름사이',
    authorId: 'user16b',
    category: '가전제품',
    rating: 4,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 65,
    helpfulVotes: 22,
    notHelpfulVotes: 38,
    verifiedPurchase: true,
    purchaseDate: '2025-08-19',
    usagePeriod: '1개월',
    pros: ['기본 성능 나쁘지 않음'],
    cons: ['소음 큼', '타는 냄새'],
    tags: ['미니가전', '소음이슈'],
    isSponsored: false,
    views: 3551,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '17b',
    title: '생각보다 큰 크기와 과한 포장이 아쉬운 블렌더 후기',
    content: `생각보다 크고 자리차지는 많이하겠어요. 제발 부디 고장 안나길...
    포장이 너무 과해요. 환경도 생각해야하는데 이부분은 수정되었으면좋겠네요. ㅜ.ㅜ` ,


    author: '순한향기',
    authorId: 'user17b',
    category: '가전제품',
    rating: 3,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 75,
    helpfulVotes: 14,
    notHelpfulVotes: 28,
    verifiedPurchase: true,
    purchaseDate: '2025-11-16',
    usagePeriod: '1개월',
    pros: ['성능 괜찮음'],
    cons: ['크기 큼', '포장 과함'],
    tags: ['미니가전', '환경이슈'],
    isSponsored: false,
    views: 4029,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '18b',
    title: '작동 안 된 줄 알았던 블렌더… 알고 보니 조작 문제였던 후기',
    content: `엄마가 믹서기 필요하다고 해서 대신 인터넷 주문해서 보냈는데 배송받아서 
    해보니 믹서기가 안된다고 연락이 왔는데 내가 원인을 모르겠어서 다시 우리집으로 보내라고 해서 
    받아서 확인해보니 본체와 플라스틱 통 연결이 제대로 안되면 믹서기가 작동하지 않는거였다. 
    다행히 조작 미숙이고 제품은 정상적인 거라 그냥 내가 사용하기로 하고 엄마는 다른 제품으로 하나 사드리게되었음.` ,


    author: '봄소리212',
    authorId: 'user18b',
    category: '가전제품',
    rating: 3,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 63,
    helpfulVotes: 25,
    notHelpfulVotes: 23,
    verifiedPurchase: true,
    purchaseDate: '2025-09-23',
    usagePeriod: '1개월',
    pros: ['제품 자체는 정상 작동'],
    cons: ['초기 혼란', '사용 난이도 있음'],
    tags: ['미니가전'],
    isSponsored: false,
    views: 7844,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '19b',
    title: '가볍지만 소음이 큰 편인 블렌더 사용 후기',
    content: `가벼워서 좋긴하나 소리가 커요` ,


    author: '초코휘핑',
    authorId: 'user19b',
    category: '가전제품',
    rating: 3,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 55,
    helpfulVotes: 12,
    notHelpfulVotes: 36,
    verifiedPurchase: true,
    purchaseDate: '2025-03-18',
    usagePeriod: '2주',
    pros: ['가벼운 본체'],
    cons: ['소음 큼'],
    tags: ['미니가전', '소음이슈'],
    isSponsored: false,
    views: 5781,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '20b',
    title: '가격 대비 최고 가성비! 잘 갈리고 사용 편한 블렌더',
    content: `너무 쓰기편하고 잘 갈려요. 가격도 괜찮은 편이라 최고의 가성비 상품인듯 하네요` ,


    author: '맑은하늘',
    authorId: 'user20b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 93,
    helpfulVotes: 83,
    notHelpfulVotes: 6,
    verifiedPurchase: true,
    purchaseDate: '2025-04-16',
    usagePeriod: '3개월',
    pros: ['가성비 뛰어남', '부드러운 갈림', '사용 편함'],
    cons: ['무게감 있음'],
    tags: ['미니가전', '가성비'],
    isSponsored: false,
    views: 6220,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '21b',
    title: '큰 사이즈지만 성능 만족, 고장난 믹서기 대체로 구매한 후기',
    content: `집에 믹서기가 고장나서 구입하였습니다
생각보다 큰사이즈라서 놀라구요
좋은것 같습니다. 봄에 과일이 나오면 갈아 먹어야 겠습니다 배송도 빠르고 좋아요` ,


    author: '겨울산책07',
    authorId: 'user21b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MTNfMjY0%2FMDAxNzIzNTU2NjcxMTQ1.BiBR6YUQXqA4nyN1c7sJ4T1ixbTh4v_LoRVEJ8cxuBkg.uIo7wYQMIMPX7Nz4OqTwA8GCGbHu62EAwJIWirMfe_kg.JPEG%2F23.jpg&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MTNfMjY0%2FMDAxNzIzNTU2NjcxMTQ1.BiBR6YUQXqA4nyN1c7sJ4T1ixbTh4v_LoRVEJ8cxuBkg.uIo7wYQMIMPX7Nz4OqTwA8GCGbHu62EAwJIWirMfe_kg.JPEG%2F23.jpg&type=sc960_832'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 92,
    helpfulVotes: 99,
    notHelpfulVotes: 6,
    verifiedPurchase: true,
    purchaseDate: '2024-02-17',
    usagePeriod: '3개월',
    pros: ['성능 좋음', '빠른 배송'],
    cons: ['사이즈 큼'],
    tags: ['미니가전'],
    isSponsored: false,
    views: 5634,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '22b',
    title: '가벼운 비유리 용기 만족',
    content: `비유리재질 용기는 처음 써보는데 가벼워서 좋네요. 믹싱성능도 만족스럽습니다.` ,


    author: '달빛오솔길44',
    authorId: 'user22b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 81,
    helpfulVotes: 66,
    notHelpfulVotes: 12,
    verifiedPurchase: true,
    purchaseDate: '2024-06-19',
    usagePeriod: '1개월',
    pros: ['가벼운 용기', '믹싱 성능 괜찮음'],
    cons: ['무난함'],
    tags: ['미니가전'],
    isSponsored: false,
    views: 3321,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '23b',
    title: '가볍고 디자인 예쁘며 잘 갈리는 만족 후기',
    content: `잘받았습니다.
가볍고. 디자인도 예뻐요~
당연 소음은 있지만 잘갈려요~~~~^^` ,


    author: '민트바질',
    authorId: 'user23b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 94,
    helpfulVotes: 83,
    notHelpfulVotes: 5,
    verifiedPurchase: true,
    purchaseDate: '2024-01-09',
    usagePeriod: '6개월',
    pros: ['디자인 예쁨', '잘 갈림', '가벼움'],
    cons: ['소음 있음'],
    tags: ['미니가전'],
    isSponsored: false,
    views: 7023,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '24b',
    title: '칼날 벗겨짐 문제로 제대로 사용 못한 아쉬운 블렌더 경험',
    content: `교환받았는데 과일에 물만갈아도
칼날이 다벗겨짐
뭐가 문제인건지 한달이 넘도록 사용도 못함` ,


    author: '설레임가득',
    authorId: 'user24b',
    category: '가전제품',
    rating: 2,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 42,
    helpfulVotes: 17,
    notHelpfulVotes: 48,
    verifiedPurchase: true,
    purchaseDate: '2024-09-09',
    usagePeriod: '1개월',
    pros: [],
    cons: ['칼날 벗겨짐', '사용 불가 문제'],
    tags: ['미니가전', '품질이슈'],
    isSponsored: false,
    views: 6112,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '25b',
    title: '급히 구매했지만 만족스러운 기본 기능 중심의 블렌더 선택',
    content: `믹서기를 빛더중 네이버의 강새일 1시간전에 구매 했네요. 취소후 재구매하여 했는데 물류센터가 얼마나 빠르던지 취소가 안된다고 해서 무료 반품인데도 그냥 사용하기로 했습니다.
믹서기에 대한 지식이 없어서 네이버 추천으로 만 테팔 믹서기를 선택했고 여러 모델이 있었지만 기본 기능에 충식하면 된다는 생각에 이 모델을 구매했습니다.

` ,


    author: '수국향12',
    authorId: 'user25b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 94,
    helpfulVotes: 118,
    notHelpfulVotes: 5,
    verifiedPurchase: true,
    purchaseDate: '2025-07-09',
    usagePeriod: '4개월',
    pros: ['기본 기능 충실', '빠른 배송'],
    cons: ['초기 주문 혼선'],
    tags: ['미니가전'],
    isSponsored: false,
    views: 7390,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '26b',
    title: '너무 잘 갈려서 만족, 이제야 산 게 아쉬울 정도의 성능',
    content: `너무 잘갈리고 잘쓰고있습니다. 최고에요 대만족 왜이제샀나 하고있습니다 최고!!

` ,


    author: '햇살웃음',
    authorId: 'user26b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MjNfODAg%2FMDAxNzE5MTIwMjgzNDY2.rOQ6sC6D-EAyr1T1A37Cvid995wDWHT0opDOzr8x1v4g.XWowNEmkXm1cof84ymskL3edw65RFKRRXKSUmYblThsg.JPEG%2FDSC03646.JPG&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MjNfODAg%2FMDAxNzE5MTIwMjgzNDY2.rOQ6sC6D-EAyr1T1A37Cvid995wDWHT0opDOzr8x1v4g.XWowNEmkXm1cof84ymskL3edw65RFKRRXKSUmYblThsg.JPEG%2FDSC03646.JPG&type=sc960_832'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 93,
    helpfulVotes: 88,
    notHelpfulVotes: 4,
    verifiedPurchase: true,
    purchaseDate: '2025-02-09',
    usagePeriod: '1개월',
    pros: ['강력한 성능', '높은 만족도'],
    cons: ['무게감 있음'],
    tags: ['미니가전'],
    isSponsored: false,
    views: 5801,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '27b',
    title: '아침 스무디용으로 최고의 선택! 한 달 사용 후 대만족',
    content: `아침마다 단백질 파우더에 얼린 블루베리와 바나나를 함께 갈아먹는데 제일
     낮은 속도로 해도 너무 잘 갈려요~ 사용한지 한달 정도 됐는데 너무 만족스러워요. 매일 사진 찍어야지 하면서 항상 설거지통에 있네요.ㅎ

` ,


    author: '초록안개',
    authorId: 'user27b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20241223_224%2F1734912033161KjYNM_JPEG%2F52613223036597881_723821792.jpg&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20241223_224%2F1734912033161KjYNM_JPEG%2F52613223036597881_723821792.jpg&type=sc960_832'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 88,
    helpfulVotes: 99,
    notHelpfulVotes: 10,
    verifiedPurchase: true,
    purchaseDate: '2024-09-23',
    usagePeriod: '2개월',
    pros: ['스무디 잘 갈림', '아침 루틴에 적합'],
    cons: ['세척 시 사진 찍기 어려움'],
    tags: ['미니가전', '스무디'],
    isSponsored: false,
    views: 5832,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '28b',
    title: '사용 편하고 잘 갈리는 최고의 가성비 블렌더',
    content: `너무 쓰기편하고 잘 갈려요. 가격도 괜찮은 편이라 최고의 가성비 상품인듯 하네요

` ,


    author: '고운빛21',
    authorId: 'user28b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 82,
    helpfulVotes: 60,
    notHelpfulVotes: 11,
    verifiedPurchase: true,
    purchaseDate: '2025-04-19',
    usagePeriod: '1개월',
    pros: ['가성비 좋음', '잘 갈림'],
    cons: ['무게감 있음'],
    tags: ['미니가전', '가성비'],
    isSponsored: false,
    views: 5179,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '29b',
    title: '10년 만에 바꿨는데 크게 만족한 부드러운 갈림 성능',
    content: `10년 가까이 쓰던 믹서기 버리고 바꾼 건데 너무 좋네요~시끄럽단 후기도 있던데 
    저는 부드럽고 조용하게 잘 갈린다고 생각 들던데요? 아직 스무디 같은 건 안해봤는데 그것도 잘 됐음 해요~사용하다가 한달후기 또 적을게요.

` ,


    author: '달하루91',
    authorId: 'user29b',
    category: '가전제품',
    rating: 5,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640',
    images: ['https://shopping-phinf.pstatic.net/main_5307287/53072879277.20250218123339.jpg?type=f640'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 95,
    helpfulVotes: 102,
    notHelpfulVotes: 6,
    verifiedPurchase: true,
    purchaseDate: '2025-09-30',
    usagePeriod: '2개월',
    pros: ['부드러운 갈림', '10년 만의 업그레이드 만족'],
    cons: [],
    tags: ['미니가전'],
    isSponsored: false,
    views: 6933,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  {
    _id: '30b',
    title: '소음은 있지만 갈림은 훌륭한 블렌더 사용 후기',
    content: `소음은 있지만 잘 갈리네요 ^^` ,


    author: '장미한송이',
    authorId: 'user30b',
    category: '가전제품',
    rating: 4,
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    productBrand: '테팔',
    imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MjBfMjky%2FMDAxNzE4ODgwMTU1NTg2.fuDTXET7GfTl8aHeLnQAqLUJxmBwWHRQTUL0SmYj1wsg.hx5y58zVaWc2QB0sEhmkkqVzpz0L8uj0yKzpywya-0og.JPEG%2FMEITU%25A3%25DF20240620%25A3%25DF171231659.jpg&type=sc960_832',
    images: ['https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MjBfMjky%2FMDAxNzE4ODgwMTU1NTg2.fuDTXET7GfTl8aHeLnQAqLUJxmBwWHRQTUL0SmYj1wsg.hx5y58zVaWc2QB0sEhmkkqVzpz0L8uj0yKzpywya-0og.JPEG%2FMEITU%25A3%25DF20240620%25A3%25DF171231659.jpg&type=sc960_832'],
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 80,
    helpfulVotes: 56,
    notHelpfulVotes: 12,
    verifiedPurchase: true,
    purchaseDate: '2024-08-25',
    usagePeriod: '1개월',
    pros: ['잘 갈림'],
    cons: ['소음 있음'],
    tags: ['미니가전'],
    isSponsored: false,
    views: 4521,
    sourcePlatform :'Naver',
    originalUrl : 'https://search.shopping.naver.com/catalog/53072879277?query=%EB%AF%B9%EC%84%9C%EA%B8%B0&NaPm=ct%3Dmipbi3qw%7Cci%3D381414341148e911d5218aaec644c87893484bce%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D968714613c2d042ba490af26c3db186ff0c77ee2',
  },
  
  // --------------------------------------------------------------------------
  // [신규 추가] 전자기기 (Electronics)
  // --------------------------------------------------------------------------
  {
    _id: 'elec_1',
    title: '노이즈 캔슬링의 신세계, 출퇴근 필수템',
    content: `지하철 소음 때문에 스트레스 받다가 큰맘 먹고 구매했습니다. 
    착용하자마자 세상과 단절되는 느낌... 너무 좋네요. 
    음질은 소니답게 베이스가 탄탄하고, 전작보다 디자인이 슬림해져서 요다 현상도 덜해요.
    다만 여름에 오래 끼고 있으면 귀에 땀이 좀 차는 건 어쩔 수 없네요 ㅠㅠ
    배터리는 진짜 오래갑니다. 일주일에 한 번 충전해요.`,
    author: '음향기기덕후',
    authorId: 'user_elec_1',
    category: '전자기기',
    rating: 5,
    productName: '소니 WH-1000XM5 노이즈 캔슬링 헤드폰',
    productBrand: 'SONY',
    imageUrl: 'https://shopping-phinf.pstatic.net/main_3333333/3333333.jpg', // Placeholder
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 96,
    helpfulVotes: 156,
    notHelpfulVotes: 2,
    verifiedPurchase: true,
    purchaseDate: '2025-01-15',
    usagePeriod: '3개월',
    pros: ['압도적 노이즈캔슬링', '가벼운 무게', '오래가는 배터리'],
    cons: ['여름엔 더움', '가격이 비쌈'],
    tags: ['노이즈캔슬링', '헤드폰', '출퇴근용', '소니'],
    isSponsored: false,
    views: 8500,
    sourcePlatform: 'ReviewTrust'
  },
  {
    _id: 'elec_2',
    title: '가성비 태블릿 끝판왕, 영상 머신으로 딱',
    content: `아이패드까지는 필요 없고 넷플릭스랑 유튜브 머신이 필요해서 샀습니다.
    화면 쨍하고 스피커 4개라 소리 빵빵하고 좋네요.
    게임은 고사양은 좀 버벅이는데 캐주얼 게임은 잘 돌아갑니다.
    가장 좋은 건 배터리.. 진짜 안 닳아요.
    저렴한 가격에 막 굴리기 좋은 태블릿 찾으시면 강추합니다.`,
    author: '넷플릭스중독',
    authorId: 'user_elec_2',
    category: '전자기기',
    rating: 4,
    productName: '레노버 P12 태블릿',
    productBrand: 'Lenovo',
    imageUrl: 'https://shopping-phinf.pstatic.net/main_3333333/3333333.jpg', // Placeholder
    created_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 88,
    helpfulVotes: 45,
    notHelpfulVotes: 1,
    verifiedPurchase: true,
    purchaseDate: '2024-12-20',
    usagePeriod: '6개월',
    pros: ['미친 가성비', '디스플레이 품질', '쿼드 스피커'],
    cons: ['충전 속도 느림', '고사양 게임 불가'],
    tags: ['가성비태블릿', '영상시청용', '레노버'],
    isSponsored: false,
    views: 3200,
    sourcePlatform: 'ReviewTrust'
  },

  // --------------------------------------------------------------------------
  // [신규 추가] 패션/뷰티 (Fashion/Beauty)
  // --------------------------------------------------------------------------
  {
    _id: 'beauty_1',
    title: '속건조 잡는 인생 수분크림 발견',
    content: `환절기만 되면 피부 뒤집어지는 수부지 피부입니다.
    유명하다는 거 다 써봤는데 이게 찐이네요.
    바를 땐 가벼운 것 같은데 흡수되고 나면 속이 꽉 채워지는 느낌?
    아침에 화장도 안 밀리고 저녁까지 건조함이 없어요.
    무향이라 호불호도 없을 것 같고 튜브형이라 위생적입니다.
    대용량 나오면 무조건 삽니다.`,
    author: '코덕10년차',
    authorId: 'user_beauty_1',
    category: '패션/뷰티',
    rating: 5,
    productName: '일리윤 세라마이드 아토 집중 크림',
    productBrand: '일리윤',
    imageUrl: 'https://shopping-phinf.pstatic.net/main_4444444/4444444.jpg',
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 93,
    helpfulVotes: 89,
    notHelpfulVotes: 0,
    verifiedPurchase: true,
    purchaseDate: '2025-02-10',
    usagePeriod: '1개월',
    pros: ['속보습 탁월', '순한 성분', '가성비'],
    cons: ['튜브 끝까지 짜쓰기 힘들다'],
    tags: ['수분크림', '민감성피부', '보습템', '올리브영추천'],
    isSponsored: false,
    views: 5600,
    sourcePlatform: 'ReviewTrust'
  },
  {
    _id: 'fashion_1',
    title: '러닝 입문용으로 샀는데 발이 너무 편해요',
    content: `요즘 러닝 붐이라 시작했는데 무릎이 좀 아파서 신발 바꿨어요.
    쿠션이 너무 푹신하지도 딱딱하지도 않고 딱 잡아주는 느낌?
    확실히 뛰고 나서 발바닥 피로도가 덜하네요.
    사이즈는 반업 하시는 걸 추천드립니다. 발볼이 좀 좁게 나왔어요.
    디자인도 깔끔해서 평소에 신고 다녀도 이쁩니다.`,
    author: '달려라하니',
    authorId: 'user_fashion_1',
    category: '패션/뷰티',
    rating: 5,
    productName: '나이키 에어 줌 페가수스 40',
    productBrand: 'NIKE',
    imageUrl: 'https://shopping-phinf.pstatic.net/main_5555555/5555555.jpg',
    created_at: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 90,
    helpfulVotes: 67,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2024-11-11',
    usagePeriod: '4개월',
    pros: ['적당한 쿠셔닝', '발목 지지력', '통기성'],
    cons: ['발볼이 좁음'],
    tags: ['러닝화', '운동화', '나이키', '입문용'],
    isSponsored: false,
    views: 4100,
    sourcePlatform: 'ReviewTrust'
  },

  // --------------------------------------------------------------------------
  // [신규 추가] 식품/음료 (Food/Beverage)
  // --------------------------------------------------------------------------
  {
    _id: 'food_1',
    title: '비린내 없는 초코맛 프로틴 쉐이크',
    content: `운동하고 단백질 챙겨 먹어야 하는데 특유의 비린맛 때문에 못 먹던 1인입니다.
    이건 진짜 그냥 진한 초코우유 맛이에요 ㅋㅋ
    물에 타먹어도 맛있고 우유에 타먹으면 그냥 속세의 맛..
    당류도 낮아서 다이어트할 때 죄책감 없이 먹기 좋습니다.
    가루 뭉침도 거의 없고 찬물에도 잘 녹아요.
    가격이 조금만 더 착했으면 좋겠지만 맛 때문에 계속 재구매할 듯.`,
    author: '헬스초보',
    authorId: 'user_food_1',
    category: '식품/음료',
    rating: 5,
    productName: '마이프로틴 임팩트 웨이 아이솔레이트 초콜릿',
    productBrand: 'MyProtein',
    imageUrl: 'https://shopping-phinf.pstatic.net/main_6666666/6666666.jpg',
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 89,
    helpfulVotes: 112,
    notHelpfulVotes: 5,
    verifiedPurchase: true,
    purchaseDate: '2025-03-01',
    usagePeriod: '2주',
    pros: ['맛있음', '풀림 좋음', '성분 좋음'],
    cons: ['배송이 느림(직구)'],
    tags: ['단백질쉐이크', '다이어트', '운동식단'],
    isSponsored: false,
    views: 7200,
    sourcePlatform: 'ReviewTrust'
  },
  {
    _id: 'food_2',
    title: '간편하게 먹기 좋은 닭가슴살 큐브',
    content: `매번 삶아 먹기 귀찮아서 주문해봤습니다.
    큐브 형태라 한입에 먹기 편하고 소스가 다양해서 질리지 않아요.
    특히 청양마요 맛이 진짜 맛있습니다.
    전자레인지 1분 30초면 끝나니까 도시락 싸기도 편하구요.
    다만 양이 좀 적은 느낌이라 한 끼에 두 팩은 먹어야 배가 찹니다.`,
    author: '식단관리중',
    authorId: 'user_food_2',
    category: '식품/음료',
    rating: 4,
    productName: '맛있닭 닭가슴살 큐브 10종',
    productBrand: '랭킹닭컴',
    imageUrl: 'https://shopping-phinf.pstatic.net/main_7777777/7777777.jpg',
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 82,
    helpfulVotes: 34,
    notHelpfulVotes: 2,
    verifiedPurchase: true,
    purchaseDate: '2025-02-15',
    usagePeriod: '1개월',
    pros: ['간편함', '다양한 맛', '부드러운 식감'],
    cons: ['양이 적음', '소스 때문에 나트륨 걱정'],
    tags: ['닭가슴살', '간편식', '직장인도시락'],
    isSponsored: false,
    views: 2800,
    sourcePlatform: 'ReviewTrust'
  },

  // --------------------------------------------------------------------------
  // [신규 추가] 도서/문구 (Books/Stationery)
  // --------------------------------------------------------------------------
  {
    _id: 'book_1',
    title: '새해 목표 세우기에 최고의 책',
    content: `매년 작심삼일로 끝나는 계획 때문에 고민하다가 읽게 되었습니다.
    '아주 작은 습관의 힘'이라는 제목처럼 거창한 목표보다는
    시스템을 만드는 게 중요하다는 내용이 와닿았어요.
    실천하기 쉬운 방법들을 구체적으로 알려줘서 바로 적용해보고 있습니다.
    삶의 변화를 원하시는 분들께 강력 추천합니다. 
    번역도 매끄럽고 술술 읽힙니다.`,
    author: '독서광',
    authorId: 'user_book_1',
    category: '도서/문구',
    rating: 5,
    productName: '아주 작은 습관의 힘',
    productBrand: '비즈니스북스',
    imageUrl: 'https://shopping-phinf.pstatic.net/main_8888888/8888888.jpg',
    created_at: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 95,
    helpfulVotes: 201,
    notHelpfulVotes: 1,
    verifiedPurchase: true,
    purchaseDate: '2025-01-02',
    usagePeriod: '완독',
    pros: ['실용적인 조언', '동기부여', '가독성 좋음'],
    cons: [],
    tags: ['자기계발', '베스트셀러', '습관형성'],
    isSponsored: false,
    views: 9100,
    sourcePlatform: 'ReviewTrust'
  },
  {
    _id: 'stationery_1',
    title: '아이패드 종이질감 필름 중 최고',
    content: `그림 그리는 용도로 아이패드 쓰는데 생패드는 너무 미끄러워서 샀어요.
    진짜 사각사각거리는 느낌이 종이에 그리는 것 같아요.
    화질 저하가 심하다는 평이 있어서 걱정했는데 생각보다 괜찮습니다.
    다만 펜촉이 좀 빨리 닳는 느낌은 있네요.
    붙이는 가이드툴이 같이 와서 똥손인데도 기포 없이 잘 붙였습니다.`,
    author: '그림쟁이',
    authorId: 'user_stationery_1',
    category: '도서/문구',
    rating: 4,
    productName: '종이질감 액정보호필름',
    productBrand: '뷰에스피',
    imageUrl: 'https://shopping-phinf.pstatic.net/main_9999999/9999999.jpg',
    created_at: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 85,
    helpfulVotes: 42,
    notHelpfulVotes: 3,
    verifiedPurchase: true,
    purchaseDate: '2025-03-10',
    usagePeriod: '1주',
    pros: ['필기감 우수', '빛반사 방지', '부착 쉬움'],
    cons: ['펜촉 마모', '약간의 화질 저하'],
    tags: ['아이패드필름', '종이질감', '드로잉'],
    isSponsored: false,
    views: 3400,
    sourcePlatform: 'ReviewTrust'
  },

  // --------------------------------------------------------------------------
  // [신규 추가] 생활용품 (Daily Necessities)
  // --------------------------------------------------------------------------
  {
    _id: 'daily_1',
    title: '수건만 바꿔도 삶의 질이 올라가네요',
    content: `집에 있는 수건이 너무 얇고 냄새나서 호텔 수건으로 싹 바꿨습니다.
    40수 코마사라 그런지 진짜 도톰하고 부드러워요.
    물기 흡수도 한 번에 싹 되고 먼지도 별로 안 나네요.
    처음에 세탁법대로 단독 세탁하고 나니까 더 뽀송해졌어요.
    색상도 고급스러운 그레이라 욕실 분위기가 달라졌습니다.`,
    author: '살림고수',
    authorId: 'user_daily_1',
    category: '생활용품',
    rating: 5,
    productName: '호텔 컬렉션 40수 코마사 수건',
    productBrand: '송월타월',
    imageUrl: 'https://shopping-phinf.pstatic.net/main_1010101/1010101.jpg',
    created_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 91,
    helpfulVotes: 76,
    notHelpfulVotes: 0,
    verifiedPurchase: true,
    purchaseDate: '2025-02-28',
    usagePeriod: '2주',
    pros: ['흡수력 좋음', '부드러움', '먼지 없음'],
    cons: ['건조 시간이 좀 걸림'],
    tags: ['수건', '호텔수건', '욕실용품'],
    isSponsored: false,
    views: 4500,
    sourcePlatform: 'ReviewTrust'
  },
  {
    _id: 'daily_2',
    title: '향이 너무 좋은 섬유유연제',
    content: `실내 건조를 주로 해서 꿉꿉한 냄새가 싫어 구매했습니다.
    일단 향이 너무 강하지 않고 은은해서 머리가 안 아파요.
    지속력도 꽤 좋아서 옷 입을 때마다 기분이 좋습니다.
    고농축이라 조금만 써도 돼서 경제적이네요.
    배송 중에 하나가 좀 샜는데 교환 처리 빨리 해주셔서 좋았습니다.`,
    author: '향기솔솔',
    authorId: 'user_daily_2',
    category: '생활용품',
    rating: 4,
    productName: '다우니 실내건조 섬유유연제',
    productBrand: '다우니',
    imageUrl: 'https://shopping-phinf.pstatic.net/main_1212121/1212121.jpg',
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    trustScore: 84,
    helpfulVotes: 28,
    notHelpfulVotes: 1,
    verifiedPurchase: true,
    purchaseDate: '2025-03-12',
    usagePeriod: '3일',
    pros: ['탈취 효과', '은은한 향', '고농축'],
    cons: ['배송 포장 미흡'],
    tags: ['섬유유연제', '빨래', '실내건조'],
    isSponsored: false,
    views: 2900,
    sourcePlatform: 'ReviewTrust'
  }
];

export const mockTopReviewers: TopReviewer[] = [
  {
    _id: 'reviewer1',
    nickname: '주스좋아92',            // author of _id: 1
    trustScore: 92,
    reviewCount: 14,
    rewardPoints: 5200,
    totalHelpfulVotes: 310,
    memberSince: '2022-11-03',
    badges: ['주방가전 애호가', '신뢰받는 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer2',
    nickname: '아침루틴장인',          // author of _id: 2
    trustScore: 86,
    reviewCount: 9,
    rewardPoints: 3100,
    totalHelpfulVotes: 274,
    memberSince: '2023-03-18',
    badges: ['아침루틴 전문가'],
    profileImage: undefined
  },
  {
    _id: 'reviewer3',
    nickname: '블루데님덕후',          // author of _id: 3
    trustScore: 80,
    reviewCount: 5,
    rewardPoints: 1700,
    totalHelpfulVotes: 96,
    memberSince: '2023-10-05',
    badges: ['가전 첫리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer4',
    nickname: '고요한아침5',          // author of _id: 4
    trustScore: 95,
    reviewCount: 21,
    rewardPoints: 7800,
    totalHelpfulVotes: 612,
    memberSince: '2021-12-20',
    badges: ['건강관리 고수', '신뢰받는 리뷰어', '주방가전 마스터'],
    profileImage: undefined
  },
  {
    _id: 'reviewer5',
    nickname: '세척간편러77',          // author of _id: 5
    trustScore: 94,
    reviewCount: 17,
    rewardPoints: 6400,
    totalHelpfulVotes: 455,
    memberSince: '2022-06-14',
    badges: ['세척 꿀팁 제공자', '신뢰받는 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer6',
    nickname: '싱글홈쿠커',            // author of _id: 6
    trustScore: 65,
    reviewCount: 5,
    rewardPoints: 300,
    totalHelpfulVotes: 39,
    memberSince: '2023-05-27',
    badges: ['1인가구 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer7',
    nickname: '혼밥의기술',            // author of _id: 7
    trustScore: 90,
    reviewCount: 13,
    rewardPoints: 4700,
    totalHelpfulVotes: 332,
    memberSince: '2022-09-01',
    badges: ['랜선요리사', '실사용 꿀팁 제공자'],
    profileImage: undefined
  },
  {
    _id: 'reviewer8',
    nickname: '원룸살림꾼',            // author of _id: 8
    trustScore: 93,
    reviewCount: 15,
    rewardPoints: 5600,
    totalHelpfulVotes: 389,
    memberSince: '2022-08-10',
    badges: ['1인가구 전문가', '주방 정리 장인'],
    profileImage: undefined
  },
  {
    _id: 'reviewer9',
    nickname: '주방귀염둥이',          // author of _id: 9
    trustScore: 91,
    reviewCount: 11,
    rewardPoints: 4100,
    totalHelpfulVotes: 261,
    memberSince: '2023-01-29',
    badges: ['예쁜가전 수집가'],
    profileImage: undefined
  },
  {
    _id: 'reviewer10',
    nickname: '간편주스러버',          // author of _id: 10
    trustScore: 90,
    reviewCount: 10,
    rewardPoints: 3600,
    totalHelpfulVotes: 219,
    memberSince: '2023-04-02',
    badges: ['간편 조작 선호러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer11',
    nickname: '야외활동매니아',
    trustScore: 96,
    reviewCount: 27,
    rewardPoints: 8200,
    totalHelpfulVotes: 128,
    memberSince: '2022-08-10',
    badges: ['휴대가전 애호가', '야외사용 전문가'],
    profileImage: undefined
  },
  {
    _id: 'reviewer12',
    nickname: '운동중독인간',
    trustScore: 95,
    reviewCount: 31,
    rewardPoints: 9100,
    totalHelpfulVotes: 118,
    memberSince: '2021-11-04',
    badges: ['헬스가전 전문가', '신뢰받는 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer13',
    nickname: '주말요리스타',
    trustScore: 81,
    reviewCount: 12,
    rewardPoints: 3600,
    totalHelpfulVotes: 55,
    memberSince: '2023-02-19',
    badges: ['야간사용 전문러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer14',
    nickname: '주방효율러',
    trustScore: 90,
    reviewCount: 20,
    rewardPoints: 6200,
    totalHelpfulVotes: 92,
    memberSince: '2022-04-22',
    badges: ['주방가전 최적화러', '저소음가전 애호가'],
    profileImage: undefined
  },
  {
    _id: 'reviewer15',
    nickname: '간편요리의신',
    trustScore: 90,
    reviewCount: 17,
    rewardPoints: 5700,
    totalHelpfulVotes: 84,
    memberSince: '2023-07-03',
    badges: ['간편가전 마스터'],
    profileImage: undefined
  },
  {
    _id: 'reviewer16',
    nickname: '감성가전수집가',
    trustScore: 94,
    reviewCount: 24,
    rewardPoints: 8800,
    totalHelpfulVotes: 99,
    memberSince: '2022-02-12',
    badges: ['감성가전 전문러', '디자인리뷰러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer17',
    nickname: '첫블렌더성공기',
    trustScore: 93,
    reviewCount: 15,
    rewardPoints: 5400,
    totalHelpfulVotes: 112,
    memberSince: '2023-06-05',
    badges: ['초보자리뷰 전문가', '캠핑용가전 사용자'],
    profileImage: undefined
  },
  {
    _id: 'reviewer18',
    nickname: '아침스무디러버',
    trustScore: 97,
    reviewCount: 29,
    rewardPoints: 9600,
    totalHelpfulVotes: 145,
    memberSince: '2023-03-18',
    badges: ['아침루틴 전문가', '스무디 장인'],
    profileImage: undefined
  },
  {
    _id: 'reviewer19',
    nickname: '케일러버',
    trustScore: 88,
    reviewCount: 14,
    rewardPoints: 4700,
    totalHelpfulVotes: 71,
    memberSince: '2024-09-09',
    badges: ['그린스무디 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer20',
    nickname: '육아파워맘',
    trustScore: 99,
    reviewCount: 33,
    rewardPoints: 11000,
    totalHelpfulVotes: 138,
    memberSince: '2023-12-04',
    badges: ['육아템 전문가', '이유식 마스터'],
    profileImage: undefined
  },

  {
    _id: 'reviewer21',
    nickname: '출근전한잔러',
    trustScore: 92,
    reviewCount: 18,
    rewardPoints: 5400,
    totalHelpfulVotes: 87,
    memberSince: '2023-01-14',
    badges: ['아침루틴 사용자', '실사용 리뷰러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer22',
    nickname: '라방구매러92',
    trustScore: 78,
    reviewCount: 9,
    rewardPoints: 2600,
    totalHelpfulVotes: 64,
    memberSince: '2024-10-09',
    badges: ['라방충동구매러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer23',
    nickname: '2인가구스무디러버',
    trustScore: 95,
    reviewCount: 25,
    rewardPoints: 8200,
    totalHelpfulVotes: 124,
    memberSince: '2022-06-03',
    badges: ['2인가구 전문가', '스무디 장인'],
    profileImage: undefined
  },
  {
    _id: 'reviewer24',
    nickname: '정품중시하는사람',
    trustScore: 87,
    reviewCount: 12,
    rewardPoints: 3900,
    totalHelpfulVotes: 68,
    memberSince: '2023-09-20',
    badges: ['정품구매 선호러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer25',
    nickname: '컴팩트선호러',
    trustScore: 96,
    reviewCount: 28,
    rewardPoints: 9100,
    totalHelpfulVotes: 139,
    memberSince: '2022-05-21',
    badges: ['콤팩트가전 전문가', '상세리뷰 마스터'],
    profileImage: undefined
  },
  {
    _id: 'reviewer26',
    nickname: '감성주방유저',
    trustScore: 94,
    reviewCount: 22,
    rewardPoints: 7800,
    totalHelpfulVotes: 121,
    memberSince: '2023-06-27',
    badges: ['감성가전 애호가', '무선가전 리뷰러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer27',
    nickname: '스무디부부',
    trustScore: 92,
    reviewCount: 17,
    rewardPoints: 5600,
    totalHelpfulVotes: 108,
    memberSince: '2024-09-06',
    badges: ['부부사용 후기러', '스무디 제작 전문'],
    profileImage: undefined
  },
  {
    _id: 'reviewer28',
    nickname: '데일리스무디인',
    trustScore: 93,
    reviewCount: 21,
    rewardPoints: 7100,
    totalHelpfulVotes: 115,
    memberSince: '2024-06-05',
    badges: ['데일리사용러', '휴대성 극찬러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer29',
    nickname: '여름과일광인',
    trustScore: 95,
    reviewCount: 26,
    rewardPoints: 9000,
    totalHelpfulVotes: 143,
    memberSince: '2024-06-30',
    badges: ['여름음료 전문가', '과일주스 마스터'],
    profileImage: undefined
  },
  {
    _id: 'reviewer30',
    nickname: '아침햇살',
    trustScore: 91,
    reviewCount: 13,
    rewardPoints: 4400,
    totalHelpfulVotes: 82,
    memberSince: '2025-10-23',
    badges: ['아침루틴 사용자'],
    profileImage: undefined
  },
  {
    _id: 'reviewer31',
    nickname: '하늘바라기',
    trustScore: 78,
    reviewCount: 10,
    rewardPoints: 2700,
    totalHelpfulVotes: 47,
    memberSince: '2025-09-26',
    badges: ['솔직한 리뷰러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer32',
    nickname: '초보도잘씀',
    trustScore: 90,
    reviewCount: 11,
    rewardPoints: 3500,
    totalHelpfulVotes: 76,
    memberSince: '2025-07-16',
    badges: ['입문자 친화 리뷰러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer33',
    nickname: '프로틴매일마심',
    trustScore: 88,
    reviewCount: 16,
    rewardPoints: 4800,
    totalHelpfulVotes: 69,
    memberSince: '2025-04-13',
    badges: ['프로틴 사용 전문가'],
    profileImage: undefined
  },
  {
    _id: 'reviewer34',
    nickname: '붉은노을',
    trustScore: 93,
    reviewCount: 19,
    rewardPoints: 6500,
    totalHelpfulVotes: 92,
    memberSince: '2024-12-17',
    badges: ['실사용 팁 제공러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer35',
    nickname: '조용한사람',
    trustScore: 92,
    reviewCount: 14,
    rewardPoints: 5000,
    totalHelpfulVotes: 81,
    memberSince: '2025-11-06',
    badges: ['저소음가전 애호가'],
    profileImage: undefined
  },

  {
    _id: 'reviewer36',
    nickname: '원투펀치가구',
    trustScore: 91,
    reviewCount: 14,
    rewardPoints: 4300,
    totalHelpfulVotes: 77,
    memberSince: '2025-11-04',
    badges: ['1~2인가구 리뷰러', '저소음 선호'],
    profileImage: undefined
  },
  {
    _id: 'reviewer37',
    nickname: '블루베리',
    trustScore: 94,
    reviewCount: 19,
    rewardPoints: 6900,
    totalHelpfulVotes: 112,
    memberSince: '2024-10-10',
    badges: ['스무디전문가', '냉동과일 리뷰러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer38',
    nickname: '지옥경험자',
    trustScore: 90,
    reviewCount: 23,
    rewardPoints: 5200,
    totalHelpfulVotes: 131,
    memberSince: '2024-11-09',
    badges: ['솔직리뷰러', 'AS경험공유'],
    profileImage: undefined
  },
  {
    _id: 'reviewer39',
    nickname: '하모니카',
    trustScore: 98,
    reviewCount: 27,
    rewardPoints: 8800,
    totalHelpfulVotes: 120,
    memberSince: '2025-06-25',
    badges: ['1인가구필수템 리뷰러', '간편세척전문'],
    profileImage: undefined
  },
  {
    _id: 'reviewer40',
    nickname: '반듯한생활',
    trustScore: 94,
    reviewCount: 18,
    rewardPoints: 6400,
    totalHelpfulVotes: 115,
    memberSince: '2024-05-11',
    badges: ['생활가전애호가', '냉동과일전문'],
    profileImage: undefined
  },
  {
    _id: 'reviewer41',
    nickname: '물방울',
    trustScore: 93,
    reviewCount: 20,
    rewardPoints: 6700,
    totalHelpfulVotes: 330,
    memberSince: '2025-01-21',
    badges: ['1인가구전문', '자취템마스터'],
    profileImage: undefined
  },
  {
    _id: 'reviewer42',
    nickname: '찬란한바람',
    trustScore: 85,
    reviewCount: 12,
    rewardPoints: 3500,
    totalHelpfulVotes: 72,
    memberSince: '2025-01-14',
    badges: ['포장상태민감러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer43',
    nickname: '라방좋아',
    trustScore: 94,
    reviewCount: 2,
    rewardPoints: 7200,
    totalHelpfulVotes: 90,
    memberSince: '2024-06-25',
    badges: ['라방구매러', '가성비헌터'],
    profileImage: undefined
  },
  {
    _id: 'reviewer44',
    nickname: '바다새야',
    trustScore: 92,
    reviewCount: 7,
    rewardPoints: 5800,
    totalHelpfulVotes: 101,
    memberSince: '2024-05-29',
    badges: ['아침주스유저', '간편세척선호'],
    profileImage: undefined
  },
  {
    _id: 'reviewer45',
    nickname: '홈카페도전러',
    trustScore: 93,
    reviewCount: 7,
    rewardPoints: 6900,
    totalHelpfulVotes: 119,
    memberSince: '2024-10-13',
    badges: ['홈카페러', '쉐이크마스터'],
    profileImage: undefined
  },
  {
    _id: 'reviewer46',
    nickname: '예쁜가전좋아함',
    trustScore: 93,
    reviewCount: 21,
    rewardPoints: 7100,
    totalHelpfulVotes: 300,
    memberSince: '2024-05-28',
    badges: ['감성가전애호가', '디자인중시러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer47',
    nickname: '파릇파릇',
    trustScore: 95,
    reviewCount: 16,
    rewardPoints: 8400,
    totalHelpfulVotes: 138,
    memberSince: '2024-05-03',
    badges: ['매일사용러', '저소음전문'],
    profileImage: undefined
  },
  {
    _id: 'reviewer48',
    nickname: '로보트',
    trustScore: 89,
    reviewCount: 14,
    rewardPoints: 4600,
    totalHelpfulVotes: 97,
    memberSince: '2025-04-19',
    badges: ['프로틴러버', '사무실사용추천'],
    profileImage: undefined
  },
  {
    _id: 'reviewer49',
    nickname: '운동하고한잔',
    trustScore: 90,
    reviewCount: 15,
    rewardPoints: 5000,
    totalHelpfulVotes: 104,
    memberSince: '2025-01-11',
    badges: ['운동후루틴', '건강음료선호'],
    profileImage: undefined
  },
  {
    _id: 'reviewer50',
    nickname: '달롱달롱',
    trustScore: 93,
    reviewCount: 18,
    rewardPoints: 6700,
    totalHelpfulVotes: 129,
    memberSince: '2024-07-26',
    badges: ['2인가구전문', '대형믹서대체러'],
    profileImage: undefined
  },




  {
  _id: 'reviewer1a',
  nickname: '달빛행주394',
  trustScore: 93,
  reviewCount: 18,
  rewardPoints: 4700,
  totalHelpfulVotes: 240,
  memberSince: '2021-08-12',
  badges: ['믹서기 전문리뷰어', '신뢰받는 리뷰어'],
  profileImage: undefined
  },

  {
  _id: 'reviewer2a',
  nickname: '수박전사',
  trustScore: 87,
  reviewCount: 25,
  rewardPoints: 3100,
  totalHelpfulVotes: 419,
  memberSince: '2020-05-21',
  badges: ['가전제품 마스터', '성실한 후기작성자'],
  profileImage: undefined
  },
  {
  _id: 'reviewer3a',
  nickname: '고요한바람술사',
  trustScore: 91,
  reviewCount: 22,
  rewardPoints: 3300,
  totalHelpfulVotes: 280,
  memberSince: '2019-11-10',
  badges: ['베스트 리뷰어', '가전 카테고리 Top 평가자'],
  profileImage: undefined
  },
  {
  _id: 'reviewer4a',
  nickname: '초록숲파수꾼',
  trustScore: 95,
  reviewCount: 20,
  rewardPoints: 3500,
  totalHelpfulVotes: 410,
  memberSince: '2018-03-29',
  badges: ['TOP 1% 리뷰어', '주방가전 전문가'],
  profileImage: undefined
  },
  {
  _id: 'reviewer5a',
  nickname: '빙수도적',
  trustScore: 96,
  reviewCount: 22,
  rewardPoints: 2950,
  totalHelpfulVotes: 330,
  memberSince: '2021-04-07',
  badges: ['믹서기 헤비유저', '신뢰 높은 리뷰어'],
  profileImage: undefined
  },
  {
  _id: 'reviewer6a',
  nickname: '바닐라군단장9021',
  trustScore: 74,
  reviewCount: 12,
  rewardPoints: 1700,
  totalHelpfulVotes: 120,
  memberSince: '2022-02-14',
  badges: ['실사용 후기 전문', '리얼 체험 리뷰어'],
  profileImage: undefined
  },
  {
  _id: 'reviewer7a',
  nickname: '조용한별지기347',
  trustScore: 89,
  reviewCount: 16,
  rewardPoints: 2500,
  totalHelpfulVotes: 230,
  memberSince: '2020-09-03',
  badges: ['꾸준한 리뷰어', '생활가전 애호가'],
  profileImage: undefined
  },
  {
  _id: 'reviewer8a',
  nickname: '초보자취생',
  trustScore: 92,
  reviewCount: 11,
  rewardPoints: 1900,
  totalHelpfulVotes: 210,
  memberSince: '2023-01-18',
  badges: ['자취 필수템 리뷰어', '믿고 보는 후기'],
  profileImage: undefined
  },
  {
  _id: 'reviewer9a',
  nickname: '과일잘먹는언니',
  trustScore: 90,
  reviewCount: 20,
  rewardPoints: 2600,
  totalHelpfulVotes: 190,
  memberSince: '2021-06-22',
  badges: ['건강음식 리뷰어', '믹서기 애용자'],
  profileImage: undefined
  },
  {
  _id: 'reviewer10a',
  nickname: '자취7년차',
  trustScore: 85,
  reviewCount: 14,
  rewardPoints: 2100,
  totalHelpfulVotes: 170,
  memberSince: '2020-12-02',
  badges: ['합리적 소비자', '가성비 리뷰 전문가'],
  profileImage: undefined
  },
  {
    _id: 'reviewer11a',
    nickname: '깔끔성애자',
    trustScore: 77,
    reviewCount: 18,
    rewardPoints: 2700,
    totalHelpfulVotes: 230,
    memberSince: '2021-06-12',
    badges: ['믹서기 헤비유저', '신뢰 높은 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer12a',
    nickname: '차분한주말유저',
    trustScore: 97,
    reviewCount: 34,
    rewardPoints: 7800,
    totalHelpfulVotes: 460,
    memberSince: '2020-03-28',
    badges: ['리뷰 고수', '생활가전 전문가'],
    profileImage: undefined
  },
  {
    _id: 'reviewer13a',
    nickname: '딸기스무디러버',
    trustScore: 83,
    reviewCount: 12,
    rewardPoints: 1650,
    totalHelpfulVotes: 120,
    memberSince: '2022-07-15',
    badges: ['스무디 애호가', '믹서기 사용자'],
    profileImage: undefined
  },
  {
    _id: 'reviewer14a',
    nickname: '건강챙기는직장인',
    trustScore: 68,
    reviewCount: 10,
    rewardPoints: 1500,
    totalHelpfulVotes: 95,
    memberSince: '2023-01-09',
    badges: ['건강식 관심', '가전리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer15a',
    nickname: '조용한하루살이',
    trustScore: 42,
    reviewCount: 6,
    rewardPoints: 720,
    totalHelpfulVotes: 32,
    memberSince: '2022-11-04',
    badges: ['리뷰 도전자'],
    profileImage: undefined
  },
  {
    _id: 'reviewer16a',
    nickname: '달콤한아침',
    trustScore: 36,
    reviewCount: 4,
    rewardPoints: 520,
    totalHelpfulVotes: 20,
    memberSince: '2024-02-10',
    badges: ['초보 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer17a',
    nickname: '믹서기찾는중',
    trustScore: 94,
    reviewCount: 14,
    rewardPoints: 6200,
    totalHelpfulVotes: 380,
    memberSince: '2021-04-07',
    badges: ['믹서기 헤비유저', '신뢰 높은 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer18a',
    nickname: '차분한집사',
    trustScore: 97,
    reviewCount: 15,
    rewardPoints: 7100,
    totalHelpfulVotes: 420,
    memberSince: '2019-09-12',
    badges: ['생활가전 마스터', '베스트 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer19a',
    nickname: '고구마',
    trustScore: 87,
    reviewCount: 5,
    rewardPoints: 2600,
    totalHelpfulVotes: 160,
    memberSince: '2020-05-30',
    badges: ['스무디 자주 먹는 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer20a',
    nickname: '감자',
    trustScore: 99,
    reviewCount: 30,
    rewardPoints: 9200,
    totalHelpfulVotes: 801,
    memberSince: '2018-11-22',
    badges: ['최고 등급 리뷰어', '신뢰 탑티어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer21a',
    nickname: '빨간머리 유',
    trustScore: 90,
    reviewCount: 19,
    rewardPoints: 2800,
    totalHelpfulVotes: 190,
    memberSince: '2021-08-01',
    badges: ['생활가전 리뷰어', '유리용기 선호'],
    profileImage: undefined
  },
  {
    _id: 'reviewer22a',
    nickname: '책과 연필',
    trustScore: 83,
    reviewCount: 15,
    rewardPoints: 2400,
    totalHelpfulVotes: 140,
    memberSince: '2023-02-14',
    badges: ['실사용 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer23a',
    nickname: '아이엄마의선택',
    trustScore: 92,
    reviewCount: 18,
    rewardPoints: 3800,
    totalHelpfulVotes: 210,
    memberSince: '2021-10-05',
    badges: ['육아 리뷰어', '믿고 보는 리뷰'],
    profileImage: undefined
  },
  {
    _id: 'reviewer24a',
    nickname: '가느다란머리',
    trustScore: 47,
    reviewCount: 7,
    rewardPoints: 980,
    totalHelpfulVotes: 120,
    memberSince: '2022-06-19',
    badges: ['솔직한 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer25a',
    nickname: '익숙한 나날들',
    trustScore: 81,
    reviewCount: 14,
    rewardPoints: 2400,
    totalHelpfulVotes: 180,
    memberSince: '2020-09-17',
    badges: ['가성비 탐색러'],
    profileImage: undefined
  },
  {
    _id: 'reviewer26a',
    nickname: '파마주부',
    trustScore: 90,
    reviewCount: 10,
    rewardPoints: 2000,
    totalHelpfulVotes: 150,
    memberSince: '2021-04-02',
    badges: ['주부 사용자', '믹서기 자주 씀'],
    profileImage: undefined
  },
  {
    _id: 'reviewer27a',
    nickname: '개와 고양이',
    trustScore: 92,
    reviewCount: 26,
    rewardPoints: 5400,
    totalHelpfulVotes: 660,
    memberSince: '2019-05-08',
    badges: ['믹서기 파워유저'],
    profileImage: undefined
  },
  {
    _id: 'reviewer28a',
    nickname: '보글보글',
    trustScore: 89,
    reviewCount: 11,
    rewardPoints: 1950,
    totalHelpfulVotes: 130,
    memberSince: '2023-03-01',
    badges: ['가성비 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer29a',
    nickname: '영화가 좋아',
    trustScore: 87,
    reviewCount: 17,
    rewardPoints: 3000,
    totalHelpfulVotes: 175,
    memberSince: '2020-12-20',
    badges: ['빠른배송 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer30a',
    nickname: '아침햇살궁수',
    trustScore: 91,
    reviewCount: 20,
    rewardPoints: 3500,
    totalHelpfulVotes: 240,
    memberSince: '2022-05-11',
    badges: ['신뢰 높은 리뷰어', '아침 루틴 사용자'],
    profileImage: undefined
  },
  {
    _id: 'reviewer1b',
    nickname: '소담이22',
    trustScore: 94,
    reviewCount: 32,
    rewardPoints: 6400,
    totalHelpfulVotes: 420,
    memberSince: '2020-04-12',
    badges: ['믹서기 헤비유저', '신뢰 높은 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer2b',
    nickname: '은솔바람',
    trustScore: 92,
    reviewCount: 25,
    rewardPoints: 4800,
    totalHelpfulVotes: 310,
    memberSince: '2021-06-18',
    badges: ['생활가전 리뷰어', '신혼템 전문가'],
    profileImage: undefined
  },
  {
    _id: 'reviewer3b',
    nickname: '하늘비102',
    trustScore: 95,
    reviewCount: 28,
    rewardPoints: 5600,
    totalHelpfulVotes: 350,
    memberSince: '2019-08-05',
    badges: ['가성비 탐색러', '믹싱 기능 전문 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer4b',
    nickname: '모카초코',
    trustScore: 91,
    reviewCount: 20,
    rewardPoints: 4000,
    totalHelpfulVotes: 270,
    memberSince: '2022-01-15',
    badges: ['믹서기 실사용자', '가전제품 선호 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer5b',
    nickname: '포근한하루',
    trustScore: 96,
    reviewCount: 30,
    rewardPoints: 6200,
    totalHelpfulVotes: 410,
    memberSince: '2020-11-22',
    badges: ['믹서기 파워유저', '강력모터 리뷰 전문'],
    profileImage: undefined
  },
  {
    _id: 'reviewer6b',
    nickname: '달콤해진',
    trustScore: 93,
    reviewCount: 16,
    rewardPoints: 3200,
    totalHelpfulVotes: 190,
    memberSince: '2023-02-10',
    badges: ['간편세척 선호 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer7b',
    nickname: '느린오후',
    trustScore: 90,
    reviewCount: 14,
    rewardPoints: 2600,
    totalHelpfulVotes: 165,
    memberSince: '2021-10-28',
    badges: ['트라이탄 재질 선호', '믿고 쓰는 브랜드 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer8b',
    nickname: '초여름바람',
    trustScore: 87,
    reviewCount: 10,
    rewardPoints: 1900,
    totalHelpfulVotes: 110,
    memberSince: '2022-07-19',
    badges: ['실사용 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer9b',
    nickname: '산들산들',
    trustScore: 60,
    reviewCount: 7,
    rewardPoints: 1100,
    totalHelpfulVotes: 55,
    memberSince: '2024-01-17',
    badges: ['까다로운 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer10b',
    nickname: '해맑은초이',
    trustScore: 89,
    reviewCount: 12,
    rewardPoints: 2250,
    totalHelpfulVotes: 150,
    memberSince: '2020-12-03',
    badges: ['부모님 선물 전문 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer11b',
    nickname: '작은행복09',
    trustScore: 92,
    reviewCount: 19,
    rewardPoints: 3500,
    totalHelpfulVotes: 210,
    memberSince: '2021-09-01',
    badges: ['실사용 중심 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer12b',
    nickname: '포도나무',
    trustScore: 95,
    reviewCount: 27,
    rewardPoints: 5400,
    totalHelpfulVotes: 330,
    memberSince: '2019-06-14',
    badges: ['믹서기 고급사용자'],
    profileImage: undefined
  },
  {
    _id: 'reviewer13b',
    nickname: '바닐라크림',
    trustScore: 94,
    reviewCount: 18,
    rewardPoints: 3600,
    totalHelpfulVotes: 225,
    memberSince: '2020-05-20',
    badges: ['스무디 유저', '신뢰 높은 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer14b',
    nickname: '바람결27',
    trustScore: 84,
    reviewCount: 11,
    rewardPoints: 2100,
    totalHelpfulVotes: 130,
    memberSince: '2022-03-30',
    badges: ['가전제품 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer15b',
    nickname: '따뜻한손길',
    trustScore: 91,
    reviewCount: 15,
    rewardPoints: 3000,
    totalHelpfulVotes: 170,
    memberSince: '2021-07-09',
    badges: ['얼음 갈기 리뷰 전문'],
    profileImage: undefined
  },
  {
    _id: 'reviewer16b',
    nickname: '구름사이',
    trustScore: 65,
    reviewCount: 6,
    rewardPoints: 850,
    totalHelpfulVotes: 50,
    memberSince: '2023-08-18',
    badges: ['솔직한 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer17b',
    nickname: '순한향기',
    trustScore: 75,
    reviewCount: 9,
    rewardPoints: 1600,
    totalHelpfulVotes: 95,
    memberSince: '2022-10-11',
    badges: ['환경 관심 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer18b',
    nickname: '봄소리212',
    trustScore: 63,
    reviewCount: 8,
    rewardPoints: 1200,
    totalHelpfulVotes: 70,
    memberSince: '2021-03-08',
    badges: ['초보 사용자 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer19b',
    nickname: '초코휘핑',
    trustScore: 55,
    reviewCount: 5,
    rewardPoints: 650,
    totalHelpfulVotes: 40,
    memberSince: '2023-04-15',
    badges: ['소음 민감 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer20b',
    nickname: '맑은하늘',
    trustScore: 93,
    reviewCount: 20,
    rewardPoints: 3400,
    totalHelpfulVotes: 230,
    memberSince: '2020-10-12',
    badges: ['가성비 탐색러', '믹서기 실사용자'],
    profileImage: undefined
  },
  {
    _id: 'reviewer21b',
    nickname: '겨울산책07',
    trustScore: 92,
    reviewCount: 22,
    rewardPoints: 3800,
    totalHelpfulVotes: 250,
    memberSince: '2019-12-30',
    badges: ['빠른배송 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer22b',
    nickname: '달빛오솔길44',
    trustScore: 81,
    reviewCount: 13,
    rewardPoints: 2200,
    totalHelpfulVotes: 140,
    memberSince: '2022-02-21',
    badges: ['사용법 친화적 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer23b',
    nickname: '민트바질',
    trustScore: 94,
    reviewCount: 24,
    rewardPoints: 4800,
    totalHelpfulVotes: 300,
    memberSince: '2019-09-02',
    badges: ['디자인 중시 사용자', '믹서기 선호'],
    profileImage: undefined
  },
  {
    _id: 'reviewer24b',
    nickname: '설레임가득',
    trustScore: 42,
    reviewCount: 4,
    rewardPoints: 420,
    totalHelpfulVotes: 30,
    memberSince: '2024-05-12',
    badges: ['냉정한 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer25b',
    nickname: '수국향12',
    trustScore: 94,
    reviewCount: 26,
    rewardPoints: 5200,
    totalHelpfulVotes: 330,
    memberSince: '2020-07-11',
    badges: ['빠른배송 후기 전문'],
    profileImage: undefined
  },
  {
    _id: 'reviewer26b',
    nickname: '햇살웃음',
    trustScore: 93,
    reviewCount: 18,
    rewardPoints: 3600,
    totalHelpfulVotes: 220,
    memberSince: '2021-01-25',
    badges: ['만족도 높은 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer27b',
    nickname: '초록안개',
    trustScore: 88,
    reviewCount: 17,
    rewardPoints: 3100,
    totalHelpfulVotes: 195,
    memberSince: '2022-04-09',
    badges: ['스무디 유저'],
    profileImage: undefined
  },
  {
    _id: 'reviewer28b',
    nickname: '고운빛21',
    trustScore: 82,
    reviewCount: 12,
    rewardPoints: 1900,
    totalHelpfulVotes: 150,
    memberSince: '2023-03-11',
    badges: ['가성비 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer29b',
    nickname: '달하루91',
    trustScore: 95,
    reviewCount: 27,
    rewardPoints: 5400,
    totalHelpfulVotes: 360,
    memberSince: '2019-10-18',
    badges: ['오랜 사용자', '믿음직한 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer30b',
    nickname: '장미한송이',
    trustScore: 80,
    reviewCount: 14,
    rewardPoints: 2400,
    totalHelpfulVotes: 180,
    memberSince: '2021-11-07',
    badges: ['사용 솔직 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer_new_1',
    nickname: '음향기기덕후',
    trustScore: 96,
    reviewCount: 42,
    rewardPoints: 15400,
    totalHelpfulVotes: 890,
    memberSince: '2020-05-15',
    badges: ['음향 전문가', '플래티넘 리뷰어'],
    profileImage: undefined
  },
  {
    _id: 'reviewer_new_2',
    nickname: '코덕10년차',
    trustScore: 93,
    reviewCount: 56,
    rewardPoints: 12000,
    totalHelpfulVotes: 1024,
    memberSince: '2019-11-01',
    badges: ['뷰티 마스터', '성분 분석가'],
    profileImage: undefined
  },
  {
    _id: 'reviewer_new_3',
    nickname: '독서광',
    trustScore: 95,
    reviewCount: 120,
    rewardPoints: 21000,
    totalHelpfulVotes: 2300,
    memberSince: '2018-03-22',
    badges: ['지식 공유자', '베스트 리뷰어'],
    profileImage: undefined
  }
];

// 리워드 등급 정의
export const rewardTiers: RewardTier[] = [
  {
    name: '브론즈',
    threshold: 0,
    multiplier: 1.0,
    color: '#CD7F32',
    benefits: [
      '기본 크레딧 지급',
      '리뷰 작성 시 100 크레딧',
      '커뮤니티 투표 참여'
    ]
  },
  {
    name: '실버',
    threshold: 1000,
    multiplier: 1.2,
    color: '#C0C0C0',
    benefits: [
      '크레딧 20% 추가',
      '월별 보너스 50 크레딧',
      '우선 리뷰 노출',
      '실버 배지 획득'
    ]
  },
  {
    name: '골드',
    threshold: 5000,
    multiplier: 1.5,
    color: '#FFD700',
    benefits: [
      '크레딧 50% 추가',
      '월별 보너스 150 크레딧',
      '프리미엄 리뷰 노출',
      '골드 배지 획득',
      '전용 고객 지원'
    ]
  },
  {
    name: '플래티넘',
    threshold: 15000,
    multiplier: 2.0,
    color: '#E5E4E2',
    benefits: [
      '크레딧 100% 추가',
      '월별 보너스 300 크레딧',
      '최우선 리뷰 노출',
      '플래티넘 배지 획득',
      '전용 고객 지원',
      '신제품 우선 리뷰 기회',
      '특별 이벤트 초대'
    ]
  }
];

// 리워드 트랜잭션 목 데이터
export const mockRewardTransactions: RewardTransaction[] = [
  {
    _id: 'rt1',
    userId: 'reviewer1',
    type: 'earn',
    points: 234,   // 92*2+50
    reason: '리뷰 작성 보상 (신뢰도 92%)',
    relatedReviewId: 'review1',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },

  // 2
  {
    _id: 'rt2',
    userId: 'reviewer2',
    type: 'earn',
    points: 222,
    reason: '리뷰 작성 보상 (신뢰도 86%)',
    relatedReviewId: 'review2',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt3',
    userId: 'reviewer3',
    type: 'earn',
    points: 210,
    reason: '리뷰 작성 보상 (신뢰도 80%)',
    relatedReviewId: 'review3',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt4',
    userId: 'reviewer4',
    type: 'earn',
    points: 240,
    reason: '리뷰 작성 보상 (신뢰도 95%)',
    relatedReviewId: 'review4',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt5',
    userId: 'reviewer5',
    type: 'earn',
    points: 238,
    reason: '리뷰 작성 보상 (신뢰도 94%)',
    relatedReviewId: 'review5',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },

  {
  _id: 'rt6',
  userId: 'reviewer6',
  type: 'earn',
  points: 80,   // 신뢰도 낮아 보상 대폭 감소
  reason: '리뷰 작성 보상 (신뢰도 65%)',
  relatedReviewId: 'review6',
  productName: '닌자 블라스트 포터블 블렌더',
  created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
  status: 'completed'
  },

  {
    _id: 'rt7',
    userId: 'reviewer7',
    type: 'earn',
    points: 230,
    reason: '리뷰 작성 보상 (신뢰도 90%)',
    relatedReviewId: 'review7',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt8',
    userId: 'reviewer8',
    type: 'earn',
    points: 236,
    reason: '리뷰 작성 보상 (신뢰도 93%)',
    relatedReviewId: 'review8',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt9',
    userId: 'reviewer9',
    type: 'earn',
    points: 232,
    reason: '리뷰 작성 보상 (신뢰도 91%)',
    relatedReviewId: 'review9',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt10',
    userId: 'reviewer10',
    type: 'earn',
    points: 230,
    reason: '리뷰 작성 보상 (신뢰도 90%)',
    relatedReviewId: 'review10',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(), 
    status: 'completed'
  },

  {
    _id: 'rt11',
    userId: 'reviewer11',
    type: 'earn',
    points: 242,
    reason: '리뷰 작성 보상 (신뢰도 96%)',
    relatedReviewId: 'review11',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt12',
    userId: 'reviewer12',
    type: 'earn',
    points: 240,
    reason: '리뷰 작성 보상 (신뢰도 95%)',
    relatedReviewId: 'review12',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt13',
    userId: 'reviewer13',
    type: 'earn',
    points: 142,   // trustScore 81 → (81*2+40)-20
    reason: '리뷰 작성 보상 (신뢰도 81%)',
    relatedReviewId: 'review13',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt14',
    userId: 'reviewer14',
    type: 'earn',
    points: 220,   // 90*2+40
    reason: '리뷰 작성 보상 (신뢰도 90%)',
    relatedReviewId: 'review14',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt15',
    userId: 'reviewer15',
    type: 'earn',
    points: 220,   // 90*2+40
    reason: '리뷰 작성 보상 (신뢰도 90%)',
    relatedReviewId: 'review15',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt16',
    userId: 'reviewer16',
    type: 'earn',
    points: 228,   // 94*2+40
    reason: '리뷰 작성 보상 (신뢰도 94%)',
    relatedReviewId: 'review16',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt17',
    userId: 'reviewer17',
    type: 'earn',
    points: 226,   // 93*2+40
    reason: '리뷰 작성 보상 (신뢰도 93%)',
    relatedReviewId: 'review17',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt18',
    userId: 'reviewer18',
    type: 'earn',
    points: 234,   // 97*2+40
    reason: '리뷰 작성 보상 (신뢰도 97%)',
    relatedReviewId: 'review18',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt19',
    userId: 'reviewer19',
    type: 'earn',
    points: 196,   // 88*2+40
    reason: '리뷰 작성 보상 (신뢰도 88%)',
    relatedReviewId: 'review19',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt20',
    userId: 'reviewer20',
    type: 'earn',
    points: 238,   // 99*2+40
    reason: '리뷰 작성 보상 (신뢰도 99%)',
    relatedReviewId: 'review20',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt21',
    userId: 'reviewer21',
    type: 'earn',
    points: 224,   // 92*2+40
    reason: '리뷰 작성 보상 (신뢰도 92%)',
    relatedReviewId: 'review21',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt22',
    userId: 'reviewer22',
    type: 'earn',
    points: 176,   // trustScore 78 → (78*2+40)-20
    reason: '리뷰 작성 보상 (신뢰도 78%)',
    relatedReviewId: 'review22',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt23',
    userId: 'reviewer23',
    type: 'earn',
    points: 230,   // 95*2+40
    reason: '리뷰 작성 보상 (신뢰도 95%)',
    relatedReviewId: 'review23',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt24',
    userId: 'reviewer24',
    type: 'earn',
    points: 214,   // 87*2+40
    reason: '리뷰 작성 보상 (신뢰도 87%)',
    relatedReviewId: 'review24',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt25',
    userId: 'reviewer25',
    type: 'earn',
    points: 232,   // 96*2+40
    reason: '리뷰 작성 보상 (신뢰도 96%)',
    relatedReviewId: 'review25',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date().toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt26',
    userId: 'reviewer26',
    type: 'earn',
    points: 228,   // 94*2+40
    reason: '리뷰 작성 보상 (신뢰도 94%)',
    relatedReviewId: 'review26',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date().toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt27',
    userId: 'reviewer27',
    type: 'earn',
    points: 224,   // 92*2+40
    reason: '리뷰 작성 보상 (신뢰도 92%)',
    relatedReviewId: 'review27',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date().toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt28',
    userId: 'reviewer28',
    type: 'earn',
    points: 226,   // 93*2+40
    reason: '리뷰 작성 보상 (신뢰도 93%)',
    relatedReviewId: 'review28',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date().toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt29',
    userId: 'reviewer29',
    type: 'earn',
    points: 230,   // 95*2+40
    reason: '리뷰 작성 보상 (신뢰도 95%)',
    relatedReviewId: 'review29',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date().toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt30',
    userId: 'reviewer30',
    type: 'earn',
    points: 222,   // 91*2+40
    reason: '리뷰 작성 보상 (신뢰도 91%)',
    relatedReviewId: 'review30',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date().toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt31',
    userId: 'reviewer31',
    type: 'earn',
    points: 176,  // trustScore 78 → (78*2+40)-20
    reason: '리뷰 작성 보상 (신뢰도 78%)',
    relatedReviewId: 'review31',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt32',
    userId: 'reviewer32',
    type: 'earn',
    points: 220,  // 90*2+40
    reason: '리뷰 작성 보상 (신뢰도 90%)',
    relatedReviewId: 'review32',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt33',
    userId: 'reviewer33',
    type: 'earn',
    points: 216,  // 88*2+40
    reason: '리뷰 작성 보상 (신뢰도 88%)',
    relatedReviewId: 'review33',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt34',
    userId: 'reviewer34',
    type: 'earn',
    points: 226,  // 93*2+40
    reason: '리뷰 작성 보상 (신뢰도 93%)',
    relatedReviewId: 'review34',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt35',
    userId: 'reviewer35',
    type: 'earn',
    points: 224,  // 92*2+40
    reason: '리뷰 작성 보상 (신뢰도 92%)',
    relatedReviewId: 'review35',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt36',
    userId: 'reviewer36',
    type: 'earn',
    points: 222,  // 91*2+40
    reason: '리뷰 작성 보상 (신뢰도 91%)',
    relatedReviewId: 'review36',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt37',
    userId: 'reviewer37',
    type: 'earn',
    points: 228,  // 94*2+40
    reason: '리뷰 작성 보상 (신뢰도 94%)',
    relatedReviewId: 'review37',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt38',
    userId: 'reviewer38',
    type: 'earn',
    points: 220,  // 90*2+40
    reason: '리뷰 작성 보상 (신뢰도 90%)',
    relatedReviewId: 'review38',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt39',
    userId: 'reviewer39',
    type: 'earn',
    points: 236,  // 98*2+40
    reason: '리뷰 작성 보상 (신뢰도 98%)',
    relatedReviewId: 'review39',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt40',
    userId: 'reviewer40',
    type: 'earn',
    points: 228,  // 94*2+40
    reason: '리뷰 작성 보상 (신뢰도 94%)',
    relatedReviewId: 'review40',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt41',
    userId: 'reviewer41',
    type: 'earn',
    points: 226,  // 93*2+40
    reason: '리뷰 작성 보상 (신뢰도 93%)',
    relatedReviewId: 'review41',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt42',
    userId: 'reviewer42',
    type: 'earn',
    points: 190,  // trustScore 85== borderline? → 85*2+40 = 210 (trustScore <85 rule doesn’t apply)
    reason: '리뷰 작성 보상 (신뢰도 85%)',
    relatedReviewId: 'review42',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt43',
    userId: 'reviewer43',
    type: 'earn',
    points: 228,  // 94*2+40
    reason: '리뷰 작성 보상 (신뢰도 94%)',
    relatedReviewId: 'review43',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt44',
    userId: 'reviewer44',
    type: 'earn',
    points: 224,  // 92*2+40
    reason: '리뷰 작성 보상 (신뢰도 92%)',
    relatedReviewId: 'review44',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt45',
    userId: 'reviewer45',
    type: 'earn',
    points: 226,  // 93*2+40
    reason: '리뷰 작성 보상 (신뢰도 93%)',
    relatedReviewId: 'review45',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt46',
    userId: 'reviewer46',
    type: 'earn',
    points: 226,  // 93*2+40
    reason: '리뷰 작성 보상 (신뢰도 93%)',
    relatedReviewId: 'review46',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt47',
    userId: 'reviewer47',
    type: 'earn',
    points: 230,  // 95*2+40
    reason: '리뷰 작성 보상 (신뢰도 95%)',
    relatedReviewId: 'review47',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt48',
    userId: 'reviewer48',
    type: 'earn',
    points: 218,  // 89*2+40
    reason: '리뷰 작성 보상 (신뢰도 89%)',
    relatedReviewId: 'review48',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt49',
    userId: 'reviewer49',
    type: 'earn',
    points: 220,  // 90*2+40
    reason: '리뷰 작성 보상 (신뢰도 90%)',
    relatedReviewId: 'review49',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt50',
    userId: 'reviewer50',
    type: 'earn',
    points: 226,  // 93*2+40
    reason: '리뷰 작성 보상 (신뢰도 93%)',
    relatedReviewId: 'review50',
    productName: '닌자 블라스트 포터블 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
    {
    _id: 'rt1a',
    userId: 'reviewer1a',
    type: 'earn',
    points: 226,
    reason: '리뷰 작성 보상 (신뢰도 93%)',
    relatedReviewId: 'review1a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt2a',
    userId: 'reviewer2a',
    type: 'earn',
    points: 214,
    reason: '리뷰 작성 보상 (신뢰도 87%)',
    relatedReviewId: 'review2a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt3a',
    userId: 'reviewer3a',
    type: 'earn',
    points: 222,
    reason: '리뷰 작성 보상 (신뢰도 91%)',
    relatedReviewId: 'review3a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt4a',
    userId: 'reviewer4a',
    type: 'earn',
    points: 230,
    reason: '리뷰 작성 보상 (신뢰도 95%)',
    relatedReviewId: 'review4a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt5a',
    userId: 'reviewer5a',
    type: 'earn',
    points: 232,
    reason: '리뷰 작성 보상 (신뢰도 96%)',
    relatedReviewId: 'review5a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt6a',
    userId: 'reviewer6a',
    type: 'earn',
    points: 188,
    reason: '리뷰 작성 보상 (신뢰도 74%)',
    relatedReviewId: 'review6a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt7a',
    userId: 'reviewer7a',
    type: 'earn',
    points: 218,
    reason: '리뷰 작성 보상 (신뢰도 89%)',
    relatedReviewId: 'review7a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt8a',
    userId: 'reviewer8a',
    type: 'earn',
    points: 224,
    reason: '리뷰 작성 보상 (신뢰도 92%)',
    relatedReviewId: 'review8a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt9a',
    userId: 'reviewer9a',
    type: 'earn',
    points: 220,
    reason: '리뷰 작성 보상 (신뢰도 90%)',
    relatedReviewId: 'review9a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt10a',
    userId: 'reviewer10a',
    type: 'earn',
    points: 210,
    reason: '리뷰 작성 보상 (신뢰도 85%)',
    relatedReviewId: 'review10a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt11a',
    userId: 'reviewer11a',
    type: 'earn',
    points: 194,   // 77*2+40
    reason: '리뷰 작성 보상 (신뢰도 77%)',
    relatedReviewId: 'review11a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt12a',
    userId: 'reviewer12a',
    type: 'earn',
    points: 234,   // 97*2+40
    reason: '리뷰 작성 보상 (신뢰도 97%)',
    relatedReviewId: 'review12a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt13a',
    userId: 'reviewer13a',
    type: 'earn',
    points: 206,   // 83*2+40
    reason: '리뷰 작성 보상 (신뢰도 83%)',
    relatedReviewId: 'review13a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt14a',
    userId: 'reviewer14a',
    type: 'earn',
    points: 176,   // 68*2+40
    reason: '리뷰 작성 보상 (신뢰도 68%)',
    relatedReviewId: 'review14a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt15a',
    userId: 'reviewer15a',
    type: 'earn',
    points: 124,   // 42*2+40
    reason: '리뷰 작성 보상 (신뢰도 42%)',
    relatedReviewId: 'review15a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt16a',
    userId: 'reviewer16a',
    type: 'earn',
    points: 112,   // 36*2+40
    reason: '리뷰 작성 보상 (신뢰도 36%)',
    relatedReviewId: 'review16a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt17a',
    userId: 'reviewer17a',
    type: 'earn',
    points: 228,   // 94*2+40
    reason: '리뷰 작성 보상 (신뢰도 94%)',
    relatedReviewId: 'review17a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt18a',
    userId: 'reviewer18a',
    type: 'earn',
    points: 234,   // 97*2+40
    reason: '리뷰 작성 보상 (신뢰도 97%)',
    relatedReviewId: 'review18a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt19a',
    userId: 'reviewer19a',
    type: 'earn',
    points: 214,   // 87*2+40
    reason: '리뷰 작성 보상 (신뢰도 87%)',
    relatedReviewId: 'review19a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt20a',
    userId: 'reviewer20a',
    type: 'earn',
    points: 238,   // 99*2+40
    reason: '리뷰 작성 보상 (신뢰도 99%)',
    relatedReviewId: 'review20a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },

  {
    _id: 'rt21a',
    userId: 'reviewer21a',
    type: 'earn',
    points: 220,   // 90*2+40
    reason: '리뷰 작성 보상 (신뢰도 90%)',
    relatedReviewId: 'review21a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt22a',
    userId: 'reviewer22a',
    type: 'earn',
    points: 206,   // 83*2+40
    reason: '리뷰 작성 보상 (신뢰도 83%)',
    relatedReviewId: 'review22a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt23a',
    userId: 'reviewer23a',
    type: 'earn',
    points: 224,   // 92*2+40
    reason: '리뷰 작성 보상 (신뢰도 92%)',
    relatedReviewId: 'review23a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt24a',
    userId: 'reviewer24a',
    type: 'earn',
    points: 134,   // 47*2+40
    reason: '리뷰 작성 보상 (신뢰도 47%)',
    relatedReviewId: 'review24a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt25a',
    userId: 'reviewer25a',
    type: 'earn',
    points: 202,   // 81*2+40
    reason: '리뷰 작성 보상 (신뢰도 81%)',
    relatedReviewId: 'review25a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt26a',
    userId: 'reviewer26a',
    type: 'earn',
    points: 220,   // 90*2+40
    reason: '리뷰 작성 보상 (신뢰도 90%)',
    relatedReviewId: 'review26a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt27a',
    userId: 'reviewer27a',
    type: 'earn',
    points: 224,   // 92*2+40
    reason: '리뷰 작성 보상 (신뢰도 92%)',
    relatedReviewId: 'review27a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt28a',
    userId: 'reviewer28a',
    type: 'earn',
    points: 218,   // 89*2+40
    reason: '리뷰 작성 보상 (신뢰도 89%)',
    relatedReviewId: 'review28a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt29a',
    userId: 'reviewer29a',
    type: 'earn',
    points: 214,   // 87*2+40
    reason: '리뷰 작성 보상 (신뢰도 87%)',
    relatedReviewId: 'review29a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt30a',
    userId: 'reviewer30a',
    type: 'earn',
    points: 222,   // 91*2+40
    reason: '리뷰 작성 보상 (신뢰도 91%)',
    relatedReviewId: 'review30a',
    productName: '필립스 파워 핸드 블렌더',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt1b',
    userId: 'reviewer1b',
    type: 'earn',
    points: 228, // 94*2+40
    reason: '리뷰 작성 보상 (신뢰도 94%)',
    relatedReviewId: 'review1b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt2b',
    userId: 'reviewer2b',
    type: 'earn',
    points: 224, // 92*2+40
    reason: '리뷰 작성 보상 (신뢰도 92%)',
    relatedReviewId: 'review2b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt3b',
    userId: 'reviewer3b',
    type: 'earn',
    points: 230, // 95*2+40
    reason: '리뷰 작성 보상 (신뢰도 95%)',
    relatedReviewId: 'review3b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt4b',
    userId: 'reviewer4b',
    type: 'earn',
    points: 222, // 91*2+40
    reason: '리뷰 작성 보상 (신뢰도 91%)',
    relatedReviewId: 'review4b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt5b',
    userId: 'reviewer5b',
    type: 'earn',
    points: 232, // 96*2+40
    reason: '리뷰 작성 보상 (신뢰도 96%)',
    relatedReviewId: 'review5b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt6b',
    userId: 'reviewer6b',
    type: 'earn',
    points: 226, // 93*2+40
    reason: '리뷰 작성 보상 (신뢰도 93%)',
    relatedReviewId: 'review6b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt7b',
    userId: 'reviewer7b',
    type: 'earn',
    points: 220, // 90*2+40
    reason: '리뷰 작성 보상 (신뢰도 90%)',
    relatedReviewId: 'review7b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt8b',
    userId: 'reviewer8b',
    type: 'earn',
    points: 214, // 87*2+40
    reason: '리뷰 작성 보상 (신뢰도 87%)',
    relatedReviewId: 'review8b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt9b',
    userId: 'reviewer9b',
    type: 'earn',
    points: 160, // 60*2+40
    reason: '리뷰 작성 보상 (신뢰도 60%)',
    relatedReviewId: 'review9b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt10b',
    userId: 'reviewer10b',
    type: 'earn',
    points: 218, // 89*2+40
    reason: '리뷰 작성 보상 (신뢰도 89%)',
    relatedReviewId: 'review10b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt11b',
    userId: 'reviewer11b',
    type: 'earn',
    points: 224, // 92*2+40
    reason: '리뷰 작성 보상 (신뢰도 92%)',
    relatedReviewId: 'review11b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt12b',
    userId: 'reviewer12b',
    type: 'earn',
    points: 230, // 95*2+40
    reason: '리뷰 작성 보상 (신뢰도 95%)',
    relatedReviewId: 'review12b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt13b',
    userId: 'reviewer13b',
    type: 'earn',
    points: 228, // 94*2+40
    reason: '리뷰 작성 보상 (신뢰도 94%)',
    relatedReviewId: 'review13b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt14b',
    userId: 'reviewer14b',
    type: 'earn',
    points: 208, // 84*2+40
    reason: '리뷰 작성 보상 (신뢰도 84%)',
    relatedReviewId: 'review14b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt15b',
    userId: 'reviewer15b',
    type: 'earn',
    points: 222, // 91*2+40
    reason: '리뷰 작성 보상 (신뢰도 91%)',
    relatedReviewId: 'review15b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt16b',
    userId: 'reviewer16b',
    type: 'earn',
    points: 170, // 65*2+40
    reason: '리뷰 작성 보상 (신뢰도 65%)',
    relatedReviewId: 'review16b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt17b',
    userId: 'reviewer17b',
    type: 'earn',
    points: 190, // 75*2+40
    reason: '리뷰 작성 보상 (신뢰도 75%)',
    relatedReviewId: 'review17b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt18b',
    userId: 'reviewer18b',
    type: 'earn',
    points: 166, // 63*2+40
    reason: '리뷰 작성 보상 (신뢰도 63%)',
    relatedReviewId: 'review18b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt19b',
    userId: 'reviewer19b',
    type: 'earn',
    points: 150, // 55*2+40
    reason: '리뷰 작성 보상 (신뢰도 55%)',
    relatedReviewId: 'review19b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt20b',
    userId: 'reviewer20b',
    type: 'earn',
    points: 226, // 93*2+40
    reason: '리뷰 작성 보상 (신뢰도 93%)',
    relatedReviewId: 'review20b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt21b',
    userId: 'reviewer21b',
    type: 'earn',
    points: 224, // 92*2+40
    reason: '리뷰 작성 보상 (신뢰도 92%)',
    relatedReviewId: 'review21b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt22b',
    userId: 'reviewer22b',
    type: 'earn',
    points: 202, // 81*2+40
    reason: '리뷰 작성 보상 (신뢰도 81%)',
    relatedReviewId: 'review22b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt23b',
    userId: 'reviewer23b',
    type: 'earn',
    points: 228, // 94*2+40
    reason: '리뷰 작성 보상 (신뢰도 94%)',
    relatedReviewId: 'review23b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt24b',
    userId: 'reviewer24b',
    type: 'earn',
    points: 124, // 42*2+40
    reason: '리뷰 작성 보상 (신뢰도 42%)',
    relatedReviewId: 'review24b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt25b',
    userId: 'reviewer25b',
    type: 'earn',
    points: 228, // 94*2+40
    reason: '리뷰 작성 보상 (신뢰도 94%)',
    relatedReviewId: 'review25b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt26b',
    userId: 'reviewer26b',
    type: 'earn',
    points: 226, // 93*2+40
    reason: '리뷰 작성 보상 (신뢰도 93%)',
    relatedReviewId: 'review26b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt27b',
    userId: 'reviewer27b',
    type: 'earn',
    points: 216, // 88*2+40
    reason: '리뷰 작성 보상 (신뢰도 88%)',
    relatedReviewId: 'review27b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt28b',
    userId: 'reviewer28b',
    type: 'earn',
    points: 204, // 82*2+40
    reason: '리뷰 작성 보상 (신뢰도 82%)',
    relatedReviewId: 'review28b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt29b',
    userId: 'reviewer29b',
    type: 'earn',
    points: 230, // 95*2+40
    reason: '리뷰 작성 보상 (신뢰도 95%)',
    relatedReviewId: 'review29b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 1 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt30b',
    userId: 'reviewer30b',
    type: 'earn',
    points: 200, // 80*2+40
    reason: '리뷰 작성 보상 (신뢰도 80%)',
    relatedReviewId: 'review30b',
    productName: '테팔 초고속 블렌더 퍼펙트믹스 플러스 트라이탄',
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt_elec_1',
    userId: 'reviewer_new_1',
    type: 'earn',
    points: 350,
    reason: '리뷰 작성 보상 (신뢰도 96% + 플래티넘 등급)',
    relatedReviewId: 'elec_1',
    productName: '소니 WH-1000XM5',
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt_beauty_1',
    userId: 'reviewer_new_2',
    type: 'earn',
    points: 280,
    reason: '리뷰 작성 보상 (신뢰도 93% + 골드 등급)',
    relatedReviewId: 'beauty_1',
    productName: '일리윤 세라마이드 아토 집중 크림',
    created_at: new Date(Date.now() - 5 * 86400000).toISOString(),
    status: 'completed'
  },
  {
    _id: 'rt_book_1',
    userId: 'reviewer_new_3',
    type: 'earn',
    points: 310,
    reason: '리뷰 작성 보상 (신뢰도 95% + 플래티넘 등급)',
    relatedReviewId: 'book_1',
    productName: '아주 작은 습관의 힘',
    created_at: new Date(Date.now() - 40 * 86400000).toISOString(),
    status: 'completed'
  }
];

// 리워드 계산 함수
export const calculateRewardCredit = (
  productPrice: number,
  hasVerification: boolean,
  imageCount: number,
  reviewRating: number,
  tierMultiplier: number
): number => {
  const baseCredit = 100;
  const verificationBonus = hasVerification ? 50 : 0;
  const imageBonus = imageCount * 10;
  const priceBonus = Math.floor(productPrice * 0.005); // 0.5%
  
  // 신뢰도에 따른 배율
  let ratingMultiplier = 1.0;
  if (reviewRating >= 90) ratingMultiplier = 1.5;
  else if (reviewRating >= 70) ratingMultiplier = 1.3;
  else if (reviewRating >= 50) ratingMultiplier = 1.1;
  
  const totalBase = baseCredit + verificationBonus + imageBonus + priceBonus;
  const total = Math.floor(totalBase * ratingMultiplier * tierMultiplier);
  
  return total;
};