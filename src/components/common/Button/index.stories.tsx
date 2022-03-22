import React from 'react';
import { Story } from '@storybook/react';

import Button, { StyledButtonProps } from '@/components/common/Button';

export default {
  component: Button,
  title: 'common/Button',
};

const Template: Story<StyledButtonProps> = (args: StyledButtonProps) => <Button {...args} />;

export const Previous = Template.bind({});
Previous.args = {
  variant: 'previous',
  children: '이전',
};

export const Next = Template.bind({});
Next.args = {
  variant: 'next',
  children: '다음',
  isClicked: false,
};

export const Add = Template.bind({});
Add.args = {
  variant: 'add',
  children: '추가',
  isClicked: false,
};

export const M_2 = Template.bind({});
M_2.args = {
  variant: 'M_2',
  children: '넘기시지',
};
