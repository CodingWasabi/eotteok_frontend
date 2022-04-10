import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 325px;
  height: 48px;

  border: 1px solid ${Theme.T_1};

  & > :nth-child(2) {
    margin-left: 7px;
  }
`;

export const ColorTag = styled.div<{ color: string }>`
  width: 8px;
  height: 46px;

  background-color: ${({ color }) => color};
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 300px;
`;

export const Exam = styled.span`
  font-size: 18px;
`;

export const Time = styled.span`
  font-size: 18px;
  box-shadow: inset 0 0px 0 white, inset 0 -1px 0 black;
`;
