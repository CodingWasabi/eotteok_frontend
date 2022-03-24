import React, { useState, useRef, useEffect } from 'react';

import { questionList } from '@/lib/constants';

import useSurveyActions from '@/hooks/useSurveyActions';

import useSurvey from '@/hooks/useSurvey';

import Title from '@/components/Survey/Title';
import QuestionItem from '@/components/Survey/QuestionItem';
import Button from '@/components/common/Button';

import { Wrapper, SliderWrapper, ContentsWrapper, ButtonWrapper } from './style';

export interface IQuestionSelectionProps {
  progressStep: number;
  setProgressStep: React.Dispatch<React.SetStateAction<number>>;
}

interface IAnswerItem {
  index: number;
  number: number;
}

const QuestionSelection = ({ progressStep, setProgressStep }: IQuestionSelectionProps) => {
  const [answerList, setAnswerList] = useState<Array<number>>([0, 0, 0, 0]);
  const [isClickedAnswer, setIsClickedAnswer] = useState<boolean>(false);

  const slideRef = useRef<HTMLDivElement>(null);

  const survey = useSurvey();
  const { onClickAnswer } = useSurveyActions({ answerList });

  const onClickAnswerItem = ({ index, number }: IAnswerItem) => {
    const newAnswerList = [...answerList];
    newAnswerList[index] = number;
    setAnswerList(newAnswerList);
    setIsClickedAnswer(true);
  };

  const onClickPrev = () => {
    if (progressStep === 0) {
      return;
    }

    setProgressStep((prev: number) => prev - 1);
    setIsClickedAnswer(true);
  };

  const onClickNext = () => {
    setProgressStep((prev: number) => prev + 1);
    setIsClickedAnswer(false);
  };

  useEffect(() => {
    onClickAnswer();
  }, [answerList]);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${progressStep}00%)`;
    }

    if (answerList[progressStep] !== 0) {
      setIsClickedAnswer(answerList[progressStep] === survey.answerList[progressStep]);
    }
  }, [progressStep]);

  return (
    <Wrapper>
      <SliderWrapper ref={slideRef}>
        {questionList.map(({ title, question }, questionNumber) => (
          <ContentsWrapper key={questionNumber}>
            <Title>{title}</Title>
            {question.map((item, index) => (
              <QuestionItem
                key={`questionNumber * index ${item}`}
                selectedNumber={index + 1}
                questionNumber={questionNumber + 1}
                onClickItem={() => onClickAnswerItem({ index: questionNumber, number: index + 1 })}
              >
                {item}
              </QuestionItem>
            ))}
          </ContentsWrapper>
        ))}
      </SliderWrapper>
      <ButtonWrapper>
        <Button variant="previous" onClick={onClickPrev}>
          이전
        </Button>
        <Button variant="next" isFilled={isClickedAnswer} onClick={onClickNext}>
          다음
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default QuestionSelection;
