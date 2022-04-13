import useSWR from 'swr';

import { getMe } from '@/lib/api/me';

const KEY = '/me';

const useMe = () => {
  const { data, error } = useSWR(KEY, getMe);

  return {
    me: data !== undefined && data,
    isLoading: !error && !data,
    error,
  };
};

export default useMe;
