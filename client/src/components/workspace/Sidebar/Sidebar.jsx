import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import S from './style';

import Overview from './Overview';
import My from './My';
import TeamList from './TeamList';
import CreateButton from './CreateButton';

const Sidebar = props => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { currentTeamIndex } = props.store.teamStore;
  // console.log(selectedIndex);
  useEffect(() => {
    if (props.match.params.team) {
      setSelectedIndex(currentTeamIndex + 1);
    }
  });
  return (
    <S.Drawer open variant="permanent">
      <Overview></Overview>
      <CreateButton />
      <S.DrawerList>
        <My selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <TeamList
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </S.DrawerList>
    </S.Drawer>
  );
};
export default withRouter(inject('store')(observer(Sidebar)));
