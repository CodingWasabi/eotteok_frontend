import React from 'react';

import Icon from '@/components/Icon';

import { Wrapper, StyledInput, IconWrapper } from './style';

export interface IInputProps {
  value: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickButton: () => void;
}

const Input = ({ value, onChangeInput, onClickButton }: IInputProps) => {
  return (
    <Wrapper>
      <StyledInput type="text" value={value} onChange={onChangeInput} placeholder="닉네임으로 댓글 달기 ..." />
      <IconWrapper onClick={onClickButton} disabled={value ? false : true}>
        <Icon icon="Send" width={31} height={31} opacity={value ? 1 : 0.5} />
      </IconWrapper>
    </Wrapper>
  );
};

export default Input;
