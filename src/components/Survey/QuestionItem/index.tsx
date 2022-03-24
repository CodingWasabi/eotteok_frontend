import React from 'react';

import QuestionNumber from '@/components/Survey/QuestionNumber';

import { colorList } from '@/lib/constants';

import useSurvey from '@/hooks/useSurvey';

import { Wrapper, Img } from './style';

export interface IQuestionItemProps {
  selectedNumber: number;
  questionNumber: number;
  children: React.ReactText;
  onClickItem: () => void;
}

interface IClickedItem {
  selectedNumber: number;
  questionNumber: number;
}

const QuestionItem = ({ selectedNumber, questionNumber, children, onClickItem }: IQuestionItemProps) => {
  const survey = useSurvey();

  const isClickedItem = ({ selectedNumber, questionNumber }: IClickedItem) => {
    return selectedNumber === survey.answerList[questionNumber - 1];
  };

  return (
    <Wrapper
      isClicked={isClickedItem({ selectedNumber, questionNumber })}
      backgroundColor={colorList[selectedNumber - 1]}
      onClick={onClickItem}
    >
      <QuestionNumber backgroundColor={colorList[selectedNumber - 1]}>{selectedNumber}</QuestionNumber>
      <Img src={`images/survey/${questionNumber}/${selectedNumber}.png`} alt="캐릭터" />
      <span>{children}</span>
    </Wrapper>
  );
};

export default QuestionItem;
