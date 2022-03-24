import { createReducer } from 'typesafe-actions';

import { handleAnswerList } from '@/modules/survey/actions';
import { SurveyType, SurveyAction } from '@/modules/survey/types';

const initialState: SurveyType = {
  answerList: [],
  subjectInfoList: [],
};

const survey = createReducer<SurveyType, SurveyAction>(initialState).handleAction(
  handleAnswerList,
  (state, action) => ({
    ...state,
    answerList: action.payload,
  }),
);

export default survey;
