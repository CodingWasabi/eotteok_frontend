import styled from 'styled-components';

export const Wrapper = styled.div`
  & > img:not(:first-child) {
    margin-left: -10px;
  }
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
`;
