import React from 'react';
import { Story } from '@storybook/react';

import QuestionSelection from '.';

export default {
  component: QuestionSelection,
  title: 'Survey/QuestionSelection',
};

const Template: Story = () => <QuestionSelection />;

export const Default = Template.bind({});
