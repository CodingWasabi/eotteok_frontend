import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { updateTendency } from '@/modules/calendar';

const useCalendarActions = () => {
  const dispatch = useDispatch();

  const dispatchTendency = useCallback((tendency) => dispatch(updateTendency(tendency)), [dispatch]);

  return {
    dispatchTendency,
  };
};

export default useCalendarActions;
