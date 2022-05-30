import styled from 'styled-components';

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  & > :first-child {
    margin-bottom: 37px;
  }

  & > :nth-child(2) {
    margin-bottom: 66px;
  }

  & > :nth-child(3) {
    margin-bottom: 66px;
  }
`;

export const LogoWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 170px;
`;

export const LogoPencilWrapper = styled.div`
  position: absolute;
  right: 25px;
  top: -8px;
`;
