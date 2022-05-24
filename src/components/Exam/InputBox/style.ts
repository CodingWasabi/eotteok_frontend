import styled from 'styled-components';

import { IInputBoxProps } from '.';

import { Theme } from '@/styles/Theme';

export const Wrapper = styled.div<IInputBoxProps>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 323px;
  height: 45px;

  background-color: ${Theme.B_1};
  border: ${({ isFilled }) => (isFilled ? `1px solid ${Theme.M_2}` : `1px solid ${Theme.T_2}`)};
  border-radius: 12px;
`;
