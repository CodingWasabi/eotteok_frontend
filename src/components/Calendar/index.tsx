import React, { useState } from 'react';
import moment, { Moment } from 'moment';

import { colorList } from '@/lib/constants';

import Icon from '@/components/Icon';

import CharacterList from '@/components/Calendar/CharacterList';

import Text from '@/components/common/Text';

import { ICalendar, ICalendarProps } from '@/types/calendar';

import { Theme } from '@/styles/Theme';

import { Wrapper, MonthWrapper, IconWrapper, DayWrapper, ColoredLine } from './style';

const Calendar = ({ calendar, selectedMonth, clickedDate, setSelectedMonth, setClickedDate }: ICalendarProps) => {
  const [getMoment, setMoment] = useState<Moment>(moment());

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
    setSelectedMonth((prev) => {
      if (prev === 1) {
        return 12;
      }
      return prev - 1;
    });
  };

  const onClickNext = () => {
    setMoment(getMoment.clone().add(1, 'month'));
    setClickedDate(0);
    setSelectedMonth((prev) => {
      if (prev === 12) {
        return 1;
      }
      return prev + 1;
    });
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

              let colors: Array<number> = [];
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
                [, toDoMonth, toDoDate] = calendarInfo.toDos[i].date.split('-');

                for (let j = 0; j < calendarInfo.dailyCommentsCount.length; j++) {
                  const [, commentMonth, commentDate] = calendarInfo.dailyCommentsCount[j].date.split('-');

                  if (Number(commentDate) === date) {
                    if (Number(commentMonth) === month) {
                      toDoCommentCount = calendarInfo.dailyCommentsCount[j].count;
                    }
                  }
                }

                if (Number(toDoDate) === date) {
                  if (Number(toDoMonth) === month) {
                    colors = calendarInfo.toDos[i].toDos.map((info) => info.color);
                  }
                  break;
                }
              }

              return (
                <DayWrapper
                  key={`${month}/${index}`}
                  isWeekend={isWeekend(day)}
                  isClicked={month === selectedMonth && clickedDate === date}
                  onClick={() => month === selectedMonth && onClickDate(date)}
                >
                  <span>{isCurrentMonth(Number(day.format('M')), selectedMonth) && date}</span>
                  {colors.map((color, index) => (
                    <ColoredLine key={index} color={colorList[color]} />
                  ))}
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
        <Text fontSize={27}>{`${selectedMonth}월`}</Text>
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
