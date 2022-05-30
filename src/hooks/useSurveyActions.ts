import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import {
  resetSurvey,
  handleAnswerList,
  updateIsFilled,
  updateExamSchedule,
  registerExamInfo,
  initializeExamInfo,
  updateExamInfoId,
  editExamInfo,
  updateExamList,
} from '@/modules/survey';

const useSurveyActions = () => {
  const dispatch = useDispatch();

  const dispatchResetSurvey = useCallback(() => dispatch(resetSurvey()), [dispatch]);
  const onClickAnswer = useCallback((answerList) => dispatch(handleAnswerList(answerList)), [dispatch]);
  const dispatchIsFilled = useCallback((isFilled) => dispatch(updateIsFilled(isFilled)), [dispatch]);
  const updateExamScheduleInfo = useCallback((schedule) => dispatch(updateExamSchedule(schedule)), [dispatch]);
  const registerExam = useCallback((info) => dispatch(registerExamInfo(info)), [dispatch]);
  const initExamInfo = useCallback(() => dispatch(initializeExamInfo()), [dispatch]);
  const dispatchExamInfoId = useCallback((id) => dispatch(updateExamInfoId(id)), [dispatch]);
  const editExam = useCallback((examInfo) => dispatch(editExamInfo(examInfo)), [dispatch]);
  const dispatchExamList = useCallback((examList) => dispatch(updateExamList(examList)), [dispatch]);

  return {
    dispatchResetSurvey,
    onClickAnswer,
    dispatchIsFilled,
    updateExamScheduleInfo,
    registerExam,
    initExamInfo,
    dispatchExamInfoId,
    editExam,
    dispatchExamList,
  };
};

export default useSurveyActions;
