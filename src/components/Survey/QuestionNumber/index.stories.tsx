import React from 'react';
import { Story } from '@storybook/react';

import QuestionNumber, { IQuestionNumberProps } from '.';

export default {
  component: QuestionNumber,
  title: 'Survey/QuestionNumber',
};

const Template: Story<IQuestionNumberProps> = (args: IQuestionNumberProps) => <QuestionNumber {...args} />;

export const QuestionNumber1 = Template.bind({});
QuestionNumber1.args = {
  children: '1',
  backgroundColor: '#D9F2FC',
};

export const QuestionNumber2 = Template.bind({});
QuestionNumber2.args = {
  children: '2',
  backgroundColor: '#3FC06E',
};

export const QuestionNumber3 = Template.bind({});
QuestionNumber3.args = {
  children: '3',
  backgroundColor: '#F95E64',
};

export const QuestionNumber4 = Template.bind({});
QuestionNumber4.args = {
  children: '4',
  backgroundColor: '#FFAD72',
};

export const QuestionNumber5 = Template.bind({});
QuestionNumber5.args = {
  children: '5',
  backgroundColor: '#FFD66A',
};
