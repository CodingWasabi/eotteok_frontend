import { createAction } from 'typesafe-actions';

/**
 * 액션 타입
 */
const HANDLE_ANSWER_LIST = 'survey/HANDLE_ANSWER_LIST';

/**
 * 액션 생성 함수
 */
export const handleAnswerList = createAction(HANDLE_ANSWER_LIST)<Array<number>>();
