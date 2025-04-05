import apiClient from './apiClient';
import { 
  LoginRequest, 
  LoginResponse,
  RegisterRequest,
  User,
  ChangePasswordRequest,
  PasswordResetRequest,
  PasswordResetConfirmRequest,
  ApiResponse
} from '../types';

// Base API URL - update this to match your backend
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

// Check if API is reachable - use this to diagnose connectivity issues
export const checkApiConnection = async (): Promise<boolean> => {
  try {
    await apiClient.get('/health-check');
    return true;
  } catch (error) {
    console.error('API server unreachable:', error);
    return false;
  }
};

// Clear any potentially invalid tokens
export const clearAuthState = (): void => {
  // This is a simple implementation that just clears local storage
  // You might need to handle additional cleanup depending on your auth strategy
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const login = async (data: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
  try {
    // Clear any existing token that might be causing issues
    clearAuthState();
    
    const response = await apiClient.post<LoginResponse>('/auth/login', data);
    // Save token to localStorage
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
    }
    return { data: response.data };
  } catch (error: any) {
    console.error('Login error:', error);
    return { 
      error: error.response?.data?.message || 'Failed to login',
    };
  }
};

export const register = async (data: RegisterRequest): Promise<ApiResponse<User>> => {
  try {
    const response = await apiClient.post<User>('/auth/register', data);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to register',
    };
  }
};

export const logout = async (): Promise<ApiResponse<null>> => {
  try {
    const response = await apiClient.post('/auth/logout');
    // Remove token from localStorage
    localStorage.removeItem('token');
    return { message: response.data?.message || 'Logged out successfully' };
  } catch (error: any) {
    // Still remove token even if the API call fails
    localStorage.removeItem('token');
    return { 
      error: error.response?.data?.message || 'Failed to logout',
      message: 'Logged out locally'
    };
  }
};

export const getCurrentUser = async (): Promise<ApiResponse<User>> => {
  try {
    const response = await apiClient.get<User>('/auth/me');
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to get user information',
    };
  }
};

export const updateUser = async (data: Partial<User>): Promise<ApiResponse<User>> => {
  try {
    const response = await apiClient.put<User>('/auth/me', data);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to update user information',
    };
  }
};

export const changePassword = async (data: ChangePasswordRequest): Promise<ApiResponse<null>> => {
  try {
    const response = await apiClient.post('/auth/change-password', data);
    return { message: response.data?.message || 'Password changed successfully' };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to change password',
    };
  }
};

export const verifyEmail = async (token: string): Promise<ApiResponse<null>> => {
  try {
    const response = await apiClient.post(`/auth/verify-email/${token}`);
    return { message: response.data?.message || 'Email verified successfully' };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to verify email',
    };
  }
};

export const requestPasswordReset = async (data: PasswordResetRequest): Promise<ApiResponse<null>> => {
  try {
    const response = await apiClient.post('/auth/request-password-reset', data);
    return { message: response.data?.message || 'Password reset email sent' };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to request password reset',
    };
  }
};

export const resetPassword = async (token: string, data: PasswordResetConfirmRequest): Promise<ApiResponse<null>> => {
  try {
    const response = await apiClient.post(`/auth/reset-password/${token}`, data);
    return { message: response.data?.message || 'Password reset successfully' };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to reset password',
    };
  }
};
