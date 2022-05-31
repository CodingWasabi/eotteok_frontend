import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const ExamListWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* height: 100vh; */

  & > :first-child {
    margin: 270px 0 30px 0;
  }

  & > :last-child {
    margin-bottom: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 30px;
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
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${Theme.B_1};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  margin: 17px 0 30px 0;
  padding: 12px 0;

  & > :first-child {
    margin-bottom: ${({ hasComments }) => !hasComments && '20px'};
  }

  width: 100%;
`;

export const CommentBlurWrapper = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80%;

  background-color: ${Theme.B_1};
  opacity: 0.9;
`;

export const DailyExamItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 26px;

  & > div:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const CommentItemListmWrapper = styled.div`
  margin: 46px 0px 22px 0px;

  & > div:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const ClickedDateWrapper = styled.div`
  width: 277px;
  height: 32px;

  text-align: center;
  font-size: 24px;
  color: ${Theme.T_1};

  background-color: ${Theme.M_5};

  padding: 5px 10px;

  margin-bottom: 20px;
`;

export const Date = styled.span`
  box-shadow: inset 0 0px 0 white, inset 0 -1px 0 black;
`;

export const ExamTimeWrapper = styled.div`
  margin-bottom: 50px;
`;

export const Img = styled.img<{ width?: number }>`
  width: ${({ width }) => width}px;
`;
