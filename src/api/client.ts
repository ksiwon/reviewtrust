// src/api/client.ts
import { mockReviews, mockRewardTransactions } from '../data/mockData';
import { Review, RewardTransaction, User } from '../types';

const SIMULATE_DELAY = 500;

let memoryReviews = [...mockReviews];
let memoryTransactions = [...mockRewardTransactions];

// 가상의 사용자 데이터베이스
const memoryUsers: Record<string, User> = {
  'user1': {
    _id: 'user1',
    username: 'tech_guru',
    nickname: '테크리뷰어',
    email: 'user@example.com',
    trustScore: 95,
    rewardPoints: 12500,
    reviewCount: 47,
    totalHelpfulVotes: 2341,
    memberSince: '2023-01-15',
    badges: ['전자기기 전문가', '신뢰받는 리뷰어']
  }
};

export const apiClient = {
  get: async (url: string, params?: any) => {
    await new Promise(resolve => setTimeout(resolve, SIMULATE_DELAY));

    if (url === '/reviews') {
      let results = [...memoryReviews];
      if (params?.category) results = results.filter(r => r.category === params.category);
      if (params?.keyword) {
        const keyword = params.keyword.toLowerCase();
        results = results.filter(r => 
          r.title.toLowerCase().includes(keyword) || 
          r.productName.toLowerCase().includes(keyword) ||
          r.content.toLowerCase().includes(keyword)
        );
      }
      if (params?.verifiedOnly) results = results.filter(r => r.verifiedPurchase);
      if (params?.minRating) results = results.filter(r => r.rating >= params.minRating);

      // 외부 플랫폼 필터 (필요시)
      if (params?.sourcePlatform) results = results.filter(r => r.sourcePlatform === params.sourcePlatform);

      if (params?.sortBy) {
        switch (params.sortBy) {
          case 'trustScore': results.sort((a, b) => b.trustScore - a.trustScore); break;
          case 'helpful': results.sort((a, b) => b.helpfulVotes - a.helpfulVotes); break;
          case 'rating': results.sort((a, b) => b.rating - a.rating); break;
          default: results.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        }
      }
      return { data: results };
    }

    if (url.startsWith('/reviews/')) {
      const id = url.split('/')[2];
      const review = memoryReviews.find(r => r._id === id);
      if (!review) throw new Error('404 Not Found');
      return { data: review };
    }

    if (url === '/rewards/transactions') {
      return { data: memoryTransactions };
    }

    if (url === '/users/me') {
      return { data: memoryUsers['user1'] };
    }

    return { data: null };
  },

  post: async (url: string, body: any) => {
    await new Promise(resolve => setTimeout(resolve, SIMULATE_DELAY));

    if (url === '/auth/login') {
      return { data: { user: memoryUsers['user1'], token: 'mock-jwt-token' } };
    }

    if (url === '/reviews') {
      const newReview: Review = {
        ...body,
        _id: Math.random().toString(36).substr(2, 9),
        created_at: new Date().toISOString(),
        trustScore: 50, // 초기 신뢰도
        helpfulVotes: 0,
        notHelpfulVotes: 0,
        views: 0,
        isSponsored: false,
        sourcePlatform: 'ReviewTrust' // 직접 작성한 리뷰는 내부 플랫폼 소스
      };
      memoryReviews = [newReview, ...memoryReviews];
      
      // 리워드 트랜잭션 생성
      const reward: RewardTransaction = {
        _id: Math.random().toString(36).substr(2, 9),
        userId: 'user1',
        type: 'earn',
        points: 100, 
        reason: '리뷰 작성 기본 보상',
        relatedReviewId: newReview._id,
        productName: newReview.productName,
        created_at: new Date().toISOString(),
        status: 'pending' 
      };
      memoryTransactions = [reward, ...memoryTransactions];
      
      return { data: newReview };
    }

    // [보완] 신뢰도 점수 알고리즘 (발표자료 17p 반영)
    // Trust Score = (Helpful / Total) * 100 + Verified(+10) + Image(+5) - Report(-5)
    if (url === '/reviews/vote') {
      const { reviewId, voteType } = body;
      const reviewIndex = memoryReviews.findIndex(r => r._id === reviewId);
      
      if (reviewIndex > -1) {
        const review = memoryReviews[reviewIndex];
        
        if (voteType === 'helpful') review.helpfulVotes += 1;
        else review.notHelpfulVotes += 1;
        
        // 알고리즘 적용
        const totalVotes = review.helpfulVotes + review.notHelpfulVotes;
        let baseScore = totalVotes > 0 ? (review.helpfulVotes / totalVotes) * 100 : 50;
        
        // 가산점
        if (review.verifiedPurchase) baseScore += 10;
        if (review.images && review.images.length > 0) baseScore += 5;
        
        // 점수 클램핑 (0~100)
        review.trustScore = Math.min(Math.max(Math.floor(baseScore), 0), 100);
      }
      return { data: { success: true } };
    }

    return { data: { success: true } };
  }
};