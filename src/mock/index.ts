export const myCalenderResult = {
  nickname: 'jun5e00',
  tendency: 5,
  commentCount: 1, // 월 기준 댓글 개수
  exams: [
    {
      name: '가나다라마바사아',
      year: 2022,
      month: 4,
      date: 1,
      hour: 16,
      minute: 33,
      d_day: 133,
      color: 0,
    },
    {
      name: '시험2',
      year: 2022,
      month: 12,
      date: 13,
      hour: 3,
      minute: 0,
      d_day: 1,
      color: 1,
    },
    {
      name: '시험3',
      year: 2022,
      month: 7,
      date: 16,
      hour: 9,
      minute: 1,
      d_day: 0,
      color: 4,
    },
    {
      name: '시험1',
      year: 2022,
      month: 8,
      date: 5,
      hour: 12,
      minute: 33,
      d_day: 13,
      color: 3,
    },
    {
      name: '시험5',
      year: 2022,
      month: 7,
      date: 30,
      hour: 23,
      minute: 33,
      d_day: 13,
      color: 2,
    },
  ],
  calendar: [
    {
      month: 3,
      commentCount: 32, // 월 기준 댓글 개수
      toDos: [
        {
          date: '2022-03-02', // 해당 날짜
          commentCount: 4, // 해당 날짜 댓글 개수
          toDos: [
            {
              name: '데이터 분석 및 활용',
              hour: 2,
              d_day: 3, // 해당 날짜 기준의 d-day
              color: 1,
            },
            {
              name: '컴파일러',
              hour: 2,
              d_day: 4,
              color: 1,
            },
          ],
        },
        {
          date: '2022-03-03',
          commentCount: 4,
          toDos: [
            {
              name: '데이터 분석 및 활용',
              hour: 2,
              d_day: 2,
              color: 1,
            },
            {
              name: '컴파일러',
              hour: 2,
              d_day: 3,
              color: 1,
            },
          ],
        },
      ],
    },
    {
      month: 4,
      commentCount: 32, // 월 기준 댓글 개수
      toDos: [
        {
          date: '2022-04-02', // 해당 날짜
          commentCount: 4, // 해당 날짜 댓글 개수
          toDos: [
            {
              name: '데이터 분석 및 활용1',
              hour: 2,
              d_day: 3, // 해당 날짜 기준의 d-day
              color: 1,
            },
            {
              name: '컴파일러',
              hour: 2,
              d_day: 4,
              color: 1,
            },
          ],
        },
        {
          date: '2022-04-03',
          commentCount: 2,
          toDos: [
            {
              name: '데이터 분석 및 활용2',
              hour: 2,
              d_day: 2,
              color: 1,
            },
            {
              name: '컴파일러',
              hour: 2,
              d_day: 3,
              color: 1,
            },
          ],
        },
      ],
    },
  ],
};

export const comments = [
  {
    profileImageNumber: 1,
    nickname: 'nickname1',
    body: 'body1',
  },
  {
    profileImageNumber: 2,
    nickname: 'nickname2',
    body: 'body2',
  },
];
