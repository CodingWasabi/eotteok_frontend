import React from 'react';

import { colorList } from '@/lib/constants';

import { Wrapper, ColorTag, InfoWrapper, Exam, Time } from './style';

export interface IExamTimeProps {
  color: number;
  exam: string;
  time: number;
}

const ExamTime = ({ color, exam, time }: IExamTimeProps) => {
  return (
    <Wrapper>
      <ColorTag color={colorList[color]} />
      <InfoWrapper>
        <Exam>{exam}</Exam>
        <Time>{time} 시간</Time>
      </InfoWrapper>
    </Wrapper>
  );
};

export default ExamTime;
