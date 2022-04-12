import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Wrapper = styled.div`
  max-width: 350px;
`;

export const MonthWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  margin-bottom: 31px;

  width: 101px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;

export const DayWrapper = styled.td<{ isWeekend: boolean; isClicked: boolean }>`
  cursor: pointer;

  width: 50px;
  height: 70px;

  border-bottom: 0.5px solid #eeeeee;
  background-color: ${Theme.B_1};
  box-shadow: ${({ isClicked }) => isClicked && `0 0 0 3px ${Theme.M_5} inset`};
  border-radius: 5px;

  padding: 10px 0px 0px 10px;

  font-size: 20px;
  color: ${({ isWeekend }) => (isWeekend ? Theme.T_2 : Theme.T_1)};
`;

export const ColoredLine = styled.div<{ color: string }>`
  width: 100%;
  border-bottom: 5px solid ${({ color }) => color};
`;
