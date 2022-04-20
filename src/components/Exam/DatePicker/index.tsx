import React, { useRef, useEffect } from 'react';

import { makeNumberArrayFromOne } from '@/lib/util/makeNumberArray';
import isSelected from '@/lib/util/isSelected';
import setTime from '@/lib/util/setTime';

import useSurvey from '@/hooks/useSurvey';
import useSurveyActions from '@/hooks/useSurveyActions';
import useDetectOutsideClick from '@/hooks/useDetectOutsideClick';

import { ExamScheduleType } from '@/modules/survey';

import Icon from '@/components/Icon';
import Text from '@/components/common/Text';

import InputBox from '@/components/Exam/InputBox';

import { Wrapper, InnerContainer, RefWrapper, DatePickerWrapper, PickContainer, PickItem } from './style';

interface IScrollTo {
  containerRef: React.RefObject<HTMLDivElement>;
  itemRef: React.RefObject<HTMLDivElement>;
}

const DatePicker = () => {
  const datePickerRef = useRef<HTMLDivElement>(null);
  const [isShowDatePicker, setIsShowDatePicker] = useDetectOutsideClick(datePickerRef);

  const monthContainerRef = useRef<HTMLDivElement>(null);
  const dateContainerRef = useRef<HTMLDivElement>(null);

  const monthItemRef = useRef<HTMLDivElement>(null);
  const dateItemRef = useRef<HTMLDivElement>(null);

  const { isFilledDate, examInfoId, examInfoList, year, month, date } = useSurvey();
  const subjectInfo = examInfoList[examInfoId];

  const monthList = makeNumberArrayFromOne(12);
  const dateList = makeNumberArrayFromOne(31);

  const { dispatchIsFilled, updateExamScheduleInfo } = useSurveyActions();

  const onClickDatePicker = () => {
    setIsShowDatePicker((prev: boolean) => !prev);
    dispatchIsFilled({ target: 'isFilledDate', isFilled: true });
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
    if (!isShowDatePicker) {
      return;
    }

    scrollTo({ containerRef: monthContainerRef, itemRef: monthItemRef });
    scrollTo({ containerRef: dateContainerRef, itemRef: dateItemRef });
  }, [isShowDatePicker, month, date]);

  useEffect(() => {
    if (subjectInfo) {
      dispatchIsFilled({ target: 'isFilledDate', isFilled: true });
      updateExamScheduleInfo({ target: 'name', value: subjectInfo.name });
      updateExamScheduleInfo({ target: 'month', value: subjectInfo.month });
      updateExamScheduleInfo({ target: 'date', value: subjectInfo.date });
    }
  }, [subjectInfo]);

  return (
    <Wrapper>
      <InputBox isFilled={isFilledDate} onClick={onClickDatePicker}>
        <InnerContainer>
          <Text fontSize={18} letterSpacing={-0.5}>
            {setTime(year)} / {setTime(month)} / {setTime(date)}
          </Text>
          <Icon icon="FilledArrow" width={10} height={5} />
        </InnerContainer>
      </InputBox>
      {isShowDatePicker && (
        <RefWrapper>
          <DatePickerWrapper ref={datePickerRef}>
            <PickContainer>
              <PickItem isSelected={isSelected(year, year)}>{year}</PickItem>
            </PickContainer>
            <PickContainer ref={monthContainerRef}>
              {monthList.map((monthItem) => (
                <PickItem
                  key={monthItem}
                  ref={isSelected(month, monthItem) ? monthItemRef : null}
                  isSelected={isSelected(month, monthItem)}
                  onClick={() => onClickItem({ target: 'month', value: monthItem })}
                >
                  {monthItem}
                </PickItem>
              ))}
            </PickContainer>
            <PickContainer ref={dateContainerRef}>
              {dateList.map((dateItem) => (
                <PickItem
                  key={dateItem}
                  ref={isSelected(date, dateItem) ? dateItemRef : null}
                  isSelected={isSelected(date, dateItem)}
                  onClick={() => onClickItem({ target: 'date', value: dateItem })}
                >
                  {dateItem}
                </PickItem>
              ))}
            </PickContainer>
          </DatePickerWrapper>
        </RefWrapper>
      )}
    </Wrapper>
  );
};

export default DatePicker;
