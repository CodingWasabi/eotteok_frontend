import React from 'react';
import { Story } from '@storybook/react';

import Title, { ITitleProps } from '.';

export default {
  component: Title,
  title: 'Survey/Title',
};

const Template: Story<ITitleProps> = (args: ITitleProps) => <Title {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Q3 공부가 잘되는 장소는?',
};
