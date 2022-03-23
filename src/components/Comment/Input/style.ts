import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${Theme.B_5};

  width: 258px;
  height: 45px;

  border-radius: 100px;

  & > :first-child {
    margin-right: 10px;
  }
`;

export const StyledInput = styled.input`
  outline: none;

  width: 184px;
  height: 34px;

  font-size: 18px;
`;

export const IconWrapper = styled.button`
  cursor: pointer;
`;
