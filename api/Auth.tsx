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

export const register = (req: any) => {
  // TODO Request DATA From
  // {
  //   "email": "test@test.com",
  //   "emailToken": "41488bf35d9848d8e30e724451b84b148582cc0d",
  //   "phone": "01097979746",
  //   "phoneToken": "b6b9ee2ab8a652d18ed3b22ab3459fddadd0cea6",
  //   "password": "password!@#",
  //   "passwordConfirm": "password!@#"
  // }
  return API.post(`/api/v1/user/register/`, req);
};

export const emailVerifier = (req: any) => {
  return API.post(`/api/v1/user/email_verifier/`, req);
};
export const emailConfirm = (req: any) => {
  return API.post(`/api/v1/user/email_verifier/confirm/`, req);
};
export const phoneVerifier = (req: any) => {
  return API.post(`/api/v1/user/phone_verifier/`, req);
};
export const phoneConfirm = (req: any) => {
  return API.post(`/api/v1/user/phone_verifier/confirm/`, req);
};
export const nicknameConfirm = (req: any) => {
  return API.post(`/api/v1/user/nickname/confirm/`, req);
};
export const detail = () => {
  return API.get(`/api/v1/user/profile/`);
};

export const updateProfile = (formdata: any) => {
  return API.put(`/api/v1/user/profile/`, formdata);
};
