import React, { useState } from 'react';
import moment, { Moment } from 'moment';

import Text from '@/components/common/Text';
import Icon from '@/components/Icon';

import { Theme } from '@/styles/Theme';

import { Wrapper, MonthWrapper, IconWrapper, DayWrapper } from './style';

export interface ICalendarProps {
  isClickedDate: number;
  setIsClickedDate: React.Dispatch<React.SetStateAction<number>>;
}

const Calendar = ({ isClickedDate, setIsClickedDate }: ICalendarProps) => {
  const [getMoment, setMoment] = useState<Moment>(moment());

  const selectedMonth = Number(getMoment.format('M'));

  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const isWeekend = (day: Moment) => {
    const [dayOfTheWeek, _] = day.toString().split(' ');
    return dayOfTheWeek === 'Sat' || dayOfTheWeek === 'Sun';
  };

  const onClickDate = (date: number) => {
    setIsClickedDate(date);
  };

  const onClickPrev = () => {
    setMoment(getMoment.clone().subtract(1, 'month'));
    setIsClickedDate(0);
  };

  const onClickNext = () => {
    setMoment(getMoment.clone().add(1, 'month'));
    setIsClickedDate(0);
  };

  const calendarArr = () => {
    const result = [];
    let week = firstWeek;

    for (week; week <= lastWeek; week++) {
      result.push(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((_, index) => {
              const day = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
              const date = Number(day.format('D'));
              const month = Number(day.format('M'));

              return (
                <DayWrapper
                  key={index}
                  isWeekend={isWeekend(day)}
                  isClicked={month === selectedMonth && isClickedDate === date}
                  onClick={() => month === selectedMonth && onClickDate(date)}
                >
                  <span>{Number(day.format('M')) === selectedMonth && date}</span>
                </DayWrapper>
              );
            })}
        </tr>,
      );
    }

    return result;
  };

  return (
    <Wrapper>
      <MonthWrapper>
        <IconWrapper onClick={onClickPrev}>
          <Icon icon="Arrow" width={12} height={19} color={Theme.T_2} />
        </IconWrapper>
        <Text fontSize={27}>{today.format('M월')}</Text>
        <IconWrapper onClick={onClickNext}>
          <Icon icon="Arrow" width={12} height={19} color={Theme.T_2} rotate={180} />
        </IconWrapper>
      </MonthWrapper>
      <table>
        <tbody>{calendarArr()}</tbody>
      </table>
    </Wrapper>
  );
};

export default Calendar;
