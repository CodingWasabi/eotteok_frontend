import React, { useState } from 'react';

import { questionList } from '@/lib/constants';

import QuestionItem from '@/components/Survey/QuestionItem';
import Title from '@/components/Survey/Title';

const MainPage = () => {
  const [clickedQuestionNumber, setClickedQuestionNumber] = useState<number>(0);

  const onClickQuestion = (number: number) => {
    setClickedQuestionNumber(number);
  };

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
    </div>
  );
};

export default MainPage;
