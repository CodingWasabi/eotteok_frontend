import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { postCalendar } from '@/lib/api/calendar';

import { postCalendarAsync, POST_CALENDAR } from '@/modules/calendar';

import { IResponsePostCalendar } from '@/types/calendar';

function* postCalendarSaga(action: ReturnType<typeof postCalendarAsync.request>) {
  try {
    const res: IResponsePostCalendar = yield call(postCalendar, action.payload);
    yield put(postCalendarAsync.success(res));
  } catch (e: unknown) {
    yield put(postCalendarAsync.failure(e as AxiosError));
  }
}

export function* calendarSaga() {
  yield takeEvery(POST_CALENDAR, postCalendarSaga);
}
