import React from 'react';
import { Story } from '@storybook/react';

import ExamItem, { IExamItemProps } from '.';

export default {
  component: ExamItem,
  title: 'Exam/ExamItem',
};

const Template: Story<IExamItemProps> = (args: IExamItemProps) => <ExamItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '인간컴퓨터상호작용',
  isEdit: false,
  isSelected: true,
};

export const EditAndSelected = Template.bind({});
EditAndSelected.args = {
  children: '인간컴퓨터상호작용',
  isEdit: true,
  isSelected: true,
};

export const EditAndNotSelected = Template.bind({});
EditAndNotSelected.args = {
  children: '인간컴퓨터상호작용',
  isEdit: true,
  isSelected: false,
};
