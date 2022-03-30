import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { changeComment, updateCommentInfo } from '@/modules/comment';

const useCommentActions = () => {
  const dispatch = useDispatch();

  const updateComment = useCallback((comment) => dispatch(changeComment(comment)), [dispatch]);
  const dispatchCommentInfo = useCallback((info) => dispatch(updateCommentInfo(info)), [dispatch]);

  return {
    updateComment,
    dispatchCommentInfo,
  };
};

export default useCommentActions;
