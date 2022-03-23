import styled, { css } from 'styled-components';

import { IButtonProps } from '@/components/common/Button';

import { Theme } from '@/styles/Theme';

export const Wrapper = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  font-size: 24px;

  border-radius: 100px;

  & > :first-child {
    margin-right: 19px;
  }

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
    props.variant === 'edit' &&
    css`
      width: 325px;
      height: 45px;

      border: 1px solid ${Theme.M_2};

      color: ${Theme.M_2};
    `}

  ${(props) =>
    props.variant === 'M_2' &&
    css`
      width: 325px;
      height: 50px;

      background-color: ${Theme.M_2};

      color: ${Theme.B_1};
    `}

  ${(props) =>
    props.variant === 'M_4' &&
    css`
      width: 325px;
      height: 50px;

      background-color: ${Theme.M_4};

      color: ${Theme.B_1};
    `}
`;
