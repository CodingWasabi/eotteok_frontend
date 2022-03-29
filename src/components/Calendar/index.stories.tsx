import React from 'react';
import { Story } from '@storybook/react';

import Calendar from '.';

export default {
  component: Calendar,
  title: 'Calendar/Calendar',
};

const Template: Story = () => <Calendar />;

export const Default = Template.bind({});
