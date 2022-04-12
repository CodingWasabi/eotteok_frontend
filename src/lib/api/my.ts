import client from '@/lib/api/client';

import { IExam } from '@/types/exam';

export const getMyCalendar = () => client.get('/my/calendar/result').then((res) => res.data);

export const getMyExam = () => client.get('/my/exam').then((res) => res.data);

export const putMyExam = (body: Array<IExam>) => client.put('/my/exam');
