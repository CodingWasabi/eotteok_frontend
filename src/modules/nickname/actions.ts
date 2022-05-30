import { createAction } from 'typesafe-actions';

/**
 * 액션 타입
 */
const RESET_NICKNAME = 'nickname/RESET_NICKNAME';
const UPDATE_NICKNAME = 'nickname/UPDATE_NICKNAME';

/**
 * 액션 생성 함수
 */
export const resetNickname = createAction(RESET_NICKNAME)();
export const updateNickname = createAction(UPDATE_NICKNAME)<string>();
