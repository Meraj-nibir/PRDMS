
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Replace with your NestJS API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchUserProfile = async (userId) => {
  const response = await api.get(`/profile/${userId}`);
  return response.data.profile;
};

export const updateProfile = async (userId, updatedProfile) => {
  const response = await api.put(`/profile/${userId}`, updatedProfile);
  return response.data;
};

export const deleteProfile = async (userId) => {
  const response = await api.delete(`/profile/${userId}`);
  return response.data;
};

export const updateProfilePhoto = async (userId, profilePhotoFile) => {
    const formData = new FormData();
    formData.append('profilePhoto', profilePhotoFile);
  
    const response = await api.put(`/profile/photo/${userId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  };
  
  export const enableTwoStepVerification = async (userId) => {
    const response = await api.put(`/profile/two-step/${userId}`);
    return response.data;
  };
