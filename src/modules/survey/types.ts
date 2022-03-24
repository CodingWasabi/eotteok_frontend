import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type SurveyAction = ActionType<typeof actions>;

export type AnswerListType = Array<number>;

export type SubjectInfoType = {
  subject: string;
  date: string;
  time: string;
  prepareTime: string;
};

export type SubjectInfoListType = Array<SubjectInfoType>;

export type SurveyType = {
  answerList: AnswerListType;
  subjectInfoList: SubjectInfoListType;
};
