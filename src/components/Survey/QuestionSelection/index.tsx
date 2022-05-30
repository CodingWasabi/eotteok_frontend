import React, { useState, useRef, useEffect } from 'react';

import { questionList, prepareTimeList } from '@/lib/constants';

import useSurvey from '@/hooks/useSurvey';
import useSurveyActions from '@/hooks/useSurveyActions';

import Title from '@/components/Survey/Title';
import TimeInput from '@/components/Survey/TimeInput';
import QuestionItem from '@/components/Survey/QuestionItem';

import Input from '@/components/Exam/Input';
import DatePicker from '@/components/Exam/DatePicker';
import TimePicker from '@/components/Exam/TimePicker';
import PrepareTime from '@/components/Exam/PrepareTime';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';

import {
  Wrapper,
  SliderWrapper,
  ContentsWrapper,
  DelayedTimeWrapper,
  DailyQuotaWrapper,
  ButtonWrapper,
  TextCenterWrapper,
  FlexWrapper,
} from './style';

export interface IQuestionSelectionProps {
  progressStep: number;
  setProgressStep: React.Dispatch<React.SetStateAction<number>>;
}

interface IAnswerItem {
  index: number;
  number: number;
}

const QuestionSelection = ({ progressStep, setProgressStep }: IQuestionSelectionProps) => {
  const {
    dailyQuota,
    answerList: storeAnswerList,
    name,
    examInfoId,
    year,
    month,
    date,
    hour,
    minute,
    prepareTime,
    isFilledDate,
    isFilledTime,
    isFilledPrepareTime,
  } = useSurvey();
  const { onClickAnswer, dispatchIsFilled, registerExam, initExamInfo, editExam, updateExamScheduleInfo } =
    useSurveyActions();

  const [answerList, setAnswerList] = useState<Array<number>>([0, 0, 0, 0]);
  const [isClickedAnswer, setIsClickedAnswer] = useState<boolean>(false);
  const [init, setInit] = useState<boolean>(prepareTime === 0);

  const slideRef = useRef<HTMLDivElement>(null);

  const onClickAnswerItem = ({ index, number }: IAnswerItem) => {
    const newAnswerList = [...answerList];
    newAnswerList[index] = number;
    setAnswerList(newAnswerList);
    setIsClickedAnswer(true);
  };

  const onClickDelayedTime = (number: number) => {
    updateExamScheduleInfo({ target: 'prepareTime', value: number });
    dispatchIsFilled({ target: 'isFilledPrepareTime', isFilled: true });
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
    updateExamScheduleInfo({ target: 'name', value: e.target.value });
  };

  const onClickRegisterExamInfo = () => {
    registerExam({ name, year, month, date, hour, minute, prepareTime });
    initExamInfo();
    updateExamScheduleInfo({ target: ' prepareTime', value: 0 });
  };

  const onClickEditExamInfo = () => {
    editExam({ examInfoId, name, year, month, date, hour, minute, prepareTime });
    initExamInfo();
    updateExamScheduleInfo({ target: ' prepareTime', value: 0 });
    updateExamScheduleInfo({ target: 'examInfoId', value: -1 });
    updateExamScheduleInfo({ target: 'isEdit', value: false });
  };

  const isExamInputPage = (questionNumber: number) => questionNumber === 5;
  const isTimeInputPage = (questionNumber: number) => questionNumber === 4;

  useEffect(() => {
    onClickAnswer(answerList);
  }, [answerList]);

  useEffect(() => {
    setInit(prepareTime === 0);
  }, [prepareTime]);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${progressStep}00%)`;
    }

    if (answerList[progressStep] >= 1 && answerList[progressStep] <= 4) {
      setIsClickedAnswer(answerList[progressStep] === storeAnswerList[progressStep]);
    }
  }, [progressStep]);

  return (
    <Wrapper>
      <SliderWrapper ref={slideRef}>
        {questionList.map(({ title, question }, questionNumber) =>
          isExamInputPage(questionNumber) ? (
            <ContentsWrapper key={questionNumber}>
              <TextCenterWrapper>
                <Text fontSize={27} letterSpacing={-0.5}>
                  {title}
                </Text>
              </TextCenterWrapper>
              <Input value={name} onChangeInput={onChangeExamName} />
              <DatePicker />
              <TimePicker />
              <Text fontSize={18} letterSpacing={-0.5}>
                이 시험 준비하려면 얼마나 공부해야하지...?
              </Text>
              <DelayedTimeWrapper>
                {prepareTimeList.map((time, index) => (
                  <PrepareTime
                    key={time}
                    init={init}
                    number={index + 1}
                    prepareTime={prepareTime}
                    onClickItem={() => onClickDelayedTime(index + 1)}
                  >
                    {time}
                  </PrepareTime>
                ))}
              </DelayedTimeWrapper>
            </ContentsWrapper>
          ) : (
            <ContentsWrapper key={questionNumber}>
              <Title>{title}</Title>
              {isTimeInputPage(questionNumber) ? (
                <DailyQuotaWrapper>
                  <Text fontSize={24} letterSpacing={-0.5}>
                    나는 하루에...
                  </Text>
                  <FlexWrapper>
                    <Text fontSize={20} letterSpacing={-0.5}>
                      최대
                    </Text>
                    <TimeInput />
                    <Text fontSize={20} letterSpacing={-0.5}>
                      시간
                    </Text>
                  </FlexWrapper>
                  <Text fontSize={24} letterSpacing={-0.5}>
                    공부할 수 있다 !
                  </Text>
                </DailyQuotaWrapper>
              ) : (
                question.map((item, index) => (
                  <QuestionItem
                    key={`questionNumber * index ${item}`}
                    selectedNumber={index + 1}
                    questionNumber={questionNumber + 1}
                    onClickItem={() => onClickAnswerItem({ index: questionNumber, number: index + 1 })}
                  >
                    {item}
                  </QuestionItem>
                ))
              )}
            </ContentsWrapper>
          ),
        )}
      </SliderWrapper>
      <ButtonWrapper>
        {progressStep === 5 ? (
          <Button
            variant={examInfoId === -1 ? 'add' : 'M_4'}
            isFilled={(name ? true : false) && isFilledDate && isFilledTime && isFilledPrepareTime}
            onClick={examInfoId === -1 ? onClickRegisterExamInfo : onClickEditExamInfo}
          >
            {examInfoId === -1 ? '등록하기' : '수정하기'}
          </Button>
        ) : (
          <>
            <Button variant={progressStep === 0 ? 'disabled' : 'previous'} onClick={onClickPrev}>
              이전
            </Button>
            <Button variant="next" isFilled={isClickedAnswer || !!dailyQuota} onClick={onClickNext}>
              다음
            </Button>
          </>
        )}
      </ButtonWrapper>
      {progressStep === 5 && (
        <TextCenterWrapper>
          <Text letterSpacing={-0.5}>&lt;시험 리스트&gt;</Text>
        </TextCenterWrapper>
      )}
    </Wrapper>
  );
};

export default QuestionSelection;
