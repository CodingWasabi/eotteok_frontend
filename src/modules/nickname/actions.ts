import { createAction } from 'typesafe-actions';

/**
 * 액션 타입
 */
const UPDATE_NICKNAME = 'nickname/UPDATE_NICKNAME';

/**
 * 액션 생성 함수
 */
export const updateNickname = createAction(UPDATE_NICKNAME)<string>();
