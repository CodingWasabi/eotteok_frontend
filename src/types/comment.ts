interface ICommentInfo {
  profileImageNumber: number;
  nickname: string;
  body: string;
}

export interface IResponseGetComments {
  comments: Array<ICommentInfo>;
}
