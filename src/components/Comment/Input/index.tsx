import React from 'react';

import useComment from '@/hooks/useComment';
import useCommentActions from '@/hooks/useCommentActions';

import Icon from '@/components/Icon';

import { Wrapper, StyledInput, IconWrapper } from './style';

export interface IInputProps {
  hasComments: boolean;
  onClickButton: () => void;
}

const Input = ({ hasComments, onClickButton }: IInputProps) => {
  const { comment } = useComment();
  const { updateComment } = useCommentActions();

  const onChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateComment(e.target.value);
  };

  return (
    <Wrapper>
      <StyledInput
        type="text"
        value={comment}
        onChange={hasComments ? onChangeComment : undefined}
        placeholder="닉네임으로 댓글 달기 ..."
      />
      <IconWrapper onClick={onClickButton} disabled={comment ? false : true}>
        <Icon icon="Send" width={31} height={31} opacity={comment ? 1 : 0.5} />
      </IconWrapper>
    </Wrapper>
  );
};

export default Input;
