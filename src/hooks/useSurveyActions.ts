import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { handleAnswerList } from '@/modules/survey';
import { AnswerListType, SubjectInfoListType } from '@/modules/survey';

interface IUseSurveyActionsProps {
  answerList?: AnswerListType;
  subjectInfoList?: SubjectInfoListType;
}

const useSurveyActions = ({ answerList = [], subjectInfoList = [] }: IUseSurveyActionsProps) => {
  const dispatch = useDispatch();

  const onClickAnswer = useCallback(() => dispatch(handleAnswerList(answerList)), [dispatch, answerList]);

  return { onClickAnswer };
};

export default useSurveyActions;
