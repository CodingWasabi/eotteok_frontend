import React from 'react';

import Calendar from '@/components/Calendar';

import AppLayout from '@/components/common/AppLayout';

import { Body } from './style';

const ResultPage = () => {
  return (
    <AppLayout>
      <Body>
        <Calendar />
      </Body>
    </AppLayout>
  );
};

export default ResultPage;
