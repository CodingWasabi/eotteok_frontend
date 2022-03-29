import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type SurveyAction = ActionType<typeof actions>;

export type AnswerListType = Array<number>;

export type ExamInfoType = {
  exam: string;

  year: number;
  month: number;
  date: number;

  hour: number;
  minute: number;

  prepareTime: number;
};

export type SurveyType = {
  answerList: AnswerListType;

  exam: string;
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
};

export type ExamInfoListType = Array<ExamInfoType>;

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
