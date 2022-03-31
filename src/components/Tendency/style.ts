import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: -1;

  background-color: ${Theme.M_5};

  border-radius: 0 0 30px 30px;

  width: 100%;
  height: 429px;

  & > img {
    width: 141px;
    height: 108px;

    margin-top: 38px;
  }
`;

export const TendencyTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
