import React, { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useSWR from 'swr';
import { useDispatch } from 'react-redux';

import { randomComments } from '@/mock';

import { loginPath } from '@/lib/constants';
import setTime from '@/lib/util/setTime';
import copyClipboard from '@/lib/util/copyClipboard';
import { getPersonalCalendar, getComments, postComment } from '@/lib/api/calendar';
import { resetMe } from '@/lib/api/me';

import useMe from '@/hooks/useMe';
import useComment from '@/hooks/useComment';
import useCalendar from '@/hooks/useCalendar';
import useCalendarActions from '@/hooks/useCalendarActions';
import useCommentActions from '@/hooks/useCommentActions';
import useNicknameActions from '@/hooks/useNicknameActions';
import useSurveyActions from '@/hooks/useSurveyActions';

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
  Img,
} from './style';

const checkHasComments = (calendar: Array<ICalendar>, selectedMonth: number) => {
  if (calendar.length < 0) return false;

  let hasComments: boolean = false;

  calendar.forEach((item: ICalendar) => {
    if (item.month === selectedMonth) {
      if (item.commentCount) {
        hasComments = true;
        return true;
      }
      hasComments = false;
      return false;
    }
  });

  return hasComments;
};

const ResultPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { nickname, tendency, calendar, exams } = useCalendar();
  const { selectedCharacterNumber, comment } = useComment();
  const { dispatchResetCalendar, dispatchUpdateState, dispatchCalendar } = useCalendarActions();
  const { dispatchResetComment, updateComment } = useCommentActions();
  const { dispatchResetNickname } = useNicknameActions();
  const { dispatchResetSurvey } = useSurveyActions();

  const { me: accountId } = useMe();

  const [getMoment, _] = useState<Moment>(moment());
  const [selectedMonth, setSelectedMonth] = useState<number>(Number(getMoment.format('M')));

  const [clickedDate, setClickedDate] = useState<number>(0);
  const [hasComments, setHasComments] = useState<boolean>(checkHasComments(calendar, selectedMonth));
  const [clickedExamList, setClickedExamList] = useState<Array<IDailyToDos>>([]);
  const [requestDate, setRequestDate] = useState<string>('');

  const { accountId: accountIdFromParams } = params;
  const [requestAccountId, setRequestAccountId] = useState<number>(
    accountIdFromParams ? Number(accountIdFromParams) : accountId,
  );

  const {
    data: calendarFromServer,
    error,
    mutate: calendarMutate,
  } = useSWR(
    [`/calendar/${requestAccountId}/result`, requestAccountId],
    requestAccountId ? () => getPersonalCalendar(requestAccountId) : null,
  );

  const { data: comments, mutate: commentMutate } = useSWR(
    [`/calendar/${requestAccountId}/result/comments?date=${requestDate}`, requestAccountId, requestDate, clickedDate],
    requestAccountId && requestAccountId && clickedDate
      ? () => getComments({ userId: requestAccountId, date: requestDate })
      : null,
  );

  const onClickRegisterComment = async () => {
    if (!accountId) {
      const confirmFlag = confirm('???????????? ????????? ???????????????.');

      if (confirmFlag) {
        window.location.href = loginPath;
        return;
      }
      return;
    }

    try {
      const res = await postComment({
        userId: requestAccountId,
        date: requestDate,
        profileImageNumber: selectedCharacterNumber,
        body: comment,
      });

      if (res.status === 200) {
        updateComment('');
        calendarMutate(calendarFromServer);
        commentMutate(comments);
      }
    } catch (e) {
      alert('?????? ?????? ?????? ??? ?????? ???????????? ?????? ????????? ???????????????!');
    }
  };

  const onClickShare = () => {
    if (accountId) {
      if (!accountIdFromParams) {
        copyClipboard(`http://3.34.94.220:3000/result/${accountId}`);
        return;
      }

      if (accountId !== accountIdFromParams) {
        alert('?????? ????????? ????????? ????????????!');
        return;
      }

      return;
    }
    window.location.href = loginPath;
  };

  const resetStore = () => {
    dispatchResetCalendar();
    dispatchResetComment();
    dispatchResetNickname();
    dispatchResetSurvey();
  };

  const onClickResetWithoutLogin = () => {
    resetStore();
    navigate('/');
  };

  const onClickResetWithLogin = async () => {
    try {
      const res = await resetMe();

      if (res.status === 200) {
        alert('????????? ???????????????!');
        resetStore();
        navigate('/');
      }
    } catch (error) {
      alert('????????? ??????????????????. ????????? ?????? ??????????????????!');
    }
  };

  useEffect(() => {
    return () => {
      dispatchUpdateState({ target: 'postCalendarError', value: null });
    };
  }, []);

  useEffect(() => {
    if (accountIdFromParams) {
      setRequestAccountId(Number(accountIdFromParams));
      return;
    }
    setRequestAccountId(accountId);
  }, [accountId, accountIdFromParams]);

  useEffect(() => {
    if (calendarFromServer) {
      dispatch(dispatchCalendar(calendarFromServer));
    }
  }, [calendarFromServer]);

  useEffect(() => {
    setHasComments(checkHasComments(calendar, selectedMonth));
  }, [selectedMonth]);

  useEffect(() => {
    if (!calendar) return;

    setRequestDate(`2022-${setTime(selectedMonth)}-${setTime(clickedDate)}`);

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

  useEffect(() => {
    if (!error) return;
    const {
      response: { status },
    } = error;

    if (status === 400) {
      alert('???????????? ?????? ??????????????????!');
      navigate('/error');
    }
  }, [error]);

  return (
    <AppLayout>
      {calendar.length > 0 && (
        <>
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
                // ?????? O, ?????? ?????? X
                <CommentInputWrapper hasComments={hasComments}>
                  <CommentBlurWrapper>?????? ???????????? ????????? ????????? ????????? !</CommentBlurWrapper>
                  <CommentItemListmWrapper>
                    {randomComments
                      .slice(0, randomComments.length < 3 ? randomComments.length : 4)
                      .map((comment, index) => (
                        <CommentItem
                          key={index}
                          characterNumber={comment.profileImageNumber}
                          nickname={comment.nickname}
                        >
                          {comment.body}
                        </CommentItem>
                      ))}
                  </CommentItemListmWrapper>
                </CommentInputWrapper>
              ) : (
                // ?????? O, ?????? ?????? O
                <CommentInputWrapper hasComments={hasComments}>
                  {clickedExamList.length > 0 && (
                    <>
                      <ClickedDateWrapper>
                        <Date>{clickedDate} ???</Date> ?????? ??? ????????? ??????????
                      </ClickedDateWrapper>
                      <DailyExamItemListWrapper>
                        <ExamTimeWrapper>
                          <ExamTimeTitle />
                          {clickedExamList.map(({ name, color, hour }, index) => (
                            <ExamTime key={`${name}/${index}`} color={color} exam={name} time={hour} />
                          ))}
                        </ExamTimeWrapper>
                        <ClickedDateWrapper>
                          <Date>{clickedDate} ???</Date> ???????????? ????????? ??????????
                        </ClickedDateWrapper>
                        {clickedExamList.map(({ name, d_day, color, month, date }, index) => (
                          <DailyExamItem
                            key={index}
                            name={name}
                            d_day={d_day}
                            color={color}
                            month={month}
                            date={date}
                          />
                        ))}
                      </DailyExamItemListWrapper>
                    </>
                  )}
                  {comments && comments?.length > 0 && (
                    <>
                      <ClickedDateWrapper>
                        <Date>{clickedDate} ???</Date> ?????? ??????????
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
              // ?????? X, ?????? ?????? X
              <CommentInputWrapper hasComments={hasComments}>
                <Text fontSize={16} letterSpacing={-0.5}>
                  ?????? ???????????? ????????? ??????????????? !
                </Text>
                <CommentInput hasComments={hasComments} onClickButton={onClickRegisterComment} />
              </CommentInputWrapper>
            ) : (
              // ?????? X, ?????? ?????? O
              <CommentInputWrapper hasComments={true}>
                {clickedExamList.length > 0 && (
                  <>
                    <ClickedDateWrapper>
                      <Date>{clickedDate} ???</Date> ?????? ??? ????????? ??????????
                    </ClickedDateWrapper>
                    <ExamTimeWrapper>
                      <ExamTimeTitle />
                      {clickedExamList.map(({ name, color, hour }, index) => (
                        <ExamTime key={`${name}/${index}`} color={color} exam={name} time={hour} />
                      ))}
                    </ExamTimeWrapper>
                    <DailyExamItemListWrapper>
                      <ClickedDateWrapper>
                        <Date>{clickedDate} ???</Date> ???????????? ????????? ??????????
                      </ClickedDateWrapper>
                      {clickedExamList.map(({ name, d_day, color, month, date }, index) => (
                        <DailyExamItem key={index} name={name} d_day={d_day} color={color} month={month} date={date} />
                      ))}
                    </DailyExamItemListWrapper>
                  </>
                )}
                <ClickedDateWrapper>
                  <Date>{clickedDate} ???</Date> ?????? ??????????
                </ClickedDateWrapper>
                <CommentInput hasComments={true} onClickButton={onClickRegisterComment} />
                {comments && comments.length > 0 && (
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
                <Text color={Theme.B_1}>?????? ????????? ?????????</Text>
              </Button>
            </ButtonWrapper>
            <Link to="/event">
              <Img src="/images/event/event_banner.png" width={325} alt="event_banner"></Img>
            </Link>
            {/* <ResetText onClick={accountId ? onClickResetWithLogin : onClickResetWithoutLogin}>????????? ??????</ResetText> */}
          </Body>
        </>
      )}
    </AppLayout>
  );
};

export default ResultPage;
