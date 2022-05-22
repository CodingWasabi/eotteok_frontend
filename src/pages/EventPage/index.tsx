import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useNickname from '@/hooks/useNickname';
import Icon from '@/components/Icon';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import useWarngingExit from '@/hooks/useWarningExit';
import AppLayout from '@/components/common/AppLayout';
import event_img from '../../../public/images/event.png';
import event_sample_img from '../../../public/images/event_sample.jpg';
import {
  Body,
  ExamInfoListWrapper,
  StyledInput,
  ButtonWrapper,
  TextCenterWrapper,
  ContentsWrapper,
  TextWrapper,
  ImgWrapper,
  SampleWrapper,
  StyledFileInput,
  StyledLabel,
} from './style';

const SurveyPage = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { dispatchTendency } = useCalendarActions();

  useWarngingExit();
  const nickname = 'dummy';
  function handleChange(e: any) {
    console.log(`Selected file - ${e.target.files[0].name}`);
  }

  return (
    <AppLayout>
      <Body>
        <ContentsWrapper>
          <TextWrapper>
            <Text>SNS 공유 Event!</Text>
            <br />
            <Text fontSize={18} letterSpacing={-0.5}>
              어떡하지 서비스를 이용해주신 여러분께
              <br />
              감사 이벤트를 준비했습니다!😆
            </Text>
            <ImgWrapper>
              <img src={event_img} />
            </ImgWrapper>
            <SampleWrapper>
              <img src={event_sample_img} />
            </SampleWrapper>
            <Text fontSize={18} letterSpacing={-0.5}>
              어떡하지 서비스를 이용한 화면을 SNS에 자유롭게 올려주시면
              <br /> 추첨을 통해 10분께 [짱구의 행복 가득한 하루] 이모티콘을 드립니다!
            </Text>
          </TextWrapper>
          <Text>[이벤트 정보 입력]</Text>
          <StyledInput placeholder={'이름'} />
          <StyledInput placeholder={'상품 수령 연락처'} />
          <Text fontSize={18} letterSpacing={-0.5}>
            SNS에 공유한 화면을 캡쳐해서 올려주세요!
          </Text>
          <StyledFileInput id="event_file" type="file" onChange={handleChange} />
          {/* <StyledLabel htmlFor="event_file">파일 선택</StyledLabel> */}
        </ContentsWrapper>
        <ButtonWrapper>
          <Button variant={'add'} isFilled={nickname ? true : false}>
            이벤트 응모하기
          </Button>
        </ButtonWrapper>
        <ExamInfoListWrapper>
          <TextCenterWrapper>
            <Text fontSize={18} letterSpacing={-0.5}>
              * 이벤트 추첨 종료 및 상품 지급 완료시 제출된 모든 정보는 파기됩니다.
              <br />
              * 공유 SNS는 facebook, instagram, twitter 등 무관합니다.
              <br />
              * 공유 방식은 게시글, 스토리 등 모든 형태 가능합니다.
              <br />
            </Text>
          </TextCenterWrapper>
        </ExamInfoListWrapper>
      </Body>
    </AppLayout>
  );
};

export default SurveyPage;
``;
