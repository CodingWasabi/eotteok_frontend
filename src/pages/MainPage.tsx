import React, { useState } from 'react';

import { questionList, delayedTimeList } from '@/lib/constants';

import QuestionItem from '@/components/Survey/QuestionItem';
import Title from '@/components/Survey/Title';

import DelayedTime from '@/components/Exam/DelayedTime';

import Input from '@/components/Comment/Input';
import CharacterSelection from '@/components/Comment/CharacterSelection';
import CommentInput from '@/components/Comment/CommentInput';

import Icon from '@/components/Icon';

const MainPage = () => {
  const [clickedQuestionNumber, setClickedQuestionNumber] = useState<number>(0);
  const [clickedDelayedTimeNumber, setClickedDelayedTimeNumber] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const init = clickedDelayedTimeNumber === 0;

  const onClickQuestion = (number: number) => {
    setClickedQuestionNumber(number);
  };

  const onClickDelayedTime = (number: number) => {
    setClickedDelayedTimeNumber(number);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onClickButton = () => {};

  return (
    <div>
      {questionList.map(({ title, question }) => (
        <>
          <Title>{title}</Title>
          {question.map((item, index) => (
            <QuestionItem
              number={index + 1}
              clickedQuestionNumber={clickedQuestionNumber}
              onClickItem={() => onClickQuestion(index + 1)}
            >
              {item}
            </QuestionItem>
          ))}
        </>
      ))}
      <CharacterSelection />

      {delayedTimeList.map((time, index) => (
        <DelayedTime
          init={init}
          number={index + 1}
          clickedDelayedTimeNumber={clickedDelayedTimeNumber}
          onClickItem={() => onClickDelayedTime(index + 1)}
        >
          {time}
        </DelayedTime>
      ))}
      <Icon icon="Arrow" color="#8E8E93" rotate={270} width={12} height={7} />
      <Input value={comment} onChangeInput={onChangeInput} onClickButton={onClickButton} />
      <CommentInput value={comment} onChangeInput={onChangeInput} onClickButton={onClickButton} />
    </div>
  );
};

export default MainPage;
