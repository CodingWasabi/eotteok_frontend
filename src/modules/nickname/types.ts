import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type NicknameAction = ActionType<typeof actions>;

export type NicknameType = {
  nickname: string;
};
