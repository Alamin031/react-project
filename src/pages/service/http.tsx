/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
// /* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from "js-cookie";
import * as dotenv from 'dotenv';

dotenv.config();

export const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
const api = axios.create({
  baseURL: `${apiEndpoint}`,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use((req) => {
  const authToken = Cookies.get('authToken');
  if (authToken) {
    req.headers.Authorization = `Bearer ${JSON.parse(authToken)}`;
  }
  return req;
});

const responseBody = (response: any) => response?.data;
const errorBody = (error: any) => {
  if (error.response) {
    toast.error(error.response.data.message);
  } else {
    error.message && toast.error(error.message);
  }
  return {
    success: false,
  };
};

const requests = {
  get: (url: string) => api.get(url).then(responseBody),
  post: (url: string, body: any) => api.post(url, body).then(responseBody),
  put: (url: string, body: any) => api.put(url, body).then(responseBody),
  patch: (url: string, body: any) => api.patch(url, body).then(responseBody),
  del: (url: string) => api.delete(url).then(responseBody),
};
export default requests;
