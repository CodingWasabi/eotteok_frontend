import styled from 'styled-components';

import { ITextProps } from '.';

export const Wrapper = styled.span<ITextProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing}px;
  color: ${({ color }) => color};
`;
