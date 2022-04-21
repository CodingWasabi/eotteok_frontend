import { createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import createRequestActionTypes from '@/lib/util/createRequestActionTypes';

import { IsFilledType, ExamScheduleType, ExamInfoType, ExamInfoIdType, GetExamInfoListType } from '@/modules/survey';

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
const UPDATE_EXAM_LIST = 'survey/UPDATE_EXAM_LIST';

/**
 * 사가 액션 타입
 */
export const [GET_EXAM_LIST, GET_EXAM_LIST_SUCCESS, GET_EXAM_LIST_FAILURE] =
  createRequestActionTypes('survey/GET_EXAM_LIST');

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
export const updateExamList = createAction(UPDATE_EXAM_LIST)<Array<ExamInfoType>>();

/**
 * 사가 생성 함수
 */
export const getMyExamListAsync = createAsyncAction(GET_EXAM_LIST, GET_EXAM_LIST_SUCCESS, GET_EXAM_LIST_FAILURE)<
  number,
  GetExamInfoListType,
  AxiosError
>();
