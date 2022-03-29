import React from 'react';
import { Story } from '@storybook/react';

import TimePicker from '.';

export default {
  component: TimePicker,
  title: 'Exam/TimePicker',
};

const Template: Story = () => <TimePicker />;

export const Default = Template.bind({});
