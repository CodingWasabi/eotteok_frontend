import React from 'react';
import { Story } from '@storybook/react';

import Tendency from '@/components/Tendency';

export default {
  component: Tendency,
  title: 'Tendency/Tendency',
};

const Template: Story = () => <Tendency />;

export const Default = Template.bind({});
