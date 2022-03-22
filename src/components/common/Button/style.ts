import styled, { css } from 'styled-components';

import { StyledButtonProps } from '@/components/common/Button';

import { Theme } from '@/styles/Theme';

export const Wrapper = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  font-size: 24px;
  line-height: 20px;

  box-sizing: border-box;
  border-radius: 100px;

  ${(props) =>
    props.variant === 'previous' &&
    css`
      width: 151px;
      height: 50px;

      background-color: ${Theme.B_1};
      border: 1px solid ${Theme.B_5};
    `}

  ${(props) =>
    props.variant === 'next' &&
    css`
      width: 151px;
      height: 50px;

      background-color: ${props.isClicked ? Theme.M_2 : Theme.B_5};
    `}

  ${(props) =>
    props.variant === 'add' &&
    css`
      width: 325px;
      height: 45px;

      background-color: ${props.isClicked ? Theme.M_5 : Theme.B_5};
    `}

    ${(props) =>
    props.variant === 'M_2' &&
    css`
      width: 325px;
      height: 50px;

      background-color: ${Theme.M_2};

      color: ${Theme.B_1};
    `}
`;
