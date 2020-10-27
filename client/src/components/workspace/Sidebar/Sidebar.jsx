import React from 'react';
import S from './style';
import Teams from './Teams';

const Sidebar = () => {
  const handleClickMy = () => {
    console.log('go to My Workspace');
  };
  return (
    <S.Drawer open variant="permanent">
      <S.DrawerList>
        <S.My button onClick={handleClickMy}>
          <S.MyText primary="My" />
        </S.My>
        <Teams />
      </S.DrawerList>
    </S.Drawer>
  );
};
export default Sidebar;
