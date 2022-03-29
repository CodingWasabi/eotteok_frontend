import { useSelector } from 'react-redux';

import { RootState } from '@/modules';

const useNickname = () => {
  const nickname = useSelector((state: RootState) => state.nickname);
  return nickname;
};

export default useNickname;
