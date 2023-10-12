import { useEffect, useState } from 'react';
import { Fetch } from '../helpers/fetchWrapper';
import { useCancellablePromise } from '../helpers/promiseHandler';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};
const brandService = {
  _url: `${process.env.REACT_APP_USERS_API_URL}-users`,
  async health() {
    const res = await Fetch.get(`${this._url}/health`);
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  GetUsers(searchQuery, refetch) {
    const [brandUsers, setBrandUsers] = useState({
      brandUsers: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getBrandUsers(searchQuery))
        .then(res => {
          setBrandUsers(res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [
      searchQuery.page,
      searchQuery.pageSize,
      searchQuery.searchText,
      searchQuery.getAll,
      searchQuery.status,
      refetch,
    ]);
    return {
      brand_users_loading: status === STATUS.LOADING,
      brand_users_error: status === STATUS.ERROR ? status : '',
      brand_users_data: brandUsers,
    };
  },
  GetUserDetails(id, refetch) {
    const [brandUsers, setBrandUsers] = useState({
      brandUsers: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getBrandUserDetails(id))
        .then(res => {
          setBrandUsers(res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [id, refetch]);
    return {
      brand_users_loading: status === STATUS.LOADING,
      brand_users_error: status === STATUS.ERROR ? status : '',
      brand_users_data: brandUsers,
    };
  },
  async getBrandUsers({ page = 1, pageSize = 10, searchText = '', getAll = true, status = '' }) {
    const res = await Fetch.get(
      `${this._url}/company-user?page=${page}&itemsPerPage=${pageSize}&getAll=${getAll},&status=${status}&searchText=${searchText}`,
    );
    if (res.status >= 200 && res.status < 300) {
      const { items: brandUsers, totalItems } = await res.json();
      return {
        brandUsers,
        totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async deleteBrandUser(id, company_id) {
    const res = await Fetch.delete(`${this._url}/company-user/${id}/${company_id}`);
    if (res.status >= 200 && res.status < 300) {
      const response = await res.json();
      return response;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async CreateBrandUser(payload) {
    const res = await Fetch.post(`${this._url}/company-user`, payload);
    if (res.status >= 200 && res.status < 300) {
      const response = await res.json();
      return response;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getBrandUserDetails(id) {
    const res = await Fetch.get(`${this._url}/user-brand-details/${id}`);
    if (res.status >= 200 && res.status < 300) {
      const response = await res.json();
      return { brandUsers: response?.brands, totalItems: response?.brands?.length };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async updateBrandUser(id, payload) {
    const res = await Fetch.put(`${this._url}/company-user/${id}`, payload);
    if (res.status >= 200 && res.status < 300) {
      const response = await res.json();
      return response;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};
export default brandService;
