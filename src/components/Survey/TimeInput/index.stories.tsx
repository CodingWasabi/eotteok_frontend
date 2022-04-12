import React from 'react';
import { Story } from '@storybook/react';

import TimeInput from '.';

export default {
  component: TimeInput,
  title: 'Survey/TimeInput',
};

const Template: Story = () => <TimeInput />;

export const Default = Template.bind({});
