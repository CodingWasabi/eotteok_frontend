import { combineReducers } from 'redux';

import survey from '@/modules/survey';

const rootReducer = combineReducers({
  survey,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
