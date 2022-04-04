import React, { useRef } from 'react';

import useComment from '@/hooks/useComment';
import useCommentActions from '@/hooks/useCommentActions';
import useDetectOutsideClick from '@/hooks/useDetectOutsideClick';

import Icon from '@/components/Icon';

import { Wrapper, CharacterWrapper, Img, IconWrapper, RefWrapper, CharacterListWrapper } from './style';

export interface ICharacterSelectionProps {
  hasComments: boolean;
}

const CharacterSelection = ({ hasComments }: ICharacterSelectionProps) => {
  const arr = new Array(5).fill(0);
  const characterListRef = useRef<HTMLDivElement>(null);
  const [isShowCharacterList, setIsShowCharacter] = useDetectOutsideClick(characterListRef);

  const { selectedCharacterNumber } = useComment();
  const { dispatchCommentInfo } = useCommentActions();

  const onClickCharacterList = () => setIsShowCharacter((prev: boolean) => !prev);

  const onClickCharacter = (number: number) => {
    dispatchCommentInfo({ target: 'selectedCharacterNumber', value: number });
    setIsShowCharacter((prev: boolean) => !prev);
  };

  return (
    <Wrapper>
      <CharacterWrapper>
        <Img
          src={`images/comment/${selectedCharacterNumber}.png`}
          onClick={hasComments ? onClickCharacterList : undefined}
        />
        <IconWrapper onClick={hasComments ? onClickCharacterList : undefined}>
          <Icon icon="Arrow" color="#8E8E93" rotate={270} width={15} height={15} />
        </IconWrapper>
      </CharacterWrapper>
      {isShowCharacterList && (
        <RefWrapper>
          <CharacterListWrapper ref={characterListRef}>
            {arr.map((_, index) => (
              <Img key={index} src={`images/comment/${index + 1}.png`} onClick={() => onClickCharacter(index + 1)} />
            ))}
          </CharacterListWrapper>
        </RefWrapper>
      )}
    </Wrapper>
  );
};

export default CharacterSelection;
