import React from 'react';

import { StyledInput } from './style';

export interface IInputProps {
  value: string;
  onChangeNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChangeNickname }: IInputProps) => {
  return <StyledInput type="text" value={value} onChange={onChangeNickname} placeholder="닉네임을 입력하세요." />;
};

export default Input;
