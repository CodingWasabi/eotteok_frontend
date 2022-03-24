import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Icon from '@/components/Icon';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';

import Input from '@/components/Nickname/Input';

import AppLayout from '@/components/common/AppLayout';

import { Body, WarningTextWrapper } from './style';

const NickNamePage = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState<string>('');
  const [isNicknameDuplicated, setIsNicknameDuplicated] = useState<boolean>(false);

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onClickNext = () => navigate('/survey');

  return (
    <AppLayout>
      <Body>
        <Icon icon="QuestionMark" width={59} height={64} />
        <Text>닉네임 한번 정해 보시지!</Text>
        <Input value={nickname} onChangeNickname={onChangeNickname} />
        {isNicknameDuplicated && (
          <WarningTextWrapper isNicknameDuplicated={isNicknameDuplicated}>
            <Text variant="warning">*중복된 이름이에요!</Text>
          </WarningTextWrapper>
        )}
        <Button variant="next" isFilled={nickname ? true : false} onClick={onClickNext}>
          다음
        </Button>
      </Body>
    </AppLayout>
  );
};

export default NickNamePage;