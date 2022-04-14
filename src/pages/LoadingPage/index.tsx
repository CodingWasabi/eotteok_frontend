import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import setCalendarRequestBody from '@/lib/util/setCalenderRequestBody';

import useNickname from '@/hooks/useNickname';
import useCalendar from '@/hooks/useCalendar';
import useSurvey from '@/hooks/useSurvey';
import useCalendarActions from '@/hooks/useCalendarActions';

import { postCalendarAsync } from '@/modules/calendar';

import Icon from '@/components/Icon';

import AppLayout from '@/components/common/AppLayout';
import Text from '@/components/common/Text';

import { Body } from './style';

const LoadingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { nickname } = useNickname();
  const { answerList, dailyQuota, examInfoList } = useSurvey();
  const { postCalendarSuccess, postCalendarError } = useCalendar();

  const { dispatchTendency } = useCalendarActions();

  useEffect(() => {
    const body = setCalendarRequestBody({ nickname, answerList, dailyQuota, examInfoList });

    setTimeout(() => {
      dispatch(postCalendarAsync.request(body));
    }, 3000);
  }, []);

  useEffect(() => {
    if (postCalendarSuccess) {
      navigate('/result');
    }
  }, [postCalendarSuccess]);

  useEffect(() => {
    if (!postCalendarError) return;

    if (!postCalendarError.response) return;

    const {
      response: { status },
    } = postCalendarError;

    if (status === 400) {
      dispatchTendency(36);
      navigate('/result');
    }

    if (status === 409) {
      navigate('/result');
    }
  }, [postCalendarError]);

  return (
    <AppLayout>
      <Body>
        <img src={require(`../../../public/images/tendency/17.png`)} alt="character" />
        <Text fontSize={32}>결과 전송중</Text>
        <Icon icon="Spinner" width={100} height={100} />
      </Body>
    </AppLayout>
  );
};

export default LoadingPage;
