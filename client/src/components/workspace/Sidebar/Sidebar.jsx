import React from 'react';
import S from './style';

import Overview from './Overview';
import My from './My';
import Teams from './TeamList';

const Sidebar = () => {
  const handleClickMy = () => {
    console.log('go to My Workspace');
  };
  return (
    <S.Drawer open variant="permanent">
      <Overview></Overview>
      <S.DrawerList>
        <My />
        <Teams />
      </S.DrawerList>
    </S.Drawer>
  );
};
export default Sidebar;
