import React from 'react';
import { Story } from '@storybook/react';

import CommentItem, { ICommentItemProps } from '.';

export default {
  component: CommentItem,
  title: 'Comment/CommentItem',
};

const Template: Story<ICommentItemProps> = (args: ICommentItemProps) => <CommentItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  characterNumber: 1,
  nickname: 'jun5e00',
  children: '댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글',
};
