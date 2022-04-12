import { createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import createRequestActionTypes from '@/lib/util/createRequestActionTypes';

import { IRequestCalendar, IResponsePostCalendar } from '@/types/calendar';

/**
 * 액션 타입
 */
export const UPDATE_TENDENCY = 'calendar/UPDATE_TENDENCY';

/**
 * 사가 액션 타입
 */
export const [POST_CALENDAR, POST_CALENDAR_SUCCESS, POST_CALENDAR_FAILURE] =
  createRequestActionTypes('calendar/POST_CALENDAR');

/**
 * 액션 생성 함수
 */
export const updateTendency = createAction(UPDATE_TENDENCY)<number>();

/**
 * 사가 생성 함수
 */
export const postCalendarAsync = createAsyncAction(POST_CALENDAR, POST_CALENDAR_SUCCESS, POST_CALENDAR_FAILURE)<
  IRequestCalendar,
  IResponsePostCalendar,
  AxiosError
>();
