import { createReducer } from 'typesafe-actions';

import { resetNickname, updateNickname } from '@/modules/nickname/actions';

import { NicknameType, NicknameAction } from '@/modules/nickname/types';

const initialState: NicknameType = {
  nickname: '',
};

const nickname = createReducer<NicknameType, NicknameAction>(initialState)
  .handleAction(resetNickname, () => ({
    ...initialState,
  }))
  .handleAction(updateNickname, (state, { payload: nickname }) => ({
    ...state,
    nickname,
  }));

export default nickname;
