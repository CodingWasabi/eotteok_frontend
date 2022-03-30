import React from 'react';
import { Story } from '@storybook/react';

import Calendar, { ICalendarProps } from '.';

export default {
  component: Calendar,
  title: 'Calendar/Calendar',
};

const Template: Story<ICalendarProps> = (args: ICalendarProps) => <Calendar {...args} />;

export const Default = Template.bind({});
