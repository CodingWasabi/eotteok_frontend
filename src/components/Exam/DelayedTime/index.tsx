import React from 'react';

import { Wrapper, BorderImgWrapper, Img, ImgOverlay, Text } from './style';

export interface IDelayedTimeProps {
  init: boolean;
  number: number;
  clickedDelayedTimeNumber: number;
  children: React.ReactText;
  onClickItem: () => void;
}

const DelayedTime = ({ init, number, clickedDelayedTimeNumber, children, onClickItem }: IDelayedTimeProps) => {
  return (
    <Wrapper onClick={onClickItem}>
      <BorderImgWrapper init={init} isClicked={clickedDelayedTimeNumber === number}>
        <Img src={`images/emotion/${number}.png`} alt="감정" />
        <ImgOverlay init={init} isClicked={clickedDelayedTimeNumber === number} />
      </BorderImgWrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default DelayedTime;
