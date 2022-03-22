import React from 'react';

import { Wrapper } from './style';

export interface IQuestionNumberProps {
  backgroundColor: string;
  children: React.ReactText;
}

const QuestionNumber = ({ backgroundColor, children }: IQuestionNumberProps) => {
  return <Wrapper backgroundColor={backgroundColor}>{children}</Wrapper>;
};

export default QuestionNumber;
