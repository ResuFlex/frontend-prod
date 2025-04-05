'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { login, register, logout as apiLogout, AuthResponse } from '@/src/app/api/auth';
import { LoginCredentials, RegisterData } from '@/src/app/api/auth';
import { useNavigation } from '@/utils/navigation';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials, redirectPath?: string) => Promise<void>;
  register: (data: RegisterData, redirectPath?: string) => Promise<void>;
  logout: (redirectPath?: string) => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Storage keys
const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { navigate } = useNavigation();

  // Initialize auth state from localStorage
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem(TOKEN_KEY);
      const storedUser = localStorage.getItem(USER_KEY);
      
      if (storedToken && storedUser) {
        setToken(storedToken);
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          console.error('Failed to parse user data:', e);
          // Clear invalid data
          localStorage.removeItem(USER_KEY);
          localStorage.removeItem(TOKEN_KEY);
        }
      }
    } catch (err) {
      console.error('Error accessing localStorage:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save auth state to localStorage whenever it changes
  useEffect(() => {
    try {
      if (token && user) {
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
      }
    } catch (err) {
      console.error('Error updating localStorage:', err);
    }
  }, [token, user]);

  // Safe navigation function
  const safeNavigate = (path: string) => {
    if (path && typeof window !== 'undefined') {
      return navigate(path);
    }
    return false;
  };

  const clearError = () => setError(null);

  // Login handler
  const handleLogin = async (credentials: LoginCredentials, redirectPath?: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await login(credentials);
      setToken(response.token);
      setUser(response.user);
      if (redirectPath) {
        safeNavigate(redirectPath);
      }
    } catch (err: any) {
      const errorMessage = err?.message || 'An error occurred during login';
      setError(errorMessage);
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Register handler
  const handleRegister = async (data: RegisterData, redirectPath?: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await register(data);
      setToken(response.token);
      setUser(response.user);
      if (redirectPath) {
        safeNavigate(redirectPath);
      }
    } catch (err: any) {
      const errorMessage = err?.message || 'An error occurred during registration';
      setError(errorMessage);
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Logout handler
  const handleLogout = async (redirectPath?: string) => {
    if (token) {
      setIsLoading(true);
      setError(null);
      try {
        await apiLogout(token);
      } catch (err: any) {
        console.error('Logout error:', err);
        // Continue with local logout even if API call fails
      } finally {
        setToken(null);
        setUser(null);
        setIsLoading(false);
        if (redirectPath) {
          safeNavigate(redirectPath);
        }
      }
    }
  };

  const value = {
    user,
    token,
    isAuthenticated: !!user,
    isLoading,
    error,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
