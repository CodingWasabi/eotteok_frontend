import { combineReducers } from 'redux';

import survey from '@/modules/survey';
import nickname from '@/modules/nickname';

const rootReducer = combineReducers({
  survey,
  nickname,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
