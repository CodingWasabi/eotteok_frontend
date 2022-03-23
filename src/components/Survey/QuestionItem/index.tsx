import React, { Dispatch } from 'react';

import QuestionNumber from '@/components/Survey/QuestionNumber';

import { colorList } from '@/lib/constants';

import { Wrapper, Img } from './style';

export interface IQuestionItemProps {
  number: number;
  clickedQuestionNumber: number;
  children: React.ReactText;
  onClickItem: () => void;
}

const QuestionItem = ({ number, clickedQuestionNumber, children, onClickItem }: IQuestionItemProps) => {
  return (
    <Wrapper isClicked={clickedQuestionNumber === number} backgroundColor={colorList[number - 1]} onClick={onClickItem}>
      <QuestionNumber backgroundColor={colorList[number - 1]}>{number}</QuestionNumber>
      <Img src={`images/survey/1/${number}.png`} alt="캐릭터" />
      <span>{children}</span>
    </Wrapper>
  );
};

export default QuestionItem;
