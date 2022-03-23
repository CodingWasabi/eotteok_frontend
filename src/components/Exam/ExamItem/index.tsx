import React from 'react';

import Icon from '@/components/Icon';

import { Wrapper, IconWrapper } from './style';

export interface IExamItemProps {
  isEdit: boolean;
  isSelected: boolean;
  children: React.ReactText;
}

const ExamItem = ({ isEdit, isSelected, children }: IExamItemProps) => {
  return (
    <Wrapper isEdit={isEdit} isSelected={isSelected}>
      {children}
      <IconWrapper>
        <Icon icon="Pencil" width={18} height={18} color="#8E8E93" />
      </IconWrapper>
    </Wrapper>
  );
};

export default ExamItem;
