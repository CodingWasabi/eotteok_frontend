import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :not(:last-child) {
    margin-bottom: 25px;
  }

  & > :first-child {
    margin: 45px 0px;
  }
`;

export const DelayedTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 325px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 50px;
`;

export const TextCenterWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 20px 0 10px 0;
`;

export const ExamInfoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${Theme.B_4};

  width: 100%;
  min-height: 194px;

  & > :last-child {
    margin: 50px 0 20px 0;
  }
`;
export const ExamListContainer = styled.div`
  & > :first-child {
    margin-top: 20px;
  }

  & > :not(:first-child) {
    margin-top: 10px;
  }
`;
