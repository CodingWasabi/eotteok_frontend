import React from 'react';
import { Story } from '@storybook/react';

import Input from '.';

export default {
  component: Input,
  title: 'Nickname/Input',
};

const Template: Story = () => <Input />;

export const Default = Template.bind({});
