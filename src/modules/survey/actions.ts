import { createAction } from 'typesafe-actions';

import { IsFilledType, ExamScheduleType, ExamInfoType, ExamInfoIdType } from '@/modules/survey';

/**
 * 액션 타입
 */
const HANDLE_ANSWER_LIST = 'survey/HANDLE_ANSWER_LIST';
const UPDATE_IS_FILLED = 'survey/UPDATE_IS_FILLED';
const UPDATE_EXAM_SCHEDULE = 'survey/UPDATE_EXAM_SCHEDULE';
const REGISTER_EXAM_INFO = 'survey/REGISTER_EXAM_INFO';
const INITIALIZE_EXAM_INFO = 'survey/INITIALIZE_EXAM_INFO';
const UPDATE_EXAM_INFO_ID = 'survey/UPDATE_EXAM_INFO_ID';
const EDIT_EXAM_INFO = 'survey/EDIT_EXAM_INFO';

/**
 * 액션 생성 함수
 */
export const handleAnswerList = createAction(HANDLE_ANSWER_LIST)<Array<number>>();
export const updateIsFilled = createAction(UPDATE_IS_FILLED)<IsFilledType>();
export const updateExamSchedule = createAction(UPDATE_EXAM_SCHEDULE)<ExamScheduleType>();
export const registerExamInfo = createAction(REGISTER_EXAM_INFO)<ExamInfoType>();
export const initializeExamInfo = createAction(INITIALIZE_EXAM_INFO)();
export const updateExamInfoId = createAction(UPDATE_EXAM_INFO_ID)<number>();
export const editExamInfo = createAction(EDIT_EXAM_INFO)<ExamInfoType & ExamInfoIdType>();
