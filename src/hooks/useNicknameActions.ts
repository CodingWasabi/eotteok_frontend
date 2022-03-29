import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { updateNickname } from '@/modules/nickname';

const useNicknameActions = () => {
  const dispatch = useDispatch();

  const registerNickname = useCallback((nickname) => dispatch(updateNickname(nickname)), [dispatch]);

  return {
    registerNickname,
  };
};

export default useNicknameActions;
