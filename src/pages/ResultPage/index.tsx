import React, { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';

import { myCalenderResult, comments } from '@/mock';

import Calendar from '@/components/Calendar';

import CommentItem from '@/components/Comment/CommentItem';
import CommentInput from '@/components/Comment/CommentInput';

import Tendency from '@/components/Tendency';

import ExamList from '@/components/Exam/ExamList';
import DailyExamItem from '@/components/Exam/DailyExamItem';

import AppLayout from '@/components/common/AppLayout';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import Icon from '@/components/Icon';

import { ICalendar, IMonthlyToDos, IDailyToDos } from '@/types/calendar';

import { Theme } from '@/styles/Theme';

import {
  ExamListWrapper,
  Body,
  ButtonWrapper,
  ResetText,
  CommentInputWrapper,
  DailyExamItemListWrapper,
  CommentItemListmWrapper,
} from './style';

const ResultPage = () => {
  const [getMoment, _] = useState<Moment>(moment());
  const [clickedDate, setClickedDate] = useState<number>(0);
  const [hasComments, __] = useState<boolean>(myCalenderResult.commentCount > 0);
  const [clickedExamList, setClickedExamList] = useState<Array<IDailyToDos>>([]);

  const selectedMonth = Number(getMoment.format('M'));

  const onClickRegisterComment = () => {
    alert('댓글 등록');
  };

  useEffect(() => {
    myCalenderResult.calendar.forEach((monthlyItem: ICalendar) => {
      if (selectedMonth === monthlyItem.month) {
        monthlyItem.toDos.forEach((toDo: IMonthlyToDos) => {
          const [year, month, date] = toDo.date.split('-');
          if (Number(date) === clickedDate) {
            setClickedExamList(toDo.toDos);
          }
        });
      }
    });
  }, [clickedDate]);

  return (
    <AppLayout>
      <Tendency nickname={myCalenderResult.nickname} tendency={myCalenderResult.tendency} />
      <Body>
        <ExamListWrapper>
          <ExamList exams={myCalenderResult.exams} />
        </ExamListWrapper>
        <Calendar calendar={myCalenderResult.calendar} clickedDate={clickedDate} setClickedDate={setClickedDate} />
        {hasComments ? (
          clickedDate === 0 ? (
            <CommentInputWrapper hasComments={hasComments}>날짜 선택하고 댓글을 확인해 보시지!</CommentInputWrapper>
          ) : (
            <CommentInputWrapper hasComments={hasComments}>
              {clickedExamList && (
                <DailyExamItemListWrapper>
                  {clickedExamList.map((info, index) => (
                    <DailyExamItem
                      key={index}
                      name={info.name}
                      d_day={info.d_day}
                      color={info.color}
                      month={selectedMonth}
                      date={clickedDate}
                    />
                  ))}
                </DailyExamItemListWrapper>
              )}
              {comments && (
                <CommentItemListmWrapper>
                  {comments.map((info, index) => (
                    <CommentItem key={index} characterNumber={info.profileImageNumber} nickname={info.nickname}>
                      {info.body}
                    </CommentItem>
                  ))}
                </CommentItemListmWrapper>
              )}
              <CommentInput hasComments={hasComments} onClickButton={onClickRegisterComment} />
            </CommentInputWrapper>
          )
        ) : clickedDate === 0 ? (
          <CommentInputWrapper hasComments={hasComments}>
            <Text fontSize={16} letterSpacing={-0.5}>
              날짜 선택하고 댓글을 남겨보시지 !
            </Text>
            <CommentInput hasComments={hasComments} onClickButton={onClickRegisterComment} />
          </CommentInputWrapper>
        ) : (
          <CommentInputWrapper hasComments={true}>
            <DailyExamItemListWrapper>
              {clickedExamList &&
                clickedExamList.map((info) => (
                  <DailyExamItem
                    name={info.name}
                    d_day={info.d_day}
                    color={info.color}
                    month={selectedMonth}
                    date={clickedDate}
                  />
                ))}
            </DailyExamItemListWrapper>
            <CommentInput hasComments={true} onClickButton={onClickRegisterComment} />
          </CommentInputWrapper>
        )}
        <ButtonWrapper>
          <Button variant="M_4">
            <Icon icon="Share" />
            <Text color={Theme.B_1}>달력 공유해 보시지</Text>
          </Button>
        </ButtonWrapper>
        <ResetText>초기화 하기</ResetText>
      </Body>
    </AppLayout>
  );
};

export default ResultPage;
