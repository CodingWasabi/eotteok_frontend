import React, { useState, useEffect } from 'react';

import useSurvey from '@/hooks/useSurvey';
import useWarngingExit from '@/hooks/useWarningExit';

import ProgressBar from '@/components/Survey/ProgressBar';
import QuestionSelection from '@/components/Survey/QuestionSelection';

import ExamItem from '@/components/Exam/ExamItem';

import AppLayout from '@/components/common/AppLayout';
import Button from '@/components/common/Button';

import { ExamInfoType } from '@/modules/survey';

import { Body, ExamInfoListWrapper, ExamListContainer, TextWrapper } from './style';

const SurveyPage = () => {
  const { examInfoList, isEdit, examInfoId } = useSurvey();

  const [percentage, setPercentage] = useState<number>(0);
  const [progressStep, setProgressStep] = useState<number>(0);

  useEffect(() => {
    setPercentage((progressStep / 5) * 100);
  }, [progressStep]);

  useWarngingExit();

  return (
    <AppLayout>
      <Body>
        <ProgressBar percentage={percentage} />
        <QuestionSelection progressStep={progressStep} setProgressStep={setProgressStep} />
      </Body>
      {progressStep === 4 && (
        <ExamInfoListWrapper>
          {examInfoList.length > 0 ? (
            <ExamListContainer>
              {examInfoList.map((exam: ExamInfoType, index: number) => (
                <ExamItem key={index} id={index} isEdit={isEdit} isSelected={examInfoId === index}>
                  {exam.exam}
                </ExamItem>
              ))}
            </ExamListContainer>
          ) : (
            <TextWrapper>
              시험정보를 등록하면 <br />
              리스트를 볼 수 있어요!
            </TextWrapper>
          )}
          <Button variant="M_2">넘기시지</Button>
        </ExamInfoListWrapper>
      )}
    </AppLayout>
  );
};

export default SurveyPage;
``;
