import styled from 'styled-components';

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 70vh;

  & > :not(:last-child) {
    margin-bottom: 50px;
  }
`;
