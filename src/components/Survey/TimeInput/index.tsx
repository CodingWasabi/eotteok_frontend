import React from 'react';

import useSurvey from '@/hooks/useSurvey';
import useSurveyActions from '@/hooks/useSurveyActions';

import { StyledInput } from './style';

const TimeInput = () => {
  const { dailyQuota } = useSurvey();
  const { updateExamScheduleInfo } = useSurveyActions();

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateExamScheduleInfo({ target: 'dailyQuota', value: Number(e.target.value.replace(/[^0-9]/g, '')) });
  };

  return <StyledInput type="text" value={dailyQuota} onChange={onChangeValue} placeholder="숫자를 입력하세요" />;
};

export default TimeInput;
