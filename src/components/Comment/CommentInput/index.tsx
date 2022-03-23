import React from 'react';

import Icon from '@/components/Icon';

import Input from '@/components/Comment/Input';
import CharacterSelection from '@/components/Comment/CharacterSelection';

import { IInputProps } from '@/components/Comment/Input';

import { Wrapper } from './style';

export interface ICommentInputProps extends IInputProps {}

const CommentInput = ({ value, onChangeInput, onClickButton }: ICommentInputProps) => {
  return (
    <Wrapper>
      <CharacterSelection />
      <Input value={value} onChangeInput={onChangeInput} onClickButton={onClickButton} />
    </Wrapper>
  );
};

export default CommentInput;
