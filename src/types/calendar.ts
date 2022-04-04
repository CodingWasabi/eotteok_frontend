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
