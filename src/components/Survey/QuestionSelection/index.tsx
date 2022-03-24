import React, { useState, useRef, useEffect } from 'react';

import { questionList } from '@/lib/constants';

import Title from '@/components/Survey/Title';
import QuestionItem from '@/components/Survey/QuestionItem';

import { Wrapper, SliderWrapper, ContentsWrapper } from './style';

const QuestionSelection = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [clickedQuestionNumber, setClickedQuestionNumber] = useState<number>(0);

  const slideRef = useRef<HTMLDivElement>(null);

  const onClickQuestion = (number: number) => {
    setClickedQuestionNumber(number);
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  return (
    <Wrapper>
      <SliderWrapper>
        {questionList.map(({ title, question }) => (
          <ContentsWrapper>
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
          </ContentsWrapper>
        ))}
      </SliderWrapper>
    </Wrapper>
  );
};

export default QuestionSelection;
