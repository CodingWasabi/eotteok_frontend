import React from 'react';
import { Story } from '@storybook/react';

import ExamTimeTitle from '.';

export default {
  component: ExamTimeTitle,
  title: 'Exam/ExamTimeTitle',
};

const Template: Story = () => <ExamTimeTitle />;

export const Default = Template.bind({});
