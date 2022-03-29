const setTime = (time: number) => (time < 10 ? `0${time}` : time);

export default setTime;
