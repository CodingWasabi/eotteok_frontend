import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { registerEvent, uploadImage } from '@/lib/api/event';

import useWarngingExit from '@/hooks/useWarningExit';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import AppLayout from '@/components/common/AppLayout';

import { RegisterEventProps } from '@/types/event';

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
  Img,
} from './style';

const SurveyPage = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState<RegisterEventProps>({
    name: '',
    phoneNumber: '',
    img: '',
  });

  useWarngingExit();

  const onChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInfo((prev: RegisterEventProps) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (files) {
      const formData = new FormData();
      const image = files[0];

      formData.append('image', image);

      try {
        const { link } = await uploadImage(formData);

        if (link) {
          setInfo((prev: RegisterEventProps) => ({
            ...prev,
            [name]: link,
          }));

          alert('이미지 업로드에 성공했습니다!');
        }
      } catch (error) {
        alert('오류가 발생했습니다. 새로 고침후 다시 시도해주세요.');
      }
    }
  };

  const isFilled = () => {
    type keyType = keyof typeof info;
    return Object.keys(info).every((key) => info[key as keyType] !== '');
  };

  const onClickSubmit = async () => {
    try {
      const { status } = await registerEvent({ ...info });

      if (status === 1) {
        alert('이벤트 응모에 되었습니다!');
      }

      if (status === 2) {
        alert('이벤트 중복 참여가 불가능합니다!');
      }

      navigate('/result');
    } catch (error) {
      alert('이벤트 응모에 실패했습니다. 잠시 후 다시 시도해주세요!');
    }
  };

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
              <Img src="/images/event/event.png" alt="event" />
            </ImgWrapper>
            <SampleWrapper>
              <Img src="/images/event/event_sample.jpg" alt="event_sample" />
            </SampleWrapper>
            <Text fontSize={18} letterSpacing={-0.5}>
              어떡하지 서비스를 이용한 화면을 SNS에 자유롭게 올려주시면
              <br /> 추첨을 통해 10분께 [짱구의 행복 가득한 하루] 이모티콘을 드립니다!
            </Text>
          </TextWrapper>
          <Text>[이벤트 정보 입력]</Text>
          <StyledInput name="name" value={info.name} onChange={onChangeInfo} placeholder="이름" />
          <StyledInput
            name="phoneNumber"
            value={info.phoneNumber}
            onChange={onChangeInfo}
            placeholder="상품 수령 연락처"
          />
          <Text fontSize={18} letterSpacing={-0.5}>
            SNS에 공유한 화면을 캡쳐해서 올려주세요!
          </Text>
          <StyledLabel htmlFor="event_file">파일 선택</StyledLabel>
          <StyledFileInput
            type="file"
            id="event_file"
            name="img"
            accept="image/png, image/jpeg, image/jpg"
            onChange={onChangeImg}
          />
        </ContentsWrapper>
        <ButtonWrapper>
          <Button variant="add" isFilled={isFilled()} onClick={onClickSubmit}>
            이벤트 응모하기
          </Button>
        </ButtonWrapper>
        {/* 이벤트 배너 이미지 테스트 - 결과 페이지로 옮기기 */}
        <Img src="/images/event/event_banner.png" width="325px" alt="event_banner"></Img>
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
