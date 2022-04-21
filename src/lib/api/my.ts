import client from '@/lib/api/client';

import { GetExamInfoListType } from '@/modules/survey';

import { IExam } from '@/types/exam';
import { IResponsePostCalendar } from '@/types/calendar';

export const getMyCalendar = () => client.get<IResponsePostCalendar>('/my/calendar/result').then((res) => res.data);

export const getMyExamList = (id: number) => client.get<GetExamInfoListType>('/my/exams').then((res) => res.data);

export const putMyExam = (body: Array<IExam>) => client.put('/my/exams', { exams: body });
