import { useSelector } from 'react-redux';

import { RootState } from '@/modules';

const useCalendar = () => {
  const calendar = useSelector((state: RootState) => state.calendar);
  return calendar;
};

export default useCalendar;
