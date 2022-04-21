import setDate from '@/lib/util/setDate';

import { ExamInfoType } from '@/modules/survey';

interface ISetCalendarRequestBodyProps {
  nickname: string;
  answerList: Array<number>;
  dailyQuota: number;
  examInfoList: Array<ExamInfoType>;
}

const setCalendarRequestBody = ({ nickname, answerList, dailyQuota, examInfoList }: ISetCalendarRequestBodyProps) => {
  return {
    nickname,
    answers: answerList,
    dailyQuota,
    exams: examInfoList.map(({ name, year, month, date, hour, minute, prepareTime }) => {
      return {
        name,
        date: setDate({ year, month, date, hour, minute }),
        prepareTime,
      };
    }),
  };
};

export default setCalendarRequestBody;
