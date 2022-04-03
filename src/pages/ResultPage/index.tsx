import React, { useState } from 'react';

import { myCalenderResult } from '@/mock';

import Calendar from '@/components/Calendar';

import CommentInput from '@/components/Comment/CommentInput';

import Tendency from '@/components/Tendency';

import ExamList from '@/components/Exam/ExamList';

import AppLayout from '@/components/common/AppLayout';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import Icon from '@/components/Icon';

import { Theme } from '@/styles/Theme';

import { ExamListWrapper, Body, ButtonWrapper, ResetText, CommentInputWrapper } from './style';

const ResultPage = () => {
  const [clickedDate, setClickedDate] = useState<number>(0);

  const hasComments = myCalenderResult.commentCount > 0;

  const onClickRegisterComment = () => {
    alert('댓글 등록');
  };

  return (
    <AppLayout>
      <Tendency nickname={myCalenderResult.nickname} tendency={myCalenderResult.tendency} />
      <Body>
        <ExamListWrapper>
          <ExamList exams={myCalenderResult.exams} />
        </ExamListWrapper>
        <Calendar calendar={myCalenderResult.calendar} clickedDate={clickedDate} setClickedDate={setClickedDate} />
        <CommentInputWrapper hasComments={hasComments}>
          {!hasComments && (
            <Text fontSize={16} letterSpacing={-0.5}>
              날짜 선택하고 댓글을 남겨보시지 !
            </Text>
          )}
          <CommentInput hasComments={hasComments} onClickButton={onClickRegisterComment} />
        </CommentInputWrapper>
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
