import React from 'react';
import { useLocation } from 'react-router-dom';

import Icon from '@/components/Icon';

import { Wrapper, Background, Header } from './style';

export interface IAppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IAppLayoutProps) => {
  const location = useLocation();
  const { pathname } = location;
  const isOnBoardingPage = pathname === '/' || pathname === '/nickname';

  return (
    <Wrapper>
      <Background src={`/images/background/${isOnBoardingPage ? 1 : 2}.png`} />
      {!isOnBoardingPage && (
        <Header>
          <Icon icon="Logo" width={122} height={42} />
        </Header>
      )}
      {children}
    </Wrapper>
  );
};

export default AppLayout;
