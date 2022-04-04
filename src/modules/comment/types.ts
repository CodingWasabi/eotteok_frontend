import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CommentAction = ActionType<typeof actions>;

export type UpdateInfoType = {
  target: string;
  value: string | number;
};

export type CommentType = {
  comment: string;

  selectedCharacterNumber: number;
};
