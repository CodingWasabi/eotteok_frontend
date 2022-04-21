import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 325px;
  height: 48px;

  background-color: ${Theme.M_1};
  border: 1px solid ${Theme.T_1};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 297px;

  & > :nth-child(2) {
    margin-right: -5px;
  }
`;
