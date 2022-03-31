import React from 'react';
import { Story } from '@storybook/react';

import ExamList from '.';

export default {
  component: ExamList,
  title: 'Exam/ExamList',
};

const Template: Story = () => <ExamList />;

export const Default = Template.bind({});
