import React from 'react';

import { Theme } from '@/styles/Theme';

import { Wrapper } from './style';

export interface ITextProps {
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  color?: string;
  children: React.ReactNode;
}

const Text = ({ fontSize = 24, fontWeight = 400, letterSpacing = 3, color = Theme.T_1, children }: ITextProps) => {
  return (
    <Wrapper fontSize={fontSize} fontWeight={fontWeight} letterSpacing={letterSpacing} color={color}>
      {children}
    </Wrapper>
  );
};

export default Text;
