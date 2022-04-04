import React from 'react';
import { Story } from '@storybook/react';

import Tendency, { ITendencyProps } from '@/components/Tendency';

export default {
  component: Tendency,
  title: 'Tendency/Tendency',
};

const Template: Story<ITendencyProps> = (args: ITendencyProps) => <Tendency {...args} />;

export const Default = Template.bind({});
