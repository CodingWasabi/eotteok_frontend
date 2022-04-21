import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import setTime from '@/lib/util/setTime';
import { colorList, loginPath } from '@/lib/constants';

import useMe from '@/hooks/useMe';

import Icon from '@/components/Icon';

import InputBox from '@/components/Exam/InputBox';

import Text from '@/components/common/Text';

import { Theme } from '@/styles/Theme';

import { Wrapper, Container, ExamInfoWrapper, ColorTag, IconWrapper } from './style';

interface IExamInfo {
  name: string;
  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
  d_day: number;
  color: number;
}

export interface IExamListProps {
  exams: Array<IExamInfo>;
}

const ExamList = ({ exams }: IExamListProps) => {
  const navigate = useNavigate();
  const params = useParams();

  const { accountId: accountIdFromParams } = params;

  const { me: accountId } = useMe();

  const onClickPencilIcon = (examNumber: number) => {
    if (!accountId) {
      alert('로그인이 필요합니다!');
      window.location.href = loginPath;
      return;
    }

    if (accountIdFromParams !== undefined) {
      if (accountId !== accountIdFromParams) {
        return;
      }
    }

    navigate('/exam/edit', { state: examNumber });
  };

  return (
    <Wrapper>
      <Text fontSize={20} letterSpacing={-0.5}>
        &lt; 시험 리스트 &gt;
      </Text>
      {exams.map((data, index) => (
        <InputBox key={index} isFilled={false}>
          <Container>
            <ColorTag backgroundColor={colorList[data.color]} />
            <ExamInfoWrapper>
              <Text fontSize={18} letterSpacing={2}>
                {data.name.length > 6 ? `${data.name.substring(0, 7)}...` : data.name}
              </Text>
              <Text fontSize={18} letterSpacing={2}>
                {data.month}/{data.date}
              </Text>
              <Text fontSize={18} letterSpacing={2}>
                {setTime(data.hour)}:{setTime(data.minute)}
              </Text>
              <Text fontSize={18} letterSpacing={2}>
                D-{data.d_day}
              </Text>
            </ExamInfoWrapper>
            <IconWrapper onClick={() => onClickPencilIcon(index)}>
              <Icon icon="Pencil" color={Theme.T_1} width={14} height={14} />
            </IconWrapper>
          </Container>
        </InputBox>
      ))}
    </Wrapper>
  );
};

export default ExamList;
