import { createReducer } from 'typesafe-actions';

import { postCalendarAsync, updateTendency } from '@/modules/calendar/actions';
import { CalendarType, CalendarAction } from '@/modules/calendar/types';

const initialState: CalendarType = {
  nickname: '',
  tendency: 0,
  accountId: 0,
  calendar: [],
  exams: [],

  postCalendarError: null,
};

const calendar = createReducer<CalendarType, CalendarAction>(initialState)
  .handleAction(updateTendency, (state, { payload: tendency }) => ({
    ...state,
    tendency,
  }))
  .handleAction(postCalendarAsync.success, (state, { payload: { tendency, accountId, calendar, exams } }) => ({
    ...state,
    tendency,
    accountId,
    calendar,
    exams,
  }))
  .handleAction(postCalendarAsync.failure, (state, { payload: postCalendarError }) => ({
    ...state,
    postCalendarError,
  }));
export default calendar;
