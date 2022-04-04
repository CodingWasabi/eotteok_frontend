import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;

  & > :nth-child(1) {
    display: inline-block;
    width: 160px;
  }

  & > :nth-child(2),
  & > :nth-child(3) {
    display: inline-block;
    width: 55px;
  }
`;
