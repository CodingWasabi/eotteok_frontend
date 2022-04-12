export interface IDailyToDos {
  name: string;
  hour: number;
  d_day: number;
  color: number;
}

export interface IMonthlyToDos {
  date: string;
  commentCount: number;
  toDos: Array<IDailyToDos>;
}

export interface ICalendar {
  month: number;
  commentCount: number;
  toDos: Array<IMonthlyToDos>;
}

export interface ICalendarProps {
  calendar: Array<ICalendar>;
  clickedDate: number;
  setClickedDate: React.Dispatch<React.SetStateAction<number>>;
}

interface IExam {
  name: string;
  date: string;
  prepareTime: number;
}

export interface IRequestCalendar {
  nickname: string;
  answers: Array<number>;
  dailyQuota: number;
  exams: Array<IExam>;
}

export interface IRequestCommentParams {
  userId: number;
  date: string;
}

export interface IRequestPostComment extends IRequestCommentParams {
  profileImageNumber: number;
  body: string;
}
