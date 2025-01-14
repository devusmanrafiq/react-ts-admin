import axios from 'axios';

import { IAuthModel, ISignInForm } from './_models';

const GET_USER_BY_ACCESS_TOKEN_URL = 'admin/auth/verify-token';
const LOGIN_URL = 'admin/auth/login';

export function login(body: ISignInForm) {
  return axios.post<IAuthModel>(LOGIN_URL, body);
}

export function getUserByToken(token: string) {
  return axios.get(GET_USER_BY_ACCESS_TOKEN_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
