import React, { useState, useRef, useEffect } from 'react';

import { questionList } from '@/lib/constants';

import useSurveyActions from '@/hooks/useSurveyActions';

import useSurvey from '@/hooks/useSurvey';

import Title from '@/components/Survey/Title';
import QuestionItem from '@/components/Survey/QuestionItem';

import Input from '@/components/Exam/Input';
import DatePicker from '@/components/Exam/DatePicker';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';

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
  const [examName, setExamName] = useState<string>('');

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

  const onChangeExamName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExamName(e.target.value);
  };

  useEffect(() => {
    onClickAnswer();
  }, [answerList]);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${progressStep}00%)`;
    }

    if (answerList[progressStep] >= 1 && answerList[progressStep] <= 4) {
      setIsClickedAnswer(answerList[progressStep] === survey.answerList[progressStep]);
    }
  }, [progressStep]);

  return (
    <Wrapper>
      <SliderWrapper ref={slideRef}>
        {questionList.map(
          ({ title, question }, questionNumber) =>
            // questionNumber === 4 ? (
            //   <ContentsWrapper key={questionNumber}>
            //     <Text fontSize={27} letterSpacing={-0.5}>
            //       {title}
            //     </Text>
            //     <Input value={examName} onChangeInput={onChangeExamName} />
            //   </ContentsWrapper>
            // ) : (
            //   <ContentsWrapper key={questionNumber}>
            //     <Title>{title}</Title>
            //     {question.map((item, index) => (
            //       <QuestionItem
            //         key={`questionNumber * index ${item}`}
            //         selectedNumber={index + 1}
            //         questionNumber={questionNumber + 1}
            //         onClickItem={() => onClickAnswerItem({ index: questionNumber, number: index + 1 })}
            //       >
            //         {item}
            //       </QuestionItem>
            //     ))}
            //   </ContentsWrapper>
            // ),
            questionNumber === 4 && (
              <ContentsWrapper key={questionNumber}>
                <Text fontSize={27} letterSpacing={-0.5}>
                  {title}
                </Text>
                <Input value={examName} onChangeInput={onChangeExamName} />
                <DatePicker />
              </ContentsWrapper>
            ),
        )}
      </SliderWrapper>
      <ButtonWrapper>
        {progressStep === 4 ? (
          <Button variant="add">등록하기</Button>
        ) : (
          <>
            <Button variant="previous" onClick={onClickPrev}>
              이전
            </Button>
            <Button variant="next" isFilled={isClickedAnswer} onClick={onClickNext}>
              다음
            </Button>
          </>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default QuestionSelection;
