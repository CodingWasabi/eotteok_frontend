import React from 'react';
import { Story } from '@storybook/react';

import PrepareTime, { IPrepareTimeProps } from '.';

export default {
  component: PrepareTime,
  title: 'Exam/PrepareTime',
};

const Template: Story<IPrepareTimeProps> = (args: IPrepareTimeProps) => <PrepareTime {...args} />;

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
  prepareTime: 1,
};

export const NotSelected = Template.bind({});
NotSelected.args = {
  children: '10시간 이하',
  init: false,
  number: 1,
  prepareTime: 2,
};
