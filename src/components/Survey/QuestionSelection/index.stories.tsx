import React from 'react';
import { Story } from '@storybook/react';

import QuestionSelection, { IQuestionSelectionProps } from '.';

export default {
  component: QuestionSelection,
  title: 'Survey/QuestionSelection',
};

const Template: Story<IQuestionSelectionProps> = (args: IQuestionSelectionProps) => <QuestionSelection {...args} />;

export const Default = Template.bind({});
