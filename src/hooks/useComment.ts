import { useSelector } from 'react-redux';

import { RootState } from '@/modules';

const useComment = () => {
  const comment = useSelector((state: RootState) => state.comment);
  return comment;
};

export default useComment;
