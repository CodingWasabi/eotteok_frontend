import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const StyledInput = styled.input`
  width: 323px;
  height: 48px;

  border-radius: 100px;
  background-color: ${Theme.B_1};
  border: 1px solid ${Theme.T_1};

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  text-align: center;
`;
