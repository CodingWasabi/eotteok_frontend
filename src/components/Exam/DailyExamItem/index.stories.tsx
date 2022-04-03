import React from 'react';
import { Story } from '@storybook/react';

import DailyExamItem, { IDailyExamItemProps } from '.';

export default {
  component: DailyExamItem,
  title: 'Exam/DailyExamItem',
};

const Template: Story<IDailyExamItemProps> = (args: IDailyExamItemProps) => <DailyExamItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: '데이터 분석 및 활용2',
  month: 4,
  date: 26,
  d_day: 2,
  color: 1,
};
