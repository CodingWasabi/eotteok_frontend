import setTime from '@/lib/util/setTime';

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
    exams: examInfoList.map((info: ExamInfoType) => {
      return {
        name: info.exam,
        date: `${info.year}/${setTime(info.month)}/${setTime(info.date)} ${setTime(info.hour)}:${setTime(info.minute)}`,
        prepareTime: info.prepareTime,
      };
    }),
  };
};

export default setCalendarRequestBody;
