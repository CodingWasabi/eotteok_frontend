import React from 'react';
import { Story } from '@storybook/react';

import Icon from '@/components/Icon';

import Button, { IButtonProps } from '@/components/common/Button';

export default {
  component: Button,
  title: 'common/Button',
};

const Template: Story<IButtonProps> = (args: IButtonProps) => <Button {...args} />;

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
  children: '등록하기',
  isClicked: false,
};

export const Edit = Template.bind({});
Edit.args = {
  variant: 'edit',
  children: (
    <>
      <Icon icon="Pencil" />
      시험정보 수정해 보시지
    </>
  ),
};

export const M_2 = Template.bind({});
M_2.args = {
  variant: 'M_2',
  children: '넘기시지',
};

export const M_4 = Template.bind({});
M_4.args = {
  variant: 'M_4',
  children: (
    <>
      <Icon icon="Share" />
      달력 공유해 보시지
    </>
  ),
};
