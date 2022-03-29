import React from 'react';

import { Wrapper } from './style';

export interface IInputBoxProps {
  isFilled: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const InputBox = ({ isFilled, children, onClick }: IInputBoxProps) => {
  return (
    <Wrapper isFilled={isFilled} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default InputBox;
