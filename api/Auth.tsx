import Axios from "./_public";
import AxiosPermission from "./_permission";
import { StorageGetToken } from "utils/Storage";

const CLIENT_ID = "5NELzkaOdaYKQOBjUS5VWBOa9Cpny7Kgi3KZISJE";

export const init = () => {
  return AxiosPermission.get(`/auth/normal/v1/init/validate`);
};

export const login = (formdata: any) => {
  formdata.append("client_id", CLIENT_ID);
  formdata.append("grant_type", "password");

  const headers = {
    "Content-Type": "multipart/form-data",
  };
  return Axios.post(`/api/v1/auth/token/`, formdata, {
    headers: headers,
  });
};

export const refreshToken = async () => {
  const { accessToken, refreshToken } = await StorageGetToken();

  const formdata = new FormData();
  formdata.append("grant_type", "refresh_token");
  formdata.append("refresh_token", refreshToken);
  formdata.append("client_id", CLIENT_ID);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "multipart/form-data",
  };
  return Axios.post(`/api/v1/auth/token/`, formdata, {
    headers: headers,
  });
};

export const signup = (req: any) => {
  return Axios.post(`/api/v1/auth/signup/`, req);
};

export const validation = (req: any) => {
  return Axios.get(`/api/v1/auth/validation/`, req);
};

export const social_login = (formdata: any) => {
  formdata.append("grant_type", "convert_token");
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  return Axios.post(`/api/v1/auth/social-login/`, formdata, {
    headers: headers,
  });
};
