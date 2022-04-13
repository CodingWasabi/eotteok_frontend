import React from 'react';

import { colorList, tendencyList } from '@/lib/constants';

import Text from '@/components/common/Text';

import { Wrapper, TendencyTextWrapper } from './style';

export interface ITendencyProps {
  nickname: string;
  tendency: number;
}

const Tendency = ({ nickname, tendency }: ITendencyProps) => {
  return (
    <Wrapper backgroundColor={colorList[Math.floor((tendency - 1) / 7)]}>
      <TendencyTextWrapper>
        <Text fontSize={20} letterSpacing={-0.5}>
          {nickname} 님은
        </Text>
        <br />
        <Text fontSize={27} letterSpacing={-0.5}>
          {tendencyList[tendency - 1].personal}
        </Text>
        <br />
        <Text fontSize={18} letterSpacing={-0.5}>
          {tendencyList[tendency - 1].common}
        </Text>
      </TendencyTextWrapper>
      <img src={require(`../../../public/images/tendency/${tendency}.png`)} alt="성향" />
    </Wrapper>
  );
};

export default Tendency;
