import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
`;

export const Background = styled.img`
  position: absolute;
  z-index: -1;

  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`;

export const Header = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 122px;
  height: 65px;

  margin: 0 auto;
`;
