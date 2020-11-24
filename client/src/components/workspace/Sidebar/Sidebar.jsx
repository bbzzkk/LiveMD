import React from 'react';
import S from './style';

import Teams from './Teams';
import Overview from './Overview/Overview';

const Sidebar = () => {
  const handleClickMy = () => {
    console.log('go to My Workspace');
  };
  return (
    <S.Drawer open variant="permanent">
      <Overview></Overview>
      <S.DrawerList>
        <S.My button onClick={handleClickMy}>
          <S.MyText primary="My Workspace" />
        </S.My>
        <Teams />
      </S.DrawerList>
    </S.Drawer>
  );
};
export default Sidebar;
