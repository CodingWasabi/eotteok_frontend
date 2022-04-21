import { ActionType } from 'typesafe-actions';
import { AxiosError } from 'axios';

import * as actions from '@/modules/calendar/actions';

import { IResponsePostCalendar } from '@/types/calendar';

export type CalendarAction = ActionType<typeof actions>;

export type CalendarType = IResponsePostCalendar & {
  postCalendarSuccess: boolean;
  postCalendarError: AxiosError | null;
};

export type InitStateType = {
  target: string;
  value: number | string | boolean;
};
