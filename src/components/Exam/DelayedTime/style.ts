import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

interface StyledDelayedTimeProps {
  init: boolean;
  isClicked: boolean;
}

export const Wrapper = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 52px;
  height: 75px;
`;

export const BorderImgWrapper = styled.div<StyledDelayedTimeProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 52px;
  height: 52px;

  border-radius: 12px;
  border: ${({ init, isClicked }) => (init ? `1px solid ${Theme.B_5}` : isClicked && `2px solid ${Theme.M_2}`)};
`;

export const Img = styled.img`
  width: 43px;
  height: 36px;
`;

export const ImgOverlay = styled.div<StyledDelayedTimeProps>`
  position: absolute;
  bottom: 0;

  width: 50px;
  height: 50px;

  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  opacity: ${({ init, isClicked }) => (init ? 0 : isClicked ? 0 : 1)};
`;

export const Text = styled.span`
  text-align: center;
  font-size: 16px;
`;
