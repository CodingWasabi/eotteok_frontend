import React, { useRef, useEffect } from 'react';

import { makeNumberArrayFromZero } from '@/lib/util/makeNumberArray';
import isSelected from '@/lib/util/isSelected';
import setTime from '@/lib/util/setTime';

import useSurvey from '@/hooks/useSurvey';
import useSurveyActions from '@/hooks/useSurveyActions';
import useDetectOutsideClick from '@/hooks/useDetectOutsideClick';

import { ExamScheduleType } from '@/modules/survey';

import Icon from '@/components/Icon';
import Text from '@/components/common/Text';

import InputBox from '@/components/Exam/InputBox';

import { Wrapper, InnerContainer, RefWrapper, TimePickerWrapper, PickContainer, PickItem } from './style';

interface IScrollTo {
  containerRef: React.RefObject<HTMLDivElement>;
  itemRef: React.RefObject<HTMLDivElement>;
}

const TimePicker = () => {
  const { hour, minute, examInfoId, examInfoList, isFilledTime } = useSurvey();
  const { dispatchIsFilled, updateExamScheduleInfo } = useSurveyActions();

  const timePickerRef = useRef<HTMLDivElement>(null);
  const [isShowTimePicker, setIsShowTimePicker] = useDetectOutsideClick(timePickerRef);

  const hourContainerRef = useRef<HTMLDivElement>(null);
  const minuteContainerRef = useRef<HTMLDivElement>(null);

  const hourItemRef = useRef<HTMLDivElement>(null);
  const minuteItemRef = useRef<HTMLDivElement>(null);

  const subjectInfo = examInfoList[examInfoId];

  const hourList = makeNumberArrayFromZero(24);
  const minuteList = makeNumberArrayFromZero(60);

  const onClickTimePicker = () => {
    setIsShowTimePicker((prev: boolean) => !prev);
    dispatchIsFilled({ target: 'isFilledTime', isFilled: true });
  };

  const scrollTo = ({ containerRef, itemRef }: IScrollTo) => {
    if (!itemRef.current) {
      return;
    }

    containerRef.current?.scroll({
      top: itemRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const onClickItem = ({ target, value }: ExamScheduleType) => {
    updateExamScheduleInfo({ target, value });
  };

  useEffect(() => {
    if (!isShowTimePicker) {
      return;
    }

    scrollTo({ containerRef: hourContainerRef, itemRef: hourItemRef });
    scrollTo({ containerRef: minuteContainerRef, itemRef: minuteItemRef });
  }, [isShowTimePicker, hour, minute]);

  useEffect(() => {
    if (subjectInfo) {
      dispatchIsFilled({ target: 'isFilledTime', isFilled: true });
      updateExamScheduleInfo({ target: 'hour', value: subjectInfo.hour });
      updateExamScheduleInfo({ target: 'date', value: subjectInfo.date });
    }
  }, [subjectInfo]);

  return (
    <Wrapper>
      <InputBox isFilled={isFilledTime} onClick={onClickTimePicker}>
        <InnerContainer>
          <Text fontSize={18} letterSpacing={-0.5}>
            {setTime(hour)} : {setTime(minute)}
          </Text>
          <Icon icon="FilledArrow" width={10} height={5} />
        </InnerContainer>
      </InputBox>
      {isShowTimePicker && (
        <RefWrapper>
          <TimePickerWrapper ref={timePickerRef}>
            <PickContainer ref={hourContainerRef}>
              {hourList.map((hourItem) => (
                <PickItem
                  key={hourItem}
                  ref={isSelected(hour, hourItem) ? hourItemRef : null}
                  isSelected={isSelected(hour, hourItem)}
                  onClick={() => onClickItem({ target: 'hour', value: hourItem })}
                >
                  {setTime(hourItem)}
                </PickItem>
              ))}
            </PickContainer>
            <PickContainer ref={minuteContainerRef}>
              {minuteList.map((minuteItem) => (
                <PickItem
                  key={minuteItem}
                  ref={isSelected(minute, minuteItem) ? minuteItemRef : null}
                  isSelected={isSelected(minute, minuteItem)}
                  onClick={() => onClickItem({ target: 'minute', value: minuteItem })}
                >
                  {setTime(minuteItem)}
                </PickItem>
              ))}
            </PickContainer>
          </TimePickerWrapper>
        </RefWrapper>
      )}
    </Wrapper>
  );
};

export default TimePicker;
