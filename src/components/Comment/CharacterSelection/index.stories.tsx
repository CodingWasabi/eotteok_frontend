import React from 'react';
import { Story } from '@storybook/react';

import CharacterSelection, { ICharacterSelectionProps } from '.';

export default {
  component: CharacterSelection,
  title: 'Comment/CharacterSelection',
};

const Template: Story<ICharacterSelectionProps> = (args: ICharacterSelectionProps) => <CharacterSelection {...args} />;

export const HasComments = Template.bind({
  hasComments: true,
});

export const NotHasComments = Template.bind({
  hasComments: false,
});
