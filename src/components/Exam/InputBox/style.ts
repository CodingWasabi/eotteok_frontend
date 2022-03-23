import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 325px;
  height: 45px;

  background-color: ${Theme.B_1};
  border: 1px solid ${Theme.T_2};
  border-radius: 12px;
`;
