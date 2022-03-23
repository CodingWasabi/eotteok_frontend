import React from 'react';
import { Story } from '@storybook/react';

import InputBox, { IInputBoxProps } from '.';

export default {
  component: InputBox,
  title: 'Exam/InputBox',
};

const Template: Story<IInputBoxProps> = (args: IInputBoxProps) => <InputBox {...args} />;

export const Default = Template.bind({});
