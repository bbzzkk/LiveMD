import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import List from './List';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function Sidebar() {
  return (
    <Drawer open variant="permanent">
      <List />
    </Drawer>
  );
}
export default Sidebar;
