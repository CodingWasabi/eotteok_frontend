import React from 'react';

import Input from '@/components/Comment/Input';
import CharacterSelection from '@/components/Comment/CharacterSelection';

import { IInputProps } from '@/components/Comment/Input';

import { Wrapper } from './style';

export interface ICommentInputProps extends IInputProps {
  hasComments: boolean;
}

const CommentInput = ({ hasComments, onClickButton }: ICommentInputProps) => {
  return (
    <Wrapper hasComments={hasComments}>
      <CharacterSelection hasComments={hasComments} />
      <Input hasComments={hasComments} onClickButton={onClickButton} />
    </Wrapper>
  );
};

export default CommentInput;
