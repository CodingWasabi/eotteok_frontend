import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextCenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 10px 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

export const StyledInput = styled.input`
  border: solid 1px ${Theme.T_2};
  border-radius: 12px;

  width: 325px;
  height: 45px;

  padding-left: 16px;
  font-size: 18px;
  letter-spacing: -0.5px;
`;

export const StyledFileInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border: solid 1px ${Theme.T_2};
  border-radius: 12px;

  width: 100px;
  height: 45px;

  font-size: 18px;
  letter-spacing: -0.5px;
`;

export const ExamInfoListWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
  background-color: ${Theme.B_4};
  width: 100%;
  min-height: 194px;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :not(:last-child) {
    margin-bottom: 15px;
  }

  & > :first-child {
    margin: 25px 0px;
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

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > img {
    width: 100px;
    margin-top: 5px;
  }
`;

export const SampleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > img {
    width: 250px;
    border: solid 0.5px;
    margin-top: -10px;
    margin-bottom: 10px;
  }
`;
