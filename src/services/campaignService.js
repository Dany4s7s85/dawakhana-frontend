import { Fetch } from 'helpers/fetchWrapper';
import { useCancellablePromise } from 'helpers/promiseHandler';
import { useEffect, useState } from 'react';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};
const campaignService = {
  _url: `${process.env.REACT_APP_CAMPAIGNS_API_URL}-campaigns`,
  // HOOKS
  GetCampaigns(searchQuery, refetch) {
    const [campaigns, setCampaigns] = useState({});
    const { cancellablePromise } = useCancellablePromise();
    const [campaignStatus, setCampaignStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setCampaignStatus(STATUS.LOADING);
      cancellablePromise(this.getCampaigns(searchQuery))
        .then(res => {
          console.log({ res });
          setCampaigns(res);
          setCampaignStatus(STATUS.SUCCESS);
        })
        .catch(() => {
          console.log('in catch');
          setCampaignStatus(STATUS.ERROR);
        });
    }, [
      searchQuery?.page,
      searchQuery?.pageSize,
      searchQuery?.status,
      searchQuery?.searchText,
      searchQuery?.getAll,
      refetch,
    ]);
    return {
      campaigns_loading: campaignStatus === STATUS.LOADING,
      campaigns_error: campaignStatus === STATUS.ERROR ? campaignStatus : '',
      campaigns_data: campaigns,
    };
  },
  // apis
  async createCampaign(payload) {
    let res = await Fetch.post(`${this._url}/campaign`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async getCampaigns({ searchText, getAll = false, page = 1, pageSize = 10, status }) {
    let res = await Fetch.get(
      `${this._url}/campaign?searchText=${searchText}&getAll=${getAll}&page=${page}&itemsPerPage=${pageSize}&status=${status}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};
export default campaignService;
