import React from 'react';
import { Header, Footer } from '@/components/main';
import S from './style';

const Main = () => {
  return (
    <>
      <S.Main>
        <Header />
        <S.MainContent />
        <Footer />
      </S.Main>
    </>
  );
};

export default Main;
