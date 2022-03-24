import React from 'react';

import { Wrapper, ProgressContents, Img } from './style';

export interface IProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: IProgressBarProps) => {
  return (
    <Wrapper>
      <ProgressContents percentage={percentage} />
      <Img src="images/ProgressIcon.png" alt="짱구" />
    </Wrapper>
  );
};

export default ProgressBar;
