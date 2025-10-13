// src/styles/GlobalStyle.ts

import styled from 'styled-components';

// 테마 색상 정의
export const theme = {
  colors: {
    primary: '#A332FF',
    primaryLight: '#B855FF',
    primaryDark: '#8A29D7',
    secondary: '#3B82F6',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    info: '#3B82F6',
    
    // 그레이 스케일
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
    
    // 신뢰도 점수 색상
    trust: {
      excellent: '#10B981', // 90-100
      good: '#3B82F6',      // 70-89
      fair: '#F59E0B',      // 50-69
      poor: '#EF4444',      // 0-49
    },
    
    white: '#FFFFFF',
    black: '#000000',
    
    // 배경 색상
    background: {
      primary: '#FFFFFF',
      secondary: '#F9FAFB',
      tertiary: '#F3F4F6',
    },
    
    // 보라색 계열
    purple: {
      50: '#FAF5FF',
      100: '#F3E8FF',
      200: '#E9D5FF',
      300: '#D8B4FE',
      400: '#C084FC',
      500: '#A855F7',
      600: '#9333EA',
      700: '#7E22CE',
      800: '#6B21A8',
      900: '#581C87',
    },
    
    // 블루 계열
    blue: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A',
    },
    
    // 그린 계열
    green: {
      50: '#F0FDF4',
      100: '#DCFCE7',
      200: '#BBF7D0',
      300: '#86EFAC',
      400: '#4ADE80',
      500: '#22C55E',
      600: '#16A34A',
      700: '#15803D',
      800: '#166534',
      900: '#14532D',
    },
    
    // 레드 계열
    red: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      200: '#FECACA',
      300: '#FCA5A5',
      400: '#F87171',
      500: '#EF4444',
      600: '#DC2626',
      700: '#B91C1C',
      800: '#991B1B',
      900: '#7F1D1D',
    },
  },
  
  typography: {
    fontFamily: {
      primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      secondary: 'Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '80px',
    '5xl': '96px',
  },
  
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px',
  },
  
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
};

// 공통 컨테이너
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 ${theme.spacing.md};
  }
`;

export const Section = styled.section`
  margin-bottom: ${theme.spacing['3xl']};
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[800]};
  margin-bottom: ${theme.spacing.lg};
  line-height: ${theme.typography.lineHeight.tight};
`;

export const SectionSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing.xl};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

// 공통 버튼
export const Button = styled.button<{ 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  
  padding: ${props => {
    switch (props.size) {
      case 'sm': return '8px 16px';
      case 'lg': return '16px 32px';
      default: return '12px 24px';
    }
  }};
  
  font-size: ${props => {
    switch (props.size) {
      case 'sm': return theme.typography.fontSize.sm;
      case 'lg': return theme.typography.fontSize.lg;
      default: return theme.typography.fontSize.base;
    }
  }};
  
  font-weight: ${theme.typography.fontWeight.semibold};
  font-family: ${theme.typography.fontFamily.primary};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  line-height: ${theme.typography.lineHeight.none};
  
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background-color: ${theme.colors.gray[200]};
          color: ${theme.colors.gray[800]};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.gray[300]};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.purple[50]};
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: ${theme.colors.gray[700]};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.gray[100]};
          }
        `;
      case 'danger':
        return `
          background-color: ${theme.colors.danger};
          color: ${theme.colors.white};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.red[600]};
          }
        `;
      default:
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primaryDark};
          }
        `;
    }
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.purple[100]};
  }
`;

// 공통 카드
export const Card = styled.div<{ hoverable?: boolean }>`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.base};
  overflow: hidden;
  transition: all 0.2s ease;
  
  ${props => props.hoverable && `
    cursor: pointer;
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.lg};
    }
  `}
`;

// 배지
export const Badge = styled.span<{ 
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => {
    switch (props.size) {
      case 'sm': return '2px 8px';
      case 'lg': return '8px 16px';
      default: return '4px 12px';
    }
  }};
  font-size: ${props => {
    switch (props.size) {
      case 'sm': return theme.typography.fontSize.xs;
      case 'lg': return theme.typography.fontSize.base;
      default: return theme.typography.fontSize.sm;
    }
  }};
  font-weight: ${theme.typography.fontWeight.semibold};
  border-radius: ${theme.borderRadius.full};
  white-space: nowrap;
  line-height: ${theme.typography.lineHeight.none};
  
  ${props => {
    switch (props.variant) {
      case 'success':
        return `
          background-color: ${theme.colors.success};
          color: ${theme.colors.white};
        `;
      case 'warning':
        return `
          background-color: ${theme.colors.warning};
          color: ${theme.colors.white};
        `;
      case 'danger':
        return `
          background-color: ${theme.colors.danger};
          color: ${theme.colors.white};
        `;
      case 'info':
        return `
          background-color: ${theme.colors.info};
          color: ${theme.colors.white};
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.gray[200]};
          color: ${theme.colors.gray[800]};
        `;
      default:
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
        `;
    }
  }}
`;

// 입력 필드
export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.base};
  font-family: ${theme.typography.fontFamily.primary};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.2s ease;
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray[800]};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.purple[100]};
  }
  
  &::placeholder {
    color: ${theme.colors.gray[400]};
  }
  
  &:disabled {
    background-color: ${theme.colors.gray[100]};
    cursor: not-allowed;
    color: ${theme.colors.gray[500]};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.base};
  font-family: ${theme.typography.fontFamily.primary};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.2s ease;
  resize: vertical;
  min-height: 120px;
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray[800]};
  line-height: ${theme.typography.lineHeight.relaxed};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px ${theme.colors.purple[100]};
  }
  
  &::placeholder {
    color: ${theme.colors.gray[400]};
  }
  
  &:disabled {
    background-color: ${theme.colors.gray[100]};
    cursor: not-allowed;
    color: ${theme.colors.gray[500]};
  }
`;

// 그리드 레이아웃
export const Grid = styled.div<{ columns?: number; gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  gap: ${props => props.gap || theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

// 로딩 스피너
export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid ${theme.colors.gray[200]};
  border-top-color: ${theme.colors.primary};
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing['2xl']};
  min-height: 200px;
`;

// 빈 상태 메시지
export const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing['3xl']} ${theme.spacing.lg};
  color: ${theme.colors.gray[500]};
`;

export const EmptyStateIcon = styled.div`
  font-size: ${theme.typography.fontSize['5xl']};
  margin-bottom: ${theme.spacing.md};
`;

export const EmptyStateText = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[600]};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

// Flexbox 유틸리티
export const Flex = styled.div<{
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  align?: 'start' | 'end' | 'center' | 'stretch';
  gap?: string;
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => {
    switch (props.justify) {
      case 'start': return 'flex-start';
      case 'end': return 'flex-end';
      case 'center': return 'center';
      case 'between': return 'space-between';
      case 'around': return 'space-around';
      default: return 'flex-start';
    }
  }};
  align-items: ${props => {
    switch (props.align) {
      case 'start': return 'flex-start';
      case 'end': return 'flex-end';
      case 'center': return 'center';
      case 'stretch': return 'stretch';
      default: return 'flex-start';
    }
  }};
  gap: ${props => props.gap || '0'};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
`;

// 구분선
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.gray[200]};
  margin: ${theme.spacing.lg} 0;
`;