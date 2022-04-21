const loginPath = `https://kauth.kakao.com/oauth/authorize?client_id=8cbb1d014182769153fc5832fced3743&redirect_uri=${process.env.REACT_APP_SERVER_URL}/login/oauth2/code/kakao&response_type=code`;

export default loginPath;
