import React, { useEffect } from 'react';

import useSurvey from '@/hooks/useSurvey';
import useSurveyActions from '@/hooks/useSurveyActions';

import { ExamInfoType } from '@/modules/survey';

import { Wrapper, BorderImgWrapper, Img, ImgOverlay, Text } from './style';

export interface IPrepareTimeProps {
  init: boolean;
  number: number;
  prepareTime: number;
  children: React.ReactText;
  onClickItem: () => void;
}

const PrepareTime = ({ init, number, prepareTime, children, onClickItem }: IPrepareTimeProps) => {
  const { examInfoId, examInfoList } = useSurvey();
  const { updateExamScheduleInfo } = useSurveyActions();
  const subjectInfo = examInfoList[examInfoId];

  useEffect(() => {
    if (subjectInfo) {
      updateExamScheduleInfo({ target: 'prepareTime', value: subjectInfo.prepareTime });
    }
  }, [subjectInfo]);

  return (
    <Wrapper onClick={onClickItem}>
      <BorderImgWrapper init={init} isClicked={prepareTime === number}>
        <Img src={require(`../../../../public/images/emotion/${number}.png`)} alt="감정" />
        <ImgOverlay init={init} isClicked={prepareTime === number} />
      </BorderImgWrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
};

export default PrepareTime;
