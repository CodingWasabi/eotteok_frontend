import client from '@/lib/api/client';

import { IRequestCalendar, IRequestCommentParams, IRequestPostComment, IResponsePostCalendar } from '@/types/calendar';
import { IResponseGetComments } from '@/types/comment';

export const getPersonalCalendar = (userId: number) =>
  client.get<IResponsePostCalendar>(`/calendar/${userId}/result`).then((res) => res.data);

export const getComments = ({ userId, date }: IRequestCommentParams) =>
  client.get<IResponseGetComments>(`/calendar/${userId}/result/comments?date=${date}`).then((res) => res.data.comments);

export const postCalendar = ({ ...body }: IRequestCalendar) =>
  client.post<IResponsePostCalendar>('/calendar', body).then((res) => res.data);

export const postComment = ({ userId, date, profileImageNumber, body }: IRequestPostComment) =>
  client.post(`/calendar/${userId}/result/comments/${date}`, {
    profileImageNumber,
    body,
  });
