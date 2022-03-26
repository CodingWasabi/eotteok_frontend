import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 297px;
  background-color: pink;
`;

export const DatePickerWrapper = styled.div`
  overflow-y: visible;

  display: flex;
  justify-content: space-between;

  width: 325px;
  height: 140px;

  border: 1px solid ${Theme.T_1};
  border-radius: 12px;
  background-color: ${Theme.B_1};
`;

export const PickContainer = styled.div`
  overflow-y: scroll;

  width: 70px;
  height: 140px;

  font-size: 24px;
  color: ${Theme.T_1};

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & > span {
    margin-bottom: 17px;
  }
`;

export const PickItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 30px;

  font-size: 24px;
  color: ${Theme.T_1};
`;

export const RefWrapper = styled.div`
  position: absolute;
  top: 180px;
`;
