import { createReducer } from 'typesafe-actions';

import {
  handleAnswerList,
  updateIsFilled,
  updateExamSchedule,
  registerExamInfo,
  initializeExamInfo,
  updateExamInfoId,
  editExamInfo,
  updateExamList,
  getMyExamListAsync,
} from '@/modules/survey/actions';
import { SurveyType, SurveyAction } from '@/modules/survey/types';

const date = new Date();

const initialState: SurveyType = {
  dailyQuota: 0,

  answerList: [],

  name: '',
  examInfoId: -1,
  examInfoList: [],

  year: date.getFullYear(),
  month: date.getMonth() + 1,
  date: date.getDate(),

  hour: date.getHours(),
  minute: date.getMinutes(),

  prepareTime: 0,

  isEdit: false,

  isFilledDate: false,
  isFilledTime: false,
  isFilledPrepareTime: false,

  getMyExamListSuccess: false,
  getMyExamListError: null,
};

const survey = createReducer<SurveyType, SurveyAction>(initialState)
  .handleAction(handleAnswerList, (state, { payload: answerList }) => ({
    ...state,
    answerList,
  }))
  .handleAction(updateIsFilled, (state, { payload: { target, isFilled } }) => ({
    ...state,
    [target]: isFilled,
  }))
  .handleAction(updateExamSchedule, (state, { payload: { target, value } }) => ({
    ...state,
    [target]: value,
  }))
  .handleAction(registerExamInfo, (state, { payload: { name, year, month, date, hour, minute, prepareTime } }) => ({
    ...state,
    examInfoList: state.examInfoList.concat({
      name,
      year,
      month,
      date,
      hour,
      minute,
      prepareTime,
    }),
  }))
  .handleAction(initializeExamInfo, (state) => ({
    ...state,
    name: '',
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    hour: new Date().getHours(),
    minute: new Date().getMinutes(),
    prepareTime: 0,
    isFilledDate: false,
    isFilledTime: false,
    isFilledPrepareTime: false,
  }))
  .handleAction(updateExamInfoId, (state, { payload: examInfoId }) => ({
    ...state,
    examInfoId,
  }))
  .handleAction(editExamInfo, (state, { payload: { examInfoId, ...examInfo } }) => ({
    ...state,
    examInfoList: state.examInfoList.map((info, index) => (index === examInfoId ? examInfo : info)),
  }))
  .handleAction(updateExamList, (state, { payload: examInfoList }) => ({
    ...state,
    examInfoList,
  }))
  .handleAction(getMyExamListAsync.success, (state, { payload: { exams: examInfoList } }) => ({
    ...state,
    examInfoList,
    getMyExamListSuccess: true,
    getMyExamListError: null,
  }))
  .handleAction(getMyExamListAsync.failure, (state, { payload: getMyExamListError }) => ({
    ...state,
    getMyExamListSuccess: false,
    getMyExamListError,
  }));

export default survey;
