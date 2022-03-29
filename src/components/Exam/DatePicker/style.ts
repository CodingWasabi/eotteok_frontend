import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Wrapper = styled.div`
  position: relative;
  z-index: 5;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 297px;
`;

export const DatePickerWrapper = styled.div`
  overflow-y: visible;
  z-index: 5;

  display: flex;
  justify-content: space-between;

  width: 325px;
  height: 166px;

  border-radius: 12px;
  border: 1px solid ${Theme.T_2};
  background-color: ${Theme.B_1};
`;

export const PickContainer = styled.div`
  overflow-y: scroll;

  width: 100px;
  height: 166px;

  font-size: 24px;
  color: ${Theme.T_1};

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & > span {
    margin-bottom: 5px;
  }
`;

export const PickItem = styled.span<{ isSelected: boolean; onClick?: (ref: React.RefObject<HTMLDivElement>) => void }>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 34px;

  font-size: 24px;
  color: ${Theme.T_1};

  background-color: ${({ isSelected }) => isSelected && Theme.B_4};
  border-radius: 20px;
`;

export const RefWrapper = styled.div`
  position: absolute;
  top: 0px;
`;
