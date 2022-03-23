import React from 'react';
import { Story } from '@storybook/react';

import AppLayout, { IAppLayoutProps } from '.';

export default {
  component: AppLayout,
  title: 'common/AppLayout',
};

const Template: Story<IAppLayoutProps> = (args: IAppLayoutProps) => <AppLayout {...args} />;

export const Default = Template.bind({});
