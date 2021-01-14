import API from './API';
import { StorageGetToken } from 'utils/Storage';

export const init = () => {
  return API.get(`/auth/normal/v1/init/validate`);
};

export const login = (req: any) => {
  return API.post(`/api/v1/auth/token/`, req);
};

export const refreshToken = async () => {
  const token = await StorageGetToken();
  return API.post(`/api/v1/user/refresh/`, token);
};

export const signup = (req: any) => {
  return API.post(`/api/v1/auth/signup/`, req);
};

export const validation = (req: any) => {
  return API.get(`/api/v1/auth/validation/`, req);
};

export const socialLogin = (req: any) => {
  return API.post(`/api/v1/user/social_login/`, req);
};
