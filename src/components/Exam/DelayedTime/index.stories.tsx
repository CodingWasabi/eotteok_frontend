import React from 'react';
import { Story } from '@storybook/react';

import DelayedTime, { IDelayedTimeProps } from '.';

export default {
  component: DelayedTime,
  title: 'Exam/DelayedTime',
};

const Template: Story<IDelayedTimeProps> = (args: IDelayedTimeProps) => <DelayedTime {...args} />;

export const Init = Template.bind({});
Init.args = {
  children: '10시간 이하',
  init: true,
  number: 1,
};

export const Selected = Template.bind({});
Selected.args = {
  children: '10시간 이하',
  init: false,
  number: 1,
  clickedDelayedTimeNumber: 1,
};

export const NotSelected = Template.bind({});
NotSelected.args = {
  children: '10시간 이하',
  init: false,
  number: 1,
  clickedDelayedTimeNumber: 2,
};
