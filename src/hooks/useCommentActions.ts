import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { resetComment, changeComment, updateCommentInfo } from '@/modules/comment';

const useCommentActions = () => {
  const dispatch = useDispatch();

  const dispatchResetComment = useCallback(() => dispatch(resetComment()), [dispatch]);
  const updateComment = useCallback((comment) => dispatch(changeComment(comment)), [dispatch]);
  const dispatchCommentInfo = useCallback((info) => dispatch(updateCommentInfo(info)), [dispatch]);

  return {
    dispatchResetComment,
    updateComment,
    dispatchCommentInfo,
  };
};

export default useCommentActions;
