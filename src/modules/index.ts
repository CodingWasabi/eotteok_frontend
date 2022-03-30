import { combineReducers } from 'redux';

import survey from '@/modules/survey';
import nickname from '@/modules/nickname';
import comment from '@/modules/comment';

const rootReducer = combineReducers({
  survey,
  nickname,
  comment,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
