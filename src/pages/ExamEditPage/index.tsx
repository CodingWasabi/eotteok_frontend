import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { prepareTimeList } from '@/lib/constants';
import { putMyExam } from '@/lib/api/my';
import setDate from '@/lib/util/setDate';

import useSurvey from '@/hooks/useSurvey';
import useSurveyActions from '@/hooks/useSurveyActions';

import { ExamInfoType, getMyExamListAsync } from '@/modules/survey';

import Input from '@/components/Exam/Input';
import DatePicker from '@/components/Exam/DatePicker';
import TimePicker from '@/components/Exam/TimePicker';
import PrepareTime from '@/components/Exam/PrepareTime';
import ExamItem from '@/components/Exam/ExamItem';

import AppLayout from '@/components/common/AppLayout';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import Icon from '@/components/Icon';

import {
  Body,
  ContentsWrapper,
  DelayedTimeWrapper,
  ButtonWrapper,
  TextCenterWrapper,
  ExamInfoListWrapper,
  ExamListContainer,
} from './style';

const ExamEditPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const {
    name,
    year,
    month,
    date,
    hour,
    minute,
    prepareTime,
    examInfoId,
    examInfoList,
    isEdit,
    isFilledDate,
    isFilledTime,
    isFilledPrepareTime,
  } = useSurvey();

  const { updateExamScheduleInfo, dispatchIsFilled, registerExam, editExam, initExamInfo } = useSurveyActions();

  const [init, setInit] = useState<boolean>(prepareTime === 0);

  const onChangeExamName = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateExamScheduleInfo({ target: 'name', value: e.target.value });
  };

  const onClickDelayedTime = (number: number) => {
    updateExamScheduleInfo({ target: 'prepareTime', value: number });
    dispatchIsFilled({ target: 'isFilledPrepareTime', isFilled: true });
  };

  // const onClickRegisterExamInfo = () => {
  //   registerExam({ name, year, month, date, hour, minute, prepareTime });
  //   initExamInfo();
  //   updateExamScheduleInfo({ target: ' prepareTime', value: 0 });
  // };

  const onClickEditExamInfo = async () => {
    try {
      const requestDate = setDate({ year, month, date, hour, minute });

      const requestExamInfoList = examInfoList.map(({ name, year, month, date, hour, minute, prepareTime }, index) =>
        index === examInfoId
          ? {
              name,
              date: requestDate,
              prepareTime,
            }
          : {
              name: name,
              date: setDate({ year, month, date, hour, minute }),
              prepareTime: prepareTime,
            },
      );

      const res = await putMyExam(requestExamInfoList);

      if (res.status === 200) {
        editExam({ examInfoId, name, year, month, date, hour, minute, prepareTime });
        initExamInfo();
        updateExamScheduleInfo({ target: ' prepareTime', value: 0 });
        updateExamScheduleInfo({ target: 'examInfoId', value: -1 });
        updateExamScheduleInfo({ target: 'isEdit', value: false });
        alert('수정 완료!');
        navigate('/result');
      }
    } catch (e: unknown) {
      alert('시험 정보 수정에 실패했습니다!');
    }
  };

  const onClickPreviousButton = () => {
    navigate('/result');
  };

  useEffect(() => {
    setInit(prepareTime === 0);
  }, [prepareTime]);

  useEffect(() => {
    updateExamScheduleInfo({ target: 'examInfoId', value: state ? state : 0 });
    dispatch(getMyExamListAsync.request());
  }, []);

  return (
    <AppLayout>
      <Body>
        <ContentsWrapper>
          <Text fontSize={27} letterSpacing={-0.5}>
            울라울라 시험정보 ~
          </Text>
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
        <ButtonWrapper>
          <Button
            variant={'M_4'}
            isFilled={(name ? true : false) && isFilledDate && isFilledTime && isFilledPrepareTime}
            onClick={onClickEditExamInfo}
          >
            수정하기
          </Button>
        </ButtonWrapper>
        <TextCenterWrapper>
          <Text letterSpacing={-0.5}>&lt;시험 리스트&gt;</Text>
        </TextCenterWrapper>
        <ExamInfoListWrapper>
          {examInfoList.length > 0 && (
            <ExamListContainer>
              {examInfoList.map((exam: ExamInfoType, index: number) => (
                <ExamItem key={index} id={index} isEdit={isEdit} isSelected={examInfoId === index}>
                  {exam.name}
                </ExamItem>
              ))}
            </ExamListContainer>
          )}
          <Button variant="M_2" onClick={onClickPreviousButton}>
            <Icon icon="Arrow" width={5} height={11} />
            달력으로 돌아가기
          </Button>
        </ExamInfoListWrapper>
      </Body>
    </AppLayout>
  );
};

export default ExamEditPage;
