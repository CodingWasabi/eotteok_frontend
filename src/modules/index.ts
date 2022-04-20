import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { all } from 'redux-saga/effects';
import session from 'redux-persist/lib/storage/session';

import survey, { surveySaga } from '@/modules/survey';
import nickname from '@/modules/nickname';
import comment from '@/modules/comment';
import calendar, { calendarSaga } from '@/modules/calendar';

const persistConfig = {
  key: 'root',
  storage: session,
};

const rootReducer = combineReducers({
  survey,
  nickname,
  comment,
  calendar,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([calendarSaga(), surveySaga()]);
}
