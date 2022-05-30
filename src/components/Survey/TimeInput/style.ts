import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const StyledInput = styled.input`
  width: 126px;
  height: 43px;

  border: 1px solid ${Theme.T_1};
  background-color: ${Theme.M_1};

  text-align: center;
  font-size: 20px;
  letter-spacing: -0.5px;
`;
