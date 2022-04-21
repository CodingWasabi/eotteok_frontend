import { ActionType } from 'typesafe-actions';
import { AxiosError } from 'axios';

import * as actions from './actions';

export type SurveyAction = ActionType<typeof actions>;

export type AnswerListType = Array<number>;

export type ExamInfoType = {
  name: string;

  year: number;
  month: number;
  date: number;

  hour: number;
  minute: number;

  prepareTime: number;
};

export type SurveyType = {
  dailyQuota: number;

  answerList: AnswerListType;

  name: string;
  examInfoId: number;
  examInfoList: ExamInfoListType;

  year: number;
  month: number;
  date: number;

  hour: number;
  minute: number;

  prepareTime: number;

  isEdit: boolean;

  isFilledDate: boolean;
  isFilledTime: boolean;
  isFilledPrepareTime: boolean;

  getMyExamListSuccess: boolean;
  getMyExamListError: AxiosError | null;
};

export type ExamInfoListType = Array<ExamInfoType>;

export type GetExamInfoListType = {
  exams: ExamInfoListType;
};

export type IsFilledType = {
  target: string;
  isFilled: boolean;
};

export type ExamScheduleType = {
  target: string;
  value: number;
};

export type ExamInfoIdType = {
  examInfoId: number;
};
