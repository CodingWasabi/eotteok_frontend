import client from '@/lib/api/client';

import { IRequestCalendar, IRequestCommentParams, IRequestPostComment, IResponsePostCalendar } from '@/types/calendar';

export const getPersonalCalendar = (userId: number) => client.get(`/calendar/${userId}/result`).then((res) => res.data);

export const getComments = ({ userId, date }: IRequestCommentParams) =>
  client.get(`/calendar/${userId}/result/comments?date=${date}`).then((res) => res.data);

export const postCalendar = ({ ...body }: IRequestCalendar) =>
  client.post<IResponsePostCalendar>('/calendar', body).then((res) => res.data);

export const postComment = ({ userId, date, profileImageNumber, body }: IRequestPostComment) =>
  client
    .post(`/calendar/${userId}/result/comments/${date}`, {
      profileImageNumber,
      body,
    })
    .then((res) => res.data);
