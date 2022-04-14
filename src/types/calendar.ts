import React from 'react';

import { IExam } from '@/types/exam';

export interface IDailyToDos {
  name: string;
  hour: number;
  d_day: number;
  color: number;
  month: number;
  date: number;
}

export interface IMonthlyToDos {
  date: string;
  commentCount: number;
  toDos: Array<IDailyToDos>;
}

interface ICommentCount {
  date: string;
  count: number;
}

export interface ICalendar {
  month: number;
  commentCount: number;
  dailyCommentsCount: Array<ICommentCount>;
  toDos: Array<IMonthlyToDos>;
}

export interface ICalendarProps {
  calendar: Array<ICalendar>;
  selectedMonth: number;
  clickedDate: number;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
  setClickedDate: React.Dispatch<React.SetStateAction<number>>;
}

export interface IRequestCalendar {
  nickname: string;
  answers: Array<number>;
  dailyQuota: number;
  exams: Array<IExam>;
}

export interface IRequestCommentParams {
  userId: number;
  date: string;
}

export interface IRequestPostComment extends IRequestCommentParams {
  profileImageNumber: number;
  body: string;
}

export interface IResponsePostCalendar {
  nickname: string;
  tendency: number;
  accountId: number | null;
  calendar: Array<ICalendar>;
  exams: Array<{
    name: string;
    year: number;
    month: number;
    date: number;
    hour: number;
    minute: number;
    d_day: number;
    color: number;
  }>;
}
