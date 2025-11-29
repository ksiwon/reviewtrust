// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiClient } from '../api/client';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: () => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

// 로그인 응답 데이터 타입 정의
interface LoginResponse {
  user: User;
  token: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedAuth = localStorage.getItem('isLoggedIn');
        if (storedAuth === 'true') {
          const response = await apiClient.get('/users/me');
          // Error 1 해결: response.data를 User로 단언
          setUser(response.data as User);
        }
      } catch (error) {
        console.error("Auth check failed", error);
        localStorage.removeItem('isLoggedIn');
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.post('/auth/login', {});
      // Error 2 해결: response.data를 LoginResponse로 단언하여 user 속성에 접근 가능하게 함
      const data = response.data as LoginResponse;
      setUser(data.user);
      localStorage.setItem('isLoggedIn', 'true');
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};