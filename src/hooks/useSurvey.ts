import { useSelector } from 'react-redux';

import { RootState } from '@/modules';

const useSurvey = () => {
  const survey = useSelector((state: RootState) => state.survey);
  return survey;
};

export default useSurvey;
