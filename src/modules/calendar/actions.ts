import { createAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

import createRequestActionTypes from '@/lib/util/createRequestActionTypes';

import { InitStateType } from '@/modules/calendar/types';

import { IRequestCalendar, IResponsePostCalendar } from '@/types/calendar';

/**
 * 액션 타입
 */
export const RESET_CALENDAR = 'calendar/RESET_CALENDAR';
export const UPDATE_STATE = 'calendar/UPDATE_STATE';
export const UPDATE_TENDENCY = 'calendar/UPDATE_TENDENCY';
export const UPDATE_CALENDAR_FROM_SERVER = 'calendar/UPDATE_CALENDAR_FROM_SERVER';

/**
 * 사가 액션 타입
 */
export const [POST_CALENDAR, POST_CALENDAR_SUCCESS, POST_CALENDAR_FAILURE] =
  createRequestActionTypes('calendar/POST_CALENDAR');

/**
 * 액션 생성 함수
 */
export const resetCalendar = createAction(RESET_CALENDAR)();
export const updateState = createAction(UPDATE_STATE)<InitStateType>();
export const updateTendency = createAction(UPDATE_TENDENCY)<number>();
export const updateCalendarFromServer = createAction(UPDATE_CALENDAR_FROM_SERVER)<IResponsePostCalendar>();

/**
 * 사가 생성 함수
 */
export const postCalendarAsync = createAsyncAction(POST_CALENDAR, POST_CALENDAR_SUCCESS, POST_CALENDAR_FAILURE)<
  IRequestCalendar,
  IResponsePostCalendar,
  AxiosError
>();
