import React, { useCallback } from 'react';

import { Wrapper } from './style';

export interface IButtonProps {
  variant: 'previous' | 'next' | 'add' | 'edit' | 'start' | 'M_2' | 'M_4';
  isFilled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

interface IIsDisabled {
  variant: string;
  isFilled: boolean | undefined;
}

const Button = ({ variant, isFilled, children, onClick }: IButtonProps) => {
  const isDisabled = useCallback(
    ({ variant, isFilled }: IIsDisabled) => {
      return variant === 'next' || variant === 'add' ? (isFilled ? false : true) : false;
    },
    [variant, isFilled],
  );

  return (
    <Wrapper variant={variant} isFilled={isFilled} disabled={isDisabled({ variant, isFilled })} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Button;
