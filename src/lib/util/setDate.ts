import setTime from '@/lib/util/setTime';

interface ISetDateProps {
  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
}

const setDate = ({ year, month, date, hour, minute }: ISetDateProps) => {
  return `${year}/${setTime(month)}/${setTime(date)} ${setTime(hour)}:${setTime(minute)}`;
};

export default setDate;
