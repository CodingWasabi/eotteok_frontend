import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Wrapper = styled.div`
  position: relative;
  width: 70px;
`;

export const CharacterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
  cursor: pointer;

  width: 45px;
  height: 45px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;

export const RefWrapper = styled.div`
  position: absolute;
  top: -9px;
  left: -8px;
  z-index: 10;
`;

export const CharacterListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 7px 0px;

  width: 60px;
  height: 255px;

  border-radius: 100px;
  border: 1px solid ${Theme.B_3};
  background-color: ${Theme.B_1};
`;
