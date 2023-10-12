/* eslint-disable react-hooks/rules-of-hooks */
import { getCookie, setCookie } from 'helpers/common';
import { Fetch } from 'helpers/fetchWrapper';

const authService = {
  _url: `${process.env.REACT_APP_USERS_API_URL}-users`,
  _redirectTo(redirectTo) {
    if (typeof redirectTo !== 'undefined') {
      setCookie(process.env.REACT_APP_REDIRECT_TO_COOKIE, redirectTo);
      return;
    }
    // eslint-disable-next-line consistent-return
    return getCookie(process.env.REACT_APP_REDIRECT_TO_COOKIE);
  },
  async signUp(payload) {
    let res = await Fetch.post(`${this._url}/sign-up`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }

    const { message, error } = await res.json();
    return { message, error } ?? 'Something went wrong';
  },
  async login(payload) {
    let res = await Fetch.post(`${this._url}/sign-in`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async forgotPassword(payload) {
    let res = await Fetch.post(`${this._url}/forgot-password`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async removeAdminJwt() {
    let res = await Fetch.delete(`${this._url}/POS/auth/logout`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getCurrentAdmin() {
    let res = await Fetch.get(`${this._url}/POS/auth/perms`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getCurrentUser() {
    let res = await Fetch.get(`${this._url}/me`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async createCompanyProfile(payload) {
    let res = await Fetch.post(`${this._url}/company`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};

export default authService;
