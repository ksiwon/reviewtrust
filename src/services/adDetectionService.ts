import axios from 'axios';
import { Review, AdDetectionResult } from '../types';

const API_URL = 'https://api-startup101.xistoh.com/api/reviews/classify';

export const adDetectionService = {
  checkAdLikelihood: async (review: Review): Promise<AdDetectionResult> => {
    try {
      const payload = {
        review: {
          _id: review._id,
          title: review.title,
          content: review.content,
          category: review.category,
          rating: review.rating,
          authorId: review.authorId,
          author: review.author,
          verifiedPurchase: review.verifiedPurchase,
          helpfulVotes: review.helpfulVotes,
          notHelpfulVotes: review.notHelpfulVotes,
          trustScore: review.trustScore,
          tags: review.tags || [],
          sourcePlatform: review.sourcePlatform || 'ReviewTrust',
          isSponsored: review.isSponsored
        },
        options: {
          persist: true,
          includeReasons: true
        }
      };

      const response = await axios.post(API_URL, payload);
      return response.data;
    } catch (error) {
      console.error('Ad detection API error:', error);
      throw error;
    }
  }
};
