import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import setCalendarRequestBody from '@/lib/util/setCalenderRequestBody';

import useCalendar from '@/hooks/useCalendar';
import useNickname from '@/hooks/useNickname';
import useSurvey from '@/hooks/useSurvey';

import useCalendarActions from '@/hooks/useCalendarActions';

import useWarngingExit from '@/hooks/useWarningExit';

import { ExamInfoType } from '@/modules/survey';
import { postCalendarAsync } from '@/modules/calendar';

import ProgressBar from '@/components/Survey/ProgressBar';
import QuestionSelection from '@/components/Survey/QuestionSelection';

import ExamItem from '@/components/Exam/ExamItem';

import AppLayout from '@/components/common/AppLayout';
import Button from '@/components/common/Button';

import { Body, ExamInfoListWrapper, ExamListContainer, TextWrapper } from './style';

const SurveyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dispatchTendency } = useCalendarActions();

  const { nickname } = useNickname();
  const { calendar, postCalendarError } = useCalendar();
  const { answerList, dailyQuota, examInfoList, isEdit, examInfoId } = useSurvey();

  const [percentage, setPercentage] = useState<number>(0);
  const [progressStep, setProgressStep] = useState<number>(0);

  useEffect(() => {
    setPercentage((progressStep / 5) * 100);
  }, [progressStep]);

  useWarngingExit();

  const onClickRegister = () => {
    const body = setCalendarRequestBody({ nickname, answerList, dailyQuota, examInfoList });

    dispatch(postCalendarAsync.request(body));
  };

  useEffect(() => {
    if (calendar.length > 0) {
      navigate('/result');
    }

    if (postCalendarError) {
      navigate('/error');
    }
  }, [calendar, postCalendarError]);

  return (
    <AppLayout>
      <Body>
        <ProgressBar percentage={percentage} />
        <QuestionSelection progressStep={progressStep} setProgressStep={setProgressStep} />
      </Body>
      {progressStep === 5 && (
        <ExamInfoListWrapper>
          {examInfoList.length > 0 ? (
            <ExamListContainer>
              {examInfoList.map((exam: ExamInfoType, index: number) => (
                <ExamItem key={index} id={index} isEdit={isEdit} isSelected={examInfoId === index}>
                  {exam.name}
                </ExamItem>
              ))}
            </ExamListContainer>
          ) : (
            <TextWrapper>
              시험정보를 등록하면 <br />
              리스트를 볼 수 있어요!
            </TextWrapper>
          )}
          <Button variant="M_2" onClick={onClickRegister}>
            넘기시지
          </Button>
        </ExamInfoListWrapper>
      )}
    </AppLayout>
  );
};

export default SurveyPage;
``;
