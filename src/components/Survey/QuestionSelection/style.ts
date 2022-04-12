import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Wrapper = styled.div`
  overflow: hidden;

  max-width: 330px;
  width: 100%;
`;

export const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
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

export const DailyQuotaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-width: 330px;
  max-width: 360px;

  & > :first-child {
    margin-bottom: 17px;
  }

  & > :nth-child(2) {
    margin-bottom: 20px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 200px;
`;
