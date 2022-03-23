import React from 'react';
import { Story } from '@storybook/react';

import CommentInput, { ICommentInputProps } from '.';

export default {
  compnent: CommentInput,
  title: 'Comment/CommentInput',
};

const Template: Story<ICommentInputProps> = (args: ICommentInputProps) => <CommentInput {...args} />;

export const Default = Template.bind({});
