import React from 'react';
import { Header, Footer } from '@/components/home';
import S from './style';

const Home = props => {
  const { authenticated, onLogout, currentUser } = props;

  return (
    <>
      <S.Main>
        <Header
          authenticated={authenticated}
          onLogout={onLogout}
          currentUser={currentUser}
        />
        <S.MainContent>
          {authenticated ? (
            <>
              <div>{currentUser?.name}</div>
              <img src={currentUser.imageUrl} alt="img" />
            </>
          ) : null}
        </S.MainContent>
        <Footer />
      </S.Main>
    </>
  );
};

export default Home;
