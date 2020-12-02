import React from 'react';
import S from './style';

import Overview from './Overview';
import My from './My';
import TeamList from './TeamList';
import CreateButton from './CreateButton';

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClickMy = () => {
    console.log('go to My Workspace');
  };

  return (
    <S.Drawer open variant="permanent">
      <Overview></Overview>
      <CreateButton />
      <S.DrawerList>
        <My selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <TeamList selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </S.DrawerList>
    </S.Drawer>
  );
};
export default Sidebar;
