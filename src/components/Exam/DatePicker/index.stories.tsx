import React from 'react';
import { Story } from '@storybook/react';

import DatePicker from '.';

export default {
  component: DatePicker,
  title: 'Exam/DatePicker',
};

const Template: Story = () => <DatePicker />;

export const Default = Template.bind({});
