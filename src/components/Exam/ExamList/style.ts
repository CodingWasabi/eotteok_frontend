import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 339px;
  height: 229px;

  border-radius: 12px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: ${Theme.B_1};

  overflow-y: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  & > :first-child {
    margin: 15px 0;
  }

  & > :not(:first-child) {
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 339px;
  height: 45px;
`;

export const ExamInfoWrapper = styled.div`
  width: 275px;

  & > :nth-child(1) {
    display: inline-block;
    width: 120px;
    margin-right: 5px;
  }

  & > :nth-child(2),
  & > :nth-child(3) {
    display: inline-block;
    width: 40px;
    margin-right: 10px;
  }
`;

export const ColorTag = styled.div<{ backgroundColor: string }>`
  width: 4px;
  height: 21px;

  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const IconWrapper = styled.button`
  cursor: pointer;
  margin-right: 8px;
`;
