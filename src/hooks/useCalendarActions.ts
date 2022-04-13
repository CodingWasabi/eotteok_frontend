import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { updateTendency, updateCalendarFromServer } from '@/modules/calendar';

const useCalendarActions = () => {
  const dispatch = useDispatch();

  const dispatchTendency = useCallback((tendency) => dispatch(updateTendency(tendency)), [dispatch]);
  const dispatchCalendar = useCallback((data) => dispatch(updateCalendarFromServer(data)), [dispatch]);

  return {
    dispatchTendency,
    dispatchCalendar,
  };
};

export default useCalendarActions;
