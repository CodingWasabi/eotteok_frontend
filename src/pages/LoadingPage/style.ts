import styled from 'styled-components';

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 70vh;

  & > :nth-child(1) {
    width: 200px;
    margin-bottom: 80px;
  }
`;
