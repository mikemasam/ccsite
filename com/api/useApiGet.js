import { useState, useEffect } from 'react';
import useApi from '@com/api/useApi';
export default function useAPiGet({ autoLoad = true, url, params }){
  const initialState = { total: 1, per_page: 15, results: [], loading: undefined }
  const [data, setData] = useState(initialState);
  const api = useApi();
  const load = (_params) => {
    setData(v => ({ ...v, loading: true }));
    api.get(url, { params: { ...params, ..._params } }).then(res => {
      if(res?.success){
        setData(v => ({ ...v, ...res.data, loading: false }));
      }else{
        setData(v => ({ ...v, loading: false }));
      }
    });
  }
  const reset = (state) => {
    setData({ ...initialState, ...state });
  }
  useEffect(() => {
    if(autoLoad) load();
  },[url]);
  const paginate = page => {
    load({ page });
  };
  const setLoading = (loading) => {
    setData(v => ({ ...v, loading }));
  }
  return { api, data, load, paginate, reset, setLoading };
}
