import React from 'react';
import { Story } from '@storybook/react';

import CharacterSelection from '.';

export default {
  component: CharacterSelection,
  title: 'Comment/CharacterSelection',
};

const Template: Story = () => <CharacterSelection />;

export const Default = Template.bind({});
