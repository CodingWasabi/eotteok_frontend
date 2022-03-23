import styled from 'styled-components';

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  & > :first-child {
    margin-bottom: 24px;
  }

  & > :nth-child(2) {
    margin-bottom: 60px;
  }

  & > :nth-child(3) {
    margin-bottom: 15px;
  }

  & > :last-child {
    margin-top: 128px;
  }
`;

export const WarningTextWrapper = styled.div<{ isNicknameDuplicated: boolean }>`
  visibility: ${({ isNicknameDuplicated }) => (!isNicknameDuplicated ? 'visible' : 'hidden')};
`;
