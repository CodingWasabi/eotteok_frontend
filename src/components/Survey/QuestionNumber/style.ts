import styled from 'styled-components';

import { IQuestionNumberProps } from '@/components/Survey/QuestionNumber';

export const Wrapper = styled.div<IQuestionNumberProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 22px;
  height: 22px;

  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};

  color: ${({ theme }) => theme.T_1};
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
`;
