import apiClient from './apiClient';
import { UserProfile, ApiResponse } from '../types';

export const getUserProfile = async (): Promise<ApiResponse<UserProfile>> => {
  try {
    const response = await apiClient.get<UserProfile>('/profiles/me');
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to get user profile',
    };
  }
};

export const updateUserProfile = async (data: Partial<UserProfile>): Promise<ApiResponse<UserProfile>> => {
  try {
    const response = await apiClient.put<UserProfile>('/profiles/me', data);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to update user profile',
    };
  }
};

export const getUserProfileById = async (profileId: string): Promise<ApiResponse<UserProfile>> => {
  try {
    const response = await apiClient.get<UserProfile>(`/profiles/${profileId}`);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to get user profile',
    };
  }
};

export const updateUserProfileById = async (profileId: string, data: Partial<UserProfile>): Promise<ApiResponse<UserProfile>> => {
  try {
    const response = await apiClient.put<UserProfile>(`/profiles/${profileId}`, data);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to update user profile',
    };
  }
};

export const updateUserProfileByUserId = async (userId: string, data: Partial<UserProfile>): Promise<ApiResponse<UserProfile>> => {
  try {
    const response = await apiClient.put<UserProfile>(`/profiles/user/${userId}`, data);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to update user profile',
    };
  }
};
