import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ExamInfoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${Theme.B_4};

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

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;

  font-size: 24px;
  color: ${Theme.T_3};

  margin: 70px 0;
`;
