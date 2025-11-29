// src/api/reviewService.ts
import { apiClient } from './client';
import { Review, FilterOptions } from '../types';

export const reviewService = {
  getReviews: async (filters?: FilterOptions) => {
    const response = await apiClient.get('/reviews', filters);
    return response.data as Review[];
  },

  getReviewById: async (id: string) => {
    const response = await apiClient.get(`/reviews/${id}`);
    return response.data as Review;
  },

  createReview: async (formData: any) => {
    // 이미지 업로드 로직은 생략하고 메타데이터만 전송한다고 가정
    // 실제 구현 시 FormData 처리 필요
    const response = await apiClient.post('/reviews', formData);
    return response.data as Review;
  },

  voteReview: async (reviewId: string, voteType: 'helpful' | 'notHelpful') => {
    return apiClient.post('/reviews/vote', { reviewId, voteType });
  },

  getTransactions: async () => {
    const response = await apiClient.get('/rewards/transactions');
    return response.data;
  }
};