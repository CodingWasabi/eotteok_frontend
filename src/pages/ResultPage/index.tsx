import React, { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';

import { comments, randomComments } from '@/mock';

import { loginPath } from '@/lib/constants';
import copyClipboard from '@/lib/util/copyClipboard';

import useNickname from '@/hooks/useNickname';
import useCalendar from '@/hooks/useCalendar';

import Calendar from '@/components/Calendar';

import CommentItem from '@/components/Comment/CommentItem';
import CommentInput from '@/components/Comment/CommentInput';

import Tendency from '@/components/Tendency';

import ExamList from '@/components/Exam/ExamList';
import ExamTime from '@/components/Exam/ExamTime';
import ExamTimeTitle from '@/components/Exam/ExamTimeTitle';
import DailyExamItem from '@/components/Exam/DailyExamItem';

import AppLayout from '@/components/common/AppLayout';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import Icon from '@/components/Icon';

import { ICalendar, IDailyToDos } from '@/types/calendar';

import { Theme } from '@/styles/Theme';

import {
  ExamListWrapper,
  Body,
  ButtonWrapper,
  ResetText,
  CommentInputWrapper,
  CommentBlurWrapper,
  DailyExamItemListWrapper,
  CommentItemListmWrapper,
  ClickedDateWrapper,
  Date,
  ExamTimeWrapper,
} from './style';

const setHasComments = (calendar: Array<ICalendar>, selectedMonth: number) => {
  if (calendar.length < 0) return false;

  calendar.forEach((item: ICalendar) => {
    if (item.month === selectedMonth) {
      return !!item.commentCount;
    }
  });

  return false;
};

const ResultPage = () => {
  const { nickname } = useNickname();
  const { tendency, accountId, calendar, exams } = useCalendar();

  const [getMoment, _] = useState<Moment>(moment());
  const [selectedMonth, setSelectedMonth] = useState<number>(Number(getMoment.format('M')));

  const [clickedDate, setClickedDate] = useState<number>(0);
  const [hasComments, __] = useState<boolean>(setHasComments(calendar, selectedMonth));
  const [clickedExamList, setClickedExamList] = useState<Array<IDailyToDos>>([]);

  const onClickRegisterComment = () => {
    alert('댓글 등록');
  };

  const onClickShare = () => {
    window.location.href = loginPath;
  };

  useEffect(() => {
    if (!calendar) return;

    calendar.forEach((info) => {
      if (info.month === selectedMonth) {
        info.toDos.forEach((toDo) => {
          const [, , toDoDate] = toDo.date.split('-');
          if (Number(toDoDate) === clickedDate) {
            setClickedExamList(toDo.toDos);
          }
        });
      }
    });

    return () => {
      setClickedExamList([]);
    };
  }, [selectedMonth, clickedDate]);

  return (
    <AppLayout>
      <Tendency nickname={nickname} tendency={tendency} />
      <Body>
        <ExamListWrapper>
          <ExamList exams={exams} />
        </ExamListWrapper>
        <Calendar
          calendar={calendar}
          selectedMonth={selectedMonth}
          clickedDate={clickedDate}
          setSelectedMonth={setSelectedMonth}
          setClickedDate={setClickedDate}
        />
        {hasComments ? (
          clickedDate === 0 ? (
            // 댓글 O, 날짜 선택 X
            <CommentInputWrapper hasComments={hasComments}>
              <CommentBlurWrapper>날짜 선택하고 댓글을 확인해 보시지 !</CommentBlurWrapper>
              <CommentItemListmWrapper>
                {randomComments
                  .slice(0, randomComments.length < 3 ? randomComments.length : 4)
                  .map((comment, index) => (
                    <CommentItem key={index} characterNumber={comment.profileImageNumber} nickname={comment.nickname}>
                      {comment.body}
                    </CommentItem>
                  ))}
              </CommentItemListmWrapper>
            </CommentInputWrapper>
          ) : (
            // 댓글 O, 날짜 선택 O
            <CommentInputWrapper hasComments={hasComments}>
              {clickedExamList.length > 0 && (
                <>
                  <DailyExamItemListWrapper>
                    <ClickedDateWrapper>
                      <Date>{clickedDate} 일</Date> 기준으로 얼마나 남았지?
                    </ClickedDateWrapper>
                    {clickedExamList.map(({ name, d_day, color, month, date }, index) => (
                      <DailyExamItem key={index} name={name} d_day={d_day} color={color} month={month} date={date} />
                    ))}
                  </DailyExamItemListWrapper>
                  <ClickedDateWrapper>
                    <Date>{clickedDate} 일</Date> 공부 이 정도는 해야지?
                  </ClickedDateWrapper>
                  <ExamTimeWrapper>
                    <ExamTimeTitle />
                    {clickedExamList.map(({ name, color, hour }, index) => (
                      <ExamTime key={`${name}/${index}`} color={color} exam={name} time={hour} />
                    ))}
                  </ExamTimeWrapper>
                </>
              )}
              {comments.length > 0 && (
                <>
                  <ClickedDateWrapper>
                    <Date>{clickedDate} 일</Date> 댓글 보시지?
                  </ClickedDateWrapper>
                  <CommentInput hasComments={hasComments} onClickButton={onClickRegisterComment} />
                  <CommentItemListmWrapper>
                    {comments.map((info, index) => (
                      <CommentItem key={index} characterNumber={info.profileImageNumber} nickname={info.nickname}>
                        {info.body}
                      </CommentItem>
                    ))}
                  </CommentItemListmWrapper>
                </>
              )}
            </CommentInputWrapper>
          )
        ) : clickedDate === 0 ? (
          // 댓글 X, 날짜 선택 X
          <CommentInputWrapper hasComments={hasComments}>
            <Text fontSize={16} letterSpacing={-0.5}>
              날짜 선택하고 댓글을 남겨보시지 !
            </Text>
            <CommentInput hasComments={hasComments} onClickButton={onClickRegisterComment} />
          </CommentInputWrapper>
        ) : (
          // 댓글 X, 날짜 선택 O
          <CommentInputWrapper hasComments={true}>
            {clickedExamList.length > 0 && (
              <>
                <DailyExamItemListWrapper>
                  <ClickedDateWrapper>
                    <Date>{clickedDate} 일</Date> 기준으로 얼마나 남았지?
                  </ClickedDateWrapper>
                  {clickedExamList.map(({ name, d_day, color, month, date }, index) => (
                    <DailyExamItem key={index} name={name} d_day={d_day} color={color} month={month} date={date} />
                  ))}
                </DailyExamItemListWrapper>
                <ClickedDateWrapper>
                  <Date>{clickedDate} 일</Date> 공부 이 정도는 해야지?
                </ClickedDateWrapper>
                <ExamTimeWrapper>
                  <ExamTimeTitle />
                  {clickedExamList.map(({ name, color, hour }, index) => (
                    <ExamTime key={`${name}/${index}`} color={color} exam={name} time={hour} />
                  ))}
                </ExamTimeWrapper>
              </>
            )}
            <ClickedDateWrapper>
              <Date>{clickedDate} 일</Date> 댓글 보시지?
            </ClickedDateWrapper>
            <CommentInput hasComments={true} onClickButton={onClickRegisterComment} />
            {comments.length > 0 && (
              <CommentItemListmWrapper>
                {comments.map((info, index) => (
                  <CommentItem key={index} characterNumber={info.profileImageNumber} nickname={info.nickname}>
                    {info.body}
                  </CommentItem>
                ))}
              </CommentItemListmWrapper>
            )}
          </CommentInputWrapper>
        )}
        <ButtonWrapper>
          <Button variant="M_4" onClick={onClickShare}>
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
