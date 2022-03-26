import React, { useRef } from 'react';

import makeNumberArray from '@/lib/util/makeNumberArray';

import useDetectOutsideClick from '@/hooks/useDetectOutsideClick';

import Icon from '@/components/Icon';
import Text from '@/components/common/Text';

import InputBox from '@/components/Exam/InputBox';

import { InnerContainer, RefWrapper, DatePickerWrapper, PickContainer, PickItem } from './style';

const DatePicker = () => {
  const datePickerRef = useRef<HTMLDivElement>(null);
  const [isShowDatePicker, setIsShowDatePicker] = useDetectOutsideClick(datePickerRef);

  const onClickDatePicker = () => setIsShowDatePicker((prev: boolean) => !prev);

  const year = new Date().getFullYear();
  const monthList = makeNumberArray(12);
  const dayList = makeNumberArray(31);

  return (
    <InputBox isFilled={false} onClick={onClickDatePicker}>
      <InnerContainer>
        <Text fontSize={18} letterSpacing={-0.5}>
          날짜를 선택해보시지 !
        </Text>
        <Icon icon="FilledArrow" width={10} height={5} />
      </InnerContainer>
      {isShowDatePicker && (
        <RefWrapper ref={datePickerRef}>
          <DatePickerWrapper>
            <PickContainer>
              <PickItem>{year}</PickItem>
            </PickContainer>
            <PickContainer>
              {monthList.map((month) => (
                <PickItem>{month}</PickItem>
              ))}
            </PickContainer>
            <PickContainer>
              {dayList.map((day) => (
                <PickItem>{day}</PickItem>
              ))}
            </PickContainer>
          </DatePickerWrapper>
        </RefWrapper>
      )}
    </InputBox>
  );
};

export default DatePicker;
