import React from 'react';

import { Wrapper, Img } from './style';

export interface ICharacterListInfo {
  commentCount: number;
}

const CharacterList = ({ commentCount }: ICharacterListInfo) => {
  const arr = Array(commentCount).fill(0);

  return (
    <Wrapper>
      {arr.map((_, index) => (
        <Img key={index} src={`/images/comment/${index + 1}.png`} alt="캐릭터" />
      ))}
    </Wrapper>
  );
};

export default CharacterList;
