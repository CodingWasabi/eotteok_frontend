import React from 'react';

import Icon from '@/components/Icon';

import useSurveyActions from '@/hooks/useSurveyActions';

import { Wrapper, IconWrapper } from './style';

export interface IExamItemProps {
  id: number;
  isEdit: boolean;
  isSelected: boolean;
  children: React.ReactText;
}

const ExamItem = ({ id, isEdit, isSelected, children }: IExamItemProps) => {
  const { dispatchExamInfoId, updateExamScheduleInfo } = useSurveyActions();

  const onClickEdit = () => {
    dispatchExamInfoId(id);
    updateExamScheduleInfo({ target: 'isEdit', value: true });
  };

  return (
    <Wrapper isEdit={isEdit} isSelected={isSelected}>
      {children}
      <IconWrapper onClick={onClickEdit}>
        <Icon icon="Pencil" width={18} height={18} color="#8E8E93" />
      </IconWrapper>
    </Wrapper>
  );
};

export default ExamItem;
