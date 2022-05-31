import React from 'react';
import { useNavigate } from 'react-router-dom';

import useCalendarActions from '@/hooks/useCalendarActions';
import useCommentActions from '@/hooks/useCommentActions';
import useNicknameActions from '@/hooks/useNicknameActions';
import useSurveyActions from '@/hooks/useSurveyActions';

import Button from '@/components/common/Button';

import AppLayout from '@/components/common/AppLayout';
import Text from '@/components/common/Text';

import { Body } from './style';

const ErrorPage = () => {
  const navigate = useNavigate();

  const { dispatchResetCalendar } = useCalendarActions();
  const { dispatchResetComment } = useCommentActions();
  const { dispatchResetNickname } = useNicknameActions();
  const { dispatchResetSurvey } = useSurveyActions();

  const onClickPreviousPage = () => {
    dispatchResetCalendar();
    dispatchResetComment();
    dispatchResetNickname();
    dispatchResetSurvey();

    navigate('/');
  };

  return (
    <AppLayout>
      <Body>
        <img src={require('../../../public/images/tendency/36.png')} alt="error" />
        <Text fontSize={26}>기간 내에 다 끝마칠 수 없어요.</Text>
        <Text fontSize={26}>공부 양을 줄이거나</Text>
        <Text fontSize={26}>하루 공부 가능 시간을 늘리세요 !</Text>
        <Button variant="previous" onClick={onClickPreviousPage}>
          메인 페이지로
        </Button>
      </Body>
    </AppLayout>
  );
};

export default ErrorPage;
