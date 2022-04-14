import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { updateState, updateTendency, updateCalendarFromServer } from '@/modules/calendar';

const useCalendarActions = () => {
  const dispatch = useDispatch();

  const dispatchUpdateState = useCallback((state) => dispatch(updateState(state)), [dispatch]);
  const dispatchTendency = useCallback((tendency) => dispatch(updateTendency(tendency)), [dispatch]);
  const dispatchCalendar = useCallback((data) => dispatch(updateCalendarFromServer(data)), [dispatch]);

  return {
    dispatchUpdateState,
    dispatchTendency,
    dispatchCalendar,
  };
};

export default useCalendarActions;
