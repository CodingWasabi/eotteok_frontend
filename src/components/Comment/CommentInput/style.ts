import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 341px;

  & > :not(:first-child) {
    margin-left: 7px;
  }
`;
