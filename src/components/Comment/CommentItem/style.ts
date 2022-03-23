import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 325px;

  & > :not(:first-child) {
    margin-left: 11px;
  }
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
`;

export const Text = styled.span<{ fontColor?: string }>`
  font-size: 16px;
  letter-spacing: -0.5px;
  color: ${({ fontColor }) => fontColor ?? Theme.T_1};
`;
