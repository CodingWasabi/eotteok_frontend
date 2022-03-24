import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

import { IProgressBarProps } from '.';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 332px;
  height: 15px;

  border-radius: 100px;
  background-color: ${Theme.B_2};
`;

export const ProgressContents = styled.div<IProgressBarProps>`
  width: ${(props) => props.percentage}%;
  height: 15px;

  border-radius: 100px;
  background-color: ${Theme.B_3};

  transition: all 1s;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;

  margin-left: -15px;
`;
