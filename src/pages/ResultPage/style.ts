import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  & > :first-child {
    margin-top: 800px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 120px;
`;

export const ResetText = styled.span`
  cursor: pointer;

  margin-bottom: 80px;

  color: ${Theme.T_1};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;

  text-decoration: underline;
  text-underline-position: under;
`;

export const CommentInputWrapper = styled.div<{ hasComments: boolean }>`
  display: flex;
  flex-direction: column;

  align-items: center;

  background-color: ${Theme.B_1};

  margin: 17px 0 30px 0;
  padding: 12px 0;

  & > :first-child {
    margin-bottom: ${({ hasComments }) => !hasComments && '20px'};
  }

  width: 100%;
`;
