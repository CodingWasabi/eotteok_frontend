import React from 'react';

import Text from '@/components/common/Text';

import { Wrapper, Container } from './style';

const ExamTimeTitle = () => {
  return (
    <Wrapper>
      <Container>
        <Text fontSize={18} letterSpacing={-0.5}>
          과목명
        </Text>
        <Text fontSize={18} letterSpacing={-0.5}>
          공부 시간
        </Text>
      </Container>
    </Wrapper>
  );
};

export default ExamTimeTitle;
