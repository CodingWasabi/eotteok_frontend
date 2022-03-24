import React, { useState, useEffect } from 'react';

import ProgressBar from '@/components/Survey/ProgressBar';
import QuestionSelection from '@/components/Survey/QuestionSelection';

import AppLayout from '@/components/common/AppLayout';

import { Body } from './style';

const SurveyPage = () => {
  const [percentage, setPercentage] = useState<number>(0);
  const [progressStep, setProgressStep] = useState<number>(0);

  useEffect(() => {
    setPercentage((progressStep / 5) * 100);
  }, [progressStep]);

  return (
    <AppLayout>
      <Body>
        <ProgressBar percentage={percentage} />
        <QuestionSelection progressStep={progressStep} setProgressStep={setProgressStep} />
      </Body>
    </AppLayout>
  );
};

export default SurveyPage;
``;
