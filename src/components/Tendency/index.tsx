import React from 'react';

import Text from '@/components/common/Text';

import { Wrapper, TendencyTextWrapper } from './style';

const Tendency = () => {
  return (
    <Wrapper>
      <TendencyTextWrapper>
        <Text fontSize={20} letterSpacing={-0.5}>
          윤준서 님은
        </Text>
        <br />
        <Text fontSize={27} letterSpacing={-0.5}>
          시험따위 외면하는 훈이 !
        </Text>
        <br />
        <Text fontSize={18} letterSpacing={-0.5}>
          이거 볼 시간에 공부해야지?
        </Text>
      </TendencyTextWrapper>
      <img src={`images/tendency/1.png`} alt="성향" />
    </Wrapper>
  );
};

export default Tendency;
