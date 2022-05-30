import { createReducer } from 'typesafe-actions';

import { resetComment, changeComment, updateCommentInfo } from '@/modules/comment/actions';
import { CommentType, CommentAction } from '@/modules/comment/types';

const initialState = {
  comment: '',

  selectedCharacterNumber: 1,
};

const comment = createReducer<CommentType, CommentAction>(initialState)
  .handleAction(resetComment, () => ({
    ...initialState,
  }))
  .handleAction(changeComment, (state, { payload: comment }) => ({
    ...state,
    comment,
  }))
  .handleAction(updateCommentInfo, (state, { payload: { target, value } }) => ({
    ...state,
    [target]: value,
  }));

export default comment;
