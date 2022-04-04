import React from 'react';
import { Story } from '@storybook/react';

import Calendar from '.';

import { ICalendarProps } from '@/types/calendar';

export default {
  component: Calendar,
  title: 'Calendar/Calendar',
};

const Template: Story<ICalendarProps> = (args: ICalendarProps) => <Calendar {...args} />;

export const Default = Template.bind({});
