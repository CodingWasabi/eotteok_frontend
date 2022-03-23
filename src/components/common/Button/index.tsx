import React from 'react';

import { Wrapper } from './style';

export interface IButtonProps {
  variant: 'previous' | 'next' | 'add' | 'edit' | 'M_2' | 'M_4';
  isClicked?: boolean;
  children: React.ReactNode;
}

const Button = ({ variant, isClicked, children }: IButtonProps) => {
  return (
    <Wrapper variant={variant} isClicked={isClicked}>
      {children}
    </Wrapper>
  );
};

export default Button;
