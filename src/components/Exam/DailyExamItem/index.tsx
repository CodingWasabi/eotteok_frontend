import React from 'react';

import { colorList } from '@/lib/constants';

import InputBox from '@/components/Exam/InputBox';

import Text from '@/components/common/Text';

import { Theme } from '@/styles/Theme';

import { Container } from './style';

export interface IDailyExamItemProps {
  name: string;
  d_day: number;
  color: number;
  month: number;
  date: number;
}

const DailyExamItem = ({ name, month, date, d_day, color }: IDailyExamItemProps) => {
  return (
    <InputBox isFilled={false}>
      <Container>
        <Text fontSize={21} letterSpacing={-0.5}>
          {name.length > 13 ? `${name.substring(0, 14)}...` : name} :
        </Text>
        <Text fontSize={21} letterSpacing={-0.5} color={Theme.T_3}>
          {month} / {date}
        </Text>
        <Text fontSize={21} letterSpacing={-0.5} color={colorList[color - 1]}>
          {d_day === 0 ? 'D - day' : `D - ${d_day}`}
        </Text>
      </Container>
    </InputBox>
  );
};

export default DailyExamItem;
