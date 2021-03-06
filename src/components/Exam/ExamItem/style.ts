import styled from 'styled-components';

import { Theme } from '@/styles/Theme';

interface IWrapperProps {
  isEdit: boolean;
  isSelected: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 325px;
  height: 45px;

  border-radius: 12px;
  background-color: ${({ isEdit, isSelected }) => (isEdit ? (isSelected ? Theme.B_1 : Theme.B_5) : Theme.B_1)};
  border: ${({ isEdit, isSelected }) => isSelected && isEdit && `2px solid ${Theme.M_2}`};

  font-size: 18px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;

  position: absolute;
  right: 13px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
`;
