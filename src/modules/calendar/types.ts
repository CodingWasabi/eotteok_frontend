import { ActionType } from 'typesafe-actions';
import { AxiosError } from 'axios';

import * as actions from '@/modules/calendar/actions';

import { IResponsePostCalendar } from '@/types/calendar';

export type CalendarAction = ActionType<typeof actions>;

export type CalendarType = IResponsePostCalendar & {
  postCalendarError: AxiosError | null;
};
