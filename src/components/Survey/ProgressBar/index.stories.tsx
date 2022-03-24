import React from 'react';
import { Story } from '@storybook/react';

import ProgressBar, { IProgressBarProps } from '.';

export default {
  component: ProgressBar,
  title: 'Survey/ProgressBar',
};

const Template: Story<IProgressBarProps> = (args: IProgressBarProps) => <ProgressBar {...args} />;

export const Default = Template.bind({
  percentage: 0,
});
