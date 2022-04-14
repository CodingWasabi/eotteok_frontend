import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button';

import AppLayout from '@/components/common/AppLayout';
import Text from '@/components/common/Text';

import { Body } from './style';

const ErrorPage = () => {
  const navigate = useNavigate();

  const onClickPreviousPage = () => navigate('/');

  return (
    <AppLayout>
      <Body>
        <img src={require('../../../public/images/tendency/36.png')} alt="error" />
        <Text fontSize={32}>에러가 발생했어요 !</Text>
        <Button variant="previous" onClick={onClickPreviousPage}>
          메인 페이지로
        </Button>
      </Body>
    </AppLayout>
  );
};

export default ErrorPage;
