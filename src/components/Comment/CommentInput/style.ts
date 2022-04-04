import styled from 'styled-components';

export const Wrapper = styled.div<{ hasComments: boolean }>`
  display: flex;
  align-items: center;
  width: 341px;

  opacity: ${({ hasComments }) => (hasComments ? 1 : 0.3)};

  & > :not(:first-child) {
    margin-left: 7px;
  }
`;
