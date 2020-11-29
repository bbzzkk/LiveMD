import React from 'react';
import S from './style';

import Overview from './Overview';
import My from './My';
import TeamList from './TeamList';
import CreateButton from './CreateButton';

const Sidebar = () => {
  const handleClickMy = () => {
    console.log('go to My Workspace');
  };
  return (
    <S.Drawer open variant="permanent">
      <Overview></Overview>
      <CreateButton/>
      <S.DrawerList>
        <My />
        <TeamList />
      </S.DrawerList>
    </S.Drawer>
  );
};
export default Sidebar;
