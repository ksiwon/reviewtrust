// src/types/index.ts

export interface Review {
  _id: string;
  title: string;
  content: string;
  author: string;
  authorId: string;
  category: string;
  rating: number;
  productName: string;
  productBrand?: string;
  imageUrl: string;
  images?: string[];
  created_at: string;
  updated_at?: string;
  trustScore: number; // 0-100 신뢰도 점수
  helpfulVotes: number;
  notHelpfulVotes: number;
  verifiedPurchase: boolean;
  purchaseDate?: string;
  usagePeriod?: string;
  pros?: string[];
  cons?: string[];
  tags?: string[];
  isSponsored: boolean;
  views: number;
  sourcePlatform?: 'ReviewTrust' | 'Naver' | 'Coupang' | '11st'; 
  originalUrl?: string; 
}

export interface TopReviewer {
  _id: string;
  nickname: string;
  trustScore: number;
  reviewCount: number;
  rewardPoints: number;
  totalHelpfulVotes: number;
  memberSince: string;
  badges?: string[];
  profileImage?: string;
}

export interface User {
  _id: string;
  username: string;
  nickname: string;
  email: string;
  profileImage?: string;
  trustScore: number;
  rewardPoints: number;
  reviewCount: number;
  totalHelpfulVotes: number;
  memberSince: string;
  badges?: string[];
}

export interface Category {
  value: string;
  label: string;
  icon: string;
}

export interface VoteHistory {
  reviewId: string;
  voteType: 'helpful' | 'notHelpful';
  votedAt: string;
}

export interface Reward {
  _id: string;
  userId: string;
  reviewId: string;
  points: number;
  reason: string;
  created_at: string;
}

export interface RewardTransaction {
  _id: string;
  userId: string;
  type: 'earn' | 'spend';
  points: number;
  reason: string;
  relatedReviewId?: string;
  productName?: string;
  created_at: string;
  status: 'pending' | 'completed';
}

export interface RewardTier {
  name: string;
  threshold: number;
  multiplier: number;
  color: string;
  benefits: string[];
}

export interface RewardCalculation {
  baseCredit: number;
  verificationBonus: number;
  imageBonus: number;
  priceBonus: number;
  ratingMultiplier: number;
  tierMultiplier: number;
  totalCredit: number;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface FilterOptions {
  category?: string;
  minRating?: number;
  maxRating?: number;
  verifiedOnly?: boolean;
  sortBy?: 'recent' | 'trustScore' | 'helpful' | 'rating' | 'reviewCount';
  keyword?: string;
}

export interface AdDetectionResult {
  requestId: string;
  reviewId: string;
  isAdLike: boolean;
  adScore: number;
  threshold: number;
  modelVersion: string;
  reasons: string[];
}