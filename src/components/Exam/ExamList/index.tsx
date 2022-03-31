import React from 'react';

import { colorList } from '@/lib/constants';

import Icon from '@/components/Icon';

import InputBox from '@/components/Exam/InputBox';

import Text from '@/components/common/Text';

import { Theme } from '@/styles/Theme';

import { Wrapper, Container, ColorTag, IconWrapper } from './style';

const ExamList = () => {
  return (
    <Wrapper>
      <Text fontSize={20} letterSpacing={-0.5}>
        &lt;시험 리스트 &gt;
      </Text>
      <InputBox isFilled={false}>
        <Container>
          <ColorTag backgroundColor={colorList[0]} />
          <Text fontSize={18}>인간컴퓨터상호작용 4/28 16:00 D-17</Text>
          <IconWrapper>
            <Icon icon="Pencil" color={Theme.T_1} width={14} height={14} />
          </IconWrapper>
        </Container>
      </InputBox>
      <InputBox isFilled={false}>
        <Container>
          <ColorTag backgroundColor={colorList[0]} />
          <Text fontSize={18}>인간컴퓨터상호작용 4/28 16:00 D-17</Text>
          <IconWrapper>
            <Icon icon="Pencil" color={Theme.T_1} width={14} height={14} />
          </IconWrapper>
        </Container>
      </InputBox>
      <InputBox isFilled={false}>
        <Container>
          <ColorTag backgroundColor={colorList[0]} />
          <Text fontSize={18}>인간컴퓨터상호작용 4/28 16:00 D-17</Text>
          <IconWrapper>
            <Icon icon="Pencil" color={Theme.T_1} width={14} height={14} />
          </IconWrapper>
        </Container>
      </InputBox>
      <InputBox isFilled={false}>
        <Container>
          <ColorTag backgroundColor={colorList[0]} />
          <Text fontSize={18}>인간컴퓨터상호작용 4/28 16:00 D-17</Text>
          <IconWrapper>
            <Icon icon="Pencil" color={Theme.T_1} width={14} height={14} />
          </IconWrapper>
        </Container>
      </InputBox>
      <InputBox isFilled={false}>
        <Container>
          <ColorTag backgroundColor={colorList[0]} />
          <Text fontSize={18}>인간컴퓨터상호작용 4/28 16:00 D-17</Text>
          <IconWrapper>
            <Icon icon="Pencil" color={Theme.T_1} width={14} height={14} />
          </IconWrapper>
        </Container>
      </InputBox>
      <InputBox isFilled={false}>
        <Container>
          <ColorTag backgroundColor={colorList[0]} />
          <Text fontSize={18}>인간컴퓨터상호작용 4/28 16:00 D-17</Text>
          <IconWrapper>
            <Icon icon="Pencil" color={Theme.T_1} width={14} height={14} />
          </IconWrapper>
        </Container>
      </InputBox>
    </Wrapper>
  );
};

export default ExamList;
