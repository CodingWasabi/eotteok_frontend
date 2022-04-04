import { createAction } from 'typesafe-actions';

import { UpdateInfoType } from '@/modules/comment/types';

/**
 * 액션 타입
 */
const CHANGE_COMMENT = 'comment/CHANGE_COMMENT';
const UPDATE_COMMENT_INFO = 'comment/UPDATE_COMMENT_INFO';

/**
 * 액션 생성 함수
 */
export const changeComment = createAction(CHANGE_COMMENT)<string>();
export const updateCommentInfo = createAction(UPDATE_COMMENT_INFO)<UpdateInfoType>();
