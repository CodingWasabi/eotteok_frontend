const tendencyList = [
  {
    personal: '가혹한 일정에 절망하는 짱구',
    common: '이거 볼 시간에 공부해야하지 않나요 ?',
    image: 1,
  },
  {
    personal: '철수 따라하다 지치는 짱구',
    common: '개미는 뚠뚠 오늘도 뚠뚠 열심히 공부 하네',
    image: 1,
  },

  {
    personal: '초코비 먹으며 힘내는 짱구',
    common: '맹구의 콧물처럼 꾸준히 공부해야할듯',
    image: 1,
  },
  {
    personal: '쉬는날에 데이트하러가는 짱구',
    common: '부리부리대마왕 콧구멍만큼 벌어져있는 일정이네요!',
    image: 1,
  },
  {
    personal: '남들 시험볼때 수지랑 데이트하는 짱구',
    common: '시험 빨리보고 늦게보는 친구 당장 놀리러가야지!',
    image: 1,
  },
  {
    personal: '놀다가 뒤늦게 공부하는 짱구',
    common: '중간고사 끝나면 바로 기말고사 기간이에요..',
    image: 1,
  },
  {
    personal: '이번 시험은 널널한 짱구',
    common: '떡잎유치원 여러분~? 빛의 속도로 시험본적 있나요?',
    image: 1,
  },
  {
    personal: '1주일동안 밤새는 철수',
    common: '이거 볼 시간에 공부해야하지 않나요 ?',
    image: 2,
  },
  {
    personal: '매일 꾸준히 복습하는 철수',
    common: '개미는 뚠뚠 오늘도 뚠뚠 열심히 공부 하네',
    image: 2,
  },
  {
    personal: '핫식스 마시면서 밤새는 철수',
    common: '맹구의 콧물처럼 꾸준히 공부해야할듯',
    image: 2,
  },
  {
    personal: '비어있는 일정도 계획적으로 보내는 철수',
    common: '부리부리대마왕 콧구멍만큼 벌어져있는 일정이네요!',
    image: 2,
  },
  {
    personal: '빨리 시험보고 노는계획 세우는 철수',
    common: '시험 빨리보고 늦게보는 친구 당장 놀리러가야지!',
    image: 2,
  },
  {
    personal: '뒷정리 담당 떡잎마을 방범대장 철수',
    common: '중간고사 끝나면 바로 기말고사 기간이에요..',
    image: 2,
  },
  {
    personal: '오히려좋아! 긍정적인 맹구',
    common: '이거 볼 시간에 공부해야하지 않나요 ?',
    image: 3,
  },
  {
    personal: '힘들지만 할만한 거 같은 맹구',
    common: '개미는 뚠뚠 오늘도 뚠뚠 열심히 공부 하네',
    image: 3,
  },
  {
    personal: '노력파 천재 맹구',
    common: '맹구의 콧물처럼 꾸준히 공부해야할듯',
    image: 3,
  },
  {
    personal: '비는 일정에 돌주우러 가는 맹구',
    common: '부리부리대마왕 콧구멍만큼 벌어져있는 일정이네요!',
    image: 3,
  },
  {
    personal: '누구보다 빠르게 남들과는 다르게 맹구',
    common: '시험 빨리보고 늦게보는 친구 당장 놀리러가야지!',
    image: 3,
  },
  {
    personal: '일단 한숨자고 시험 공부하는 맹구',
    common: '중간고사 끝나면 바로 기말고사 기간이에요..',
    image: 3,
  },
  {
    personal: '시..험.. 하나뿐인.. 맹..구',
    common: '떡잎유치원 여러분~? 빛의 속도로 시험본적 있나요?',
    image: 3,
  },
  {
    personal: '화낼 힘도 없는 유리',
    common: '이거 볼 시간에 공부해야하지 않나요 ?',
    image: 4,
  },
  {
    personal: '으르렁 분노의 유리',
    common: '개미는 뚠뚠 오늘도 뚠뚠 열심히 공부 하네',
    image: 4,
  },
  {
    personal: '스트레스는 토끼인형으로 푸는 유리',
    common: '맹구의 콧물처럼 꾸준히 공부해야할듯',
    image: 4,
  },
  {
    personal: '쉬는날 명상하며 분노를 삭히는 유리',
    common: '부리부리대마왕 콧구멍만큼 벌어져있는 일정이네요!',
    image: 4,
  },
  {
    personal: '시험 빨리 보는 얼리버드 유리',
    common: '시험 빨리보고 늦게보는 친구 당장 놀리러가야지!',
    image: 4,
  },
  {
    personal: '분노를 식히고 침착하게 준비하는 유리',
    common: '중간고사 끝나면 바로 기말고사 기간이에요..',
    image: 4,
  },
  {
    personal: '시험이 하나밖에 없어 행복한 유리',
    common: '떡잎유치원 여러분~? 빛의 속도로 시험본적 있나요?',
    image: 4,
  },
  {
    personal: '시험 따위 외면하는 훈이',
    common: '이거 볼 시간에 공부해야하지 않나요 ?',
    image: 5,
  },
  {
    personal: '현실 부정하는 훈이',
    common: '개미는 뚠뚠 오늘도 뚠뚠 열심히 공부 하네',
    image: 5,
  },
  {
    personal: '꾸준히 딴짓하는 훈이',
    common: '맹구의 콧물처럼 꾸준히 공부해야할듯',
    image: 5,
  },
  {
    personal: '쉬는날 민트초코 먹으러가는 훈이',
    common: '부리부리대마왕 콧구멍만큼 벌어져있는 일정이네요!',
    image: 5,
  },
  {
    personal: '시험 늦게보는 친구들 열받게하는 훈이',
    common: '시험 빨리보고 늦게보는 친구 당장 놀리러가야지!',
    image: 5,
  },
  {
    personal: '시험 전날까지 놀 생각인 훈이',
    common: '중간고사 끝나면 바로 기말고사 기간이에요..',
    image: 5,
  },
  {
    personal: '시험이 한개여도 힘들다고 울상인 훈이',
    common: '떡잎유치원 여러분~? 빛의 속도로 시험본적 있나요?',
    image: 5,
  },
];

export default tendencyList;
