import styled from 'styled-components';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const S = {
  Drawer: styled(Drawer)`
    & > div {
      min-width: 10em;
      // margin-top: 5em;
      border-color: 5em black;
      color: black;
      // border-top-right-radius: 2em 2em;
      width: 15%;
    }
  `,
  DrawerList: styled(List)`
    && {
      padding-top: 1em;
      margin-left: 0.5em;
    }
  `,
  My: styled(ListItem)``,
  MyText: styled(ListItemText)``,
};

export default S;
