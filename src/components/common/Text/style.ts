import styled, { css } from 'styled-components';

import { Theme } from '@/styles/Theme';

import { ITextProps } from '.';

export const Wrapper = styled.span<ITextProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing}px;

  ${(props) =>
    props.variant === 'normal' &&
    css`
      color: ${Theme.T_1};
    `}

  ${(props) =>
    props.variant === 'warning' &&
    css`
      color: ${Theme.M_3};
    `}
`;
