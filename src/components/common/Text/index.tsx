import React from 'react';

import { Wrapper } from './style';

export interface ITextProps {
  variant?: 'normal' | 'warning';
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  children: React.ReactNode;
}

const Text = ({ variant = 'normal', fontSize = 24, fontWeight = 400, letterSpacing = 3, children }: ITextProps) => {
  return (
    <Wrapper variant={variant} fontSize={fontSize} fontWeight={fontWeight} letterSpacing={letterSpacing}>
      {children}
    </Wrapper>
  );
};

export default Text;
