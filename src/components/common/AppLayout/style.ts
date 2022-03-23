import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Background = styled.img`
  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 65px;
`;
