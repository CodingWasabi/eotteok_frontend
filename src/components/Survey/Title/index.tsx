import React from 'react';

import { Wrapper } from './style';

export interface ITitleProps {
  children: React.ReactText;
}

const Title = ({ children }: ITitleProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Title;
