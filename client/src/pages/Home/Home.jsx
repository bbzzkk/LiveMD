import React from 'react';
import { Header, Footer, Body } from '@/components/home';
import S from './style';
import { GlobalStyle } from '@/styles';

const Home = props => {
  const { authenticated, onLogout, currentUser } = props;

  return (
    <>
      <GlobalStyle />
      {/* <S.Main> */}
      <Header
        authenticated={authenticated}
        onLogout={onLogout}
        currentUser={currentUser}
      />
      <Body />
      {/* <S.MainContent>;
          {authenticated ? (
            <>
              <div>{currentUser?.name}</div>
              <img src={currentUser.imageUrl} alt="img" />
            </>
          ) : 'null'}
        </S.MainContent> */}
      <Footer />
      {/* </S.Main> */}
    </>
  );
};

export default Home;
