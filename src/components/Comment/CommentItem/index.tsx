import React from 'react';

import { colorList } from '@/lib/constants';

import { Wrapper, Img, Text } from './style';

export interface ICommentItemProps {
  characterNumber: number;
  nickname: string;
  children: React.ReactText;
}

const CommentItem = ({ characterNumber, nickname, children }: ICommentItemProps) => {
  return (
    <Wrapper>
      <Img src={`images/comment/${characterNumber}.png`} alt="캐릭터" />
      <Text fontColor={colorList[characterNumber - 1]}>{nickname}</Text>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default CommentItem;
