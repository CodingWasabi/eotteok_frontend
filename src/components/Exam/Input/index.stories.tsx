import React from 'react';
import { Story } from '@storybook/react';

import Input, { IInputProps } from '.';

export default {
  component: Input,
  title: 'Exam/Input',
};

const Template: Story<IInputProps> = (args: IInputProps) => <Input {...args} />;

export const Default = Template.bind({});
