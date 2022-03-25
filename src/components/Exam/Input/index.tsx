import React from 'react';

import InputBox from '@/components/Exam/InputBox';

import { StyledInput } from './style';

export interface IInputProps {
  value: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChangeInput }: IInputProps) => {
  return (
    <InputBox isFilled={value ? true : false}>
      <StyledInput value={value} onChange={onChangeInput} placeholder="과목명 입력해보시지 !" />
    </InputBox>
  );
};

export default Input;
