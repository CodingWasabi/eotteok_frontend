import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import useCalendar from '@/hooks/useCalendar';

import Icon from '@/components/Icon';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';

import AppLayout from '@/components/common/AppLayout';

import { Body, LogoWrapper, LogoPencilWrapper } from './style';

const MainPage = () => {
  const navigate = useNavigate();

  const { calendar } = useCalendar();

  useEffect(() => {
    if (calendar.length > 0) {
      navigate('/result');
    }
  }, [calendar]);

  return (
    <AppLayout>
      <Body>
        <Text fontSize={30}>이번 시험...</Text>
        <LogoWrapper>
          <Icon icon="Logo" width={284} height={92} />
          <LogoPencilWrapper>
            <Icon icon="LogoPencil" width={64} height={67} />
          </LogoPencilWrapper>
        </LogoWrapper>
        <Text fontSize={21}>공부할 때 됐지?</Text>
        <Link to="/nickname">
          <Button variant="start">시작하기</Button>
        </Link>
      </Body>
    </AppLayout>
  );
};

export default MainPage;
