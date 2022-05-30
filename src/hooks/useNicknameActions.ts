import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { resetNickname, updateNickname } from '@/modules/nickname';

const useNicknameActions = () => {
  const dispatch = useDispatch();

  const dispatchResetNickname = useCallback(() => dispatch(resetNickname()), [dispatch]);
  const registerNickname = useCallback((nickname) => dispatch(updateNickname(nickname)), [dispatch]);

  return {
    dispatchResetNickname,
    registerNickname,
  };
};

export default useNicknameActions;
