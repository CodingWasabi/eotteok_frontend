import React, { useState } from 'react';
import moment, { Moment } from 'moment';

import Icon from '@/components/Icon';

import CharacterList from '@/components/Calendar/CharacterList';

import Text from '@/components/common/Text';

import { ICalendar, ICalendarProps } from '@/types/calendar';

import { Theme } from '@/styles/Theme';

import { Wrapper, MonthWrapper, IconWrapper, DayWrapper, FlexCenterWrapper, ClickedDateWrapper } from './style';

const Calendar = ({ calendar, clickedDate, setClickedDate }: ICalendarProps) => {
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
    if (clickedDate === date) {
      setClickedDate(0);
      return;
    }
    setClickedDate(date);
  };

  const onClickPrev = () => {
    setMoment(getMoment.clone().subtract(1, 'month'));
    setClickedDate(0);
  };

  const onClickNext = () => {
    setMoment(getMoment.clone().add(1, 'month'));
    setClickedDate(0);
  };

  const isCurrentMonth = (currentMonth: number, selectedMonth: number) => currentMonth === selectedMonth;

  const calendarArr = () => {
    const result = [];
    let week = firstWeek;
    let calendarInfo: ICalendar;

    for (week; week <= lastWeek; week++) {
      result.push(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((_, index) => {
              const day = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
              const date = Number(day.format('D'));
              const month = Number(day.format('M'));

              let toDoYear;
              let toDoMonth;
              let toDoDate;
              let toDoCommentCount = 0;

              for (let i = 0; i < calendar.length; i++) {
                if (selectedMonth === calendar[i].month && index === 3) {
                  calendarInfo = calendar[i];
                }
              }

              // 시험이 있는 날짜
              for (let i = 0; i < calendarInfo?.toDos.length; i++) {
                [toDoYear, toDoMonth, toDoDate] = calendarInfo.toDos[i].date.split('-');
                toDoCommentCount = calendarInfo.toDos[i].commentCount;

                if (Number(toDoDate) === date) {
                  break;
                }
              }

              return (
                <DayWrapper
                  key={index}
                  isWeekend={isWeekend(day)}
                  isClicked={month === selectedMonth && clickedDate === date}
                  onClick={() => month === selectedMonth && onClickDate(date)}
                >
                  <span>{isCurrentMonth(Number(day.format('M')), selectedMonth) && date}</span>
                  {Number(isCurrentMonth(Number(day.format('M')), selectedMonth) && toDoDate) === date && (
                    <CharacterList commentCount={toDoCommentCount > 5 ? 5 : toDoCommentCount} />
                  )}
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
      {clickedDate > 0 && (
        <FlexCenterWrapper>
          <ClickedDateWrapper>{clickedDate} 일</ClickedDateWrapper>
        </FlexCenterWrapper>
      )}
    </Wrapper>
  );
};

export default Calendar;
