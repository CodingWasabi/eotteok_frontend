import React from 'react';
import { Story } from '@storybook/react';

import { myCalenderResult } from '@/mock';

import ExamList, { IExamListProps } from '.';

export default {
  component: ExamList,
  title: 'Exam/ExamList',
};

const Template: Story<IExamListProps> = (args: IExamListProps) => <ExamList {...args} />;

export const Default = Template.bind({});
Default.args = {
  exams: myCalenderResult.exams,
};
