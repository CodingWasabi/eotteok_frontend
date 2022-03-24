import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;

  max-width: 330px;
  width: 100%;
`;

export const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :not(:last-child) {
    margin-bottom: 25px;
  }

  & > :first-child {
    margin: 45px 0px;
  }
`;
