import React from 'react';

import { Wrapper } from './style';

export interface IInputBoxProps {
  children: React.ReactNode;
}

const InputBox = ({ children }: IInputBoxProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default InputBox;
