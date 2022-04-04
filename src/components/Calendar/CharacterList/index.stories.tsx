import React from 'react';
import { Story } from '@storybook/react';

import CharacterList, { ICharacterListInfo } from '.';

export default {
  component: CharacterList,
  title: 'Calendar/CharacterList',
};

const Template: Story<ICharacterListInfo> = (args: ICharacterListInfo) => <CharacterList {...args} />;

export const Default = Template.bind({});
