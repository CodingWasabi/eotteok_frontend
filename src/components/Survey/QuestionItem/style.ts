import styled from 'styled-components';

interface IWrapperProps {
  isClicked: boolean;
  backgroundColor: string;
}

export const Wrapper = styled.div<IWrapperProps>`
  cursor: pointer;

  display: flex;
  align-items: center;

  width: 100%;
  min-width: 330px;
  max-width: 360px;
  height: 60px;

  background-color: transparent;
  border: ${({ isClicked, backgroundColor }) => isClicked && `2px solid ${backgroundColor}`};
  box-shadow: ${({ isClicked }) => isClicked && '0px 0px 4px rgba(0, 0, 0, 0.25)'};
  border-radius: 100px;

  padding-left: 19px;

  font-size: 21px;

  & > :not(:first-child) {
    margin-left: 13px;
  }
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
`;
