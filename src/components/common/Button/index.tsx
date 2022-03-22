import React from 'react';

import { Wrapper } from './style';

interface IButtonProps {
  variant: 'previous' | 'next' | 'add' | 'M_2';
  children: React.ReactNode;
}

export interface StyledButtonProps extends IButtonProps {
  isClicked?: boolean;
}

const Button = ({ variant, isClicked, children }: StyledButtonProps) => {
  return (
    <Wrapper variant={variant} isClicked={isClicked}>
      {children}
    </Wrapper>
  );
};

export default Button;
