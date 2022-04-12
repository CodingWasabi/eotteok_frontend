import client from '@/lib/api/client';

import { IRequestCalendar, IRequestCommentParams, IRequestPostComment } from '@/types/calendar';

export const registerCalendar = ({ ...body }: IRequestCalendar) => client.post('/calendar', body);

export const getComments = ({ userId, date }: IRequestCommentParams) =>
  client.get(`/calendar/${userId}/result/comments?date=${date}`);

export const postComment = ({ userId, date, profileImageNumber, body }: IRequestPostComment) =>
  client.post(`/calendar/${userId}/result/comments/${date}`, {
    profileImageNumber,
    body,
  });
