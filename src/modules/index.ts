import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import survey from '@/modules/survey';
import nickname from '@/modules/nickname';
import comment from '@/modules/comment';
import calendar, { calendarSaga } from '@/modules/calendar';

const rootReducer = combineReducers({
  survey,
  nickname,
  comment,
  calendar,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([calendarSaga()]);
}
