import React, { useRef } from 'react';

import useDetectOutsideClick from '@/hooks/useDetectOutsideClick';

import Icon from '@/components/Icon';

import { Wrapper, CharacterWrapper, Img, IconWrapper, RefWrapper, CharacterListWrapper } from './style';

export interface ICharacterSelectionProps {
  isCharacterListClicked: boolean;
  onClickCharacterList: () => void;
}

const CharacterSelection = () => {
  const arr = new Array(5).fill(0);
  const characterListRef = useRef<HTMLDivElement>(null);
  const [isShowCharacterList, setIsShowCharacter] = useDetectOutsideClick(characterListRef);

  const onClickCharacterList = () => setIsShowCharacter((prev: boolean) => !prev);

  return (
    <Wrapper>
      <CharacterWrapper>
        <Img src={`images/comment/1.png`} onClick={onClickCharacterList} />
        <IconWrapper onClick={onClickCharacterList}>
          <Icon icon="Arrow" color="#8E8E93" rotate={270} width={15} height={15} />
        </IconWrapper>
      </CharacterWrapper>
      {isShowCharacterList && (
        <RefWrapper>
          <CharacterListWrapper ref={characterListRef}>
            {arr.map((_, index) => (
              <Img src={`images/comment/${index + 1}.png`} />
            ))}
          </CharacterListWrapper>
        </RefWrapper>
      )}
    </Wrapper>
  );
};

export default CharacterSelection;
