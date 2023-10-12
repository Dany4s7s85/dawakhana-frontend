/* eslint-disable react-hooks/rules-of-hooks */
import { Fetch } from 'helpers/fetchWrapper';

const companyService = {
  _url: `${process.env.REACT_APP_COMPANIES_API_URL}-companies`,

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

export default companyService;
