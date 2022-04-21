import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';

import { validateNickname } from '@/lib/api/validation';

import useNicknameActions from '@/hooks/useNicknameActions';
import useWarngingExit from '@/hooks/useWarningExit';
import useDebounce from '@/hooks/useDebounce';

import Icon from '@/components/Icon';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';

import Input from '@/components/Nickname/Input';

import AppLayout from '@/components/common/AppLayout';

import { Theme } from '@/styles/Theme';

import { Body, WarningTextWrapper } from './style';

const NickNamePage = () => {
  const navigate = useNavigate();

  const { registerNickname } = useNicknameActions();

  const [nickname, setNickname] = useState<string>('');
  const [isLoading, debouncedValue] = useDebounce<string>(nickname, 500);
  const [isNicknameDuplicated, setIsNicknameDuplicated] = useState<boolean>(true);

  const { data: statusCode } = useSWR(
    ['validateNickname', debouncedValue],
    debouncedValue ? () => validateNickname(debouncedValue) : null,
  );

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onClickNext = () => {
    registerNickname(nickname);
    navigate('/survey');
  };

  useEffect(() => {
    if (!debouncedValue) {
      setIsNicknameDuplicated(true);
    }
    if (statusCode === 200) {
      setIsNicknameDuplicated(false);
    }
    if (statusCode === 400) {
      setIsNicknameDuplicated(true);
    }
  }, [debouncedValue, statusCode]);

  useWarngingExit();

  return (
    <AppLayout>
      <Body>
        <Icon icon="QuestionMark" width={59} height={64} />
        <Text>닉네임 한번 정해 보시지!</Text>
        <Input value={nickname} onChangeNickname={onChangeNickname} />
        {isLoading && <Icon icon="Spinner" width={50} height={50} />}
        {!!debouncedValue && isNicknameDuplicated && (
          <WarningTextWrapper isNicknameDuplicated={!!debouncedValue && isNicknameDuplicated}>
            <Text color={Theme.M_3}>*중복된 이름이에요!</Text>
          </WarningTextWrapper>
        )}
        <Button variant="next" isFilled={!isNicknameDuplicated} onClick={onClickNext}>
          다음
        </Button>
      </Body>
    </AppLayout>
  );
};

export default NickNamePage;
