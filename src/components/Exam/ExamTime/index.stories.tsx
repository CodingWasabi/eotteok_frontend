import React from 'react';
import { Story } from '@storybook/react';

import ExamTime, { IExamTimeProps } from '.';

export default {
  component: ExamTime,
  title: 'Exam/ExamTime',
};

const Template: Story<IExamTimeProps> = (args: IExamTimeProps) => <ExamTime {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: 3,
  exam: '데이터분석및활용',
  time: 4,
};
