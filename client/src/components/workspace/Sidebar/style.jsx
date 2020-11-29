import styled from 'styled-components';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#1e6896',
    letterSpacing: '0.4em',

    '&:hover': {
      letterSpacing: '0.3em',

      color: '#1e6896',
      border: '1px solid #1e6896',
      backgroundColor: theme.palette.getContrastText('#1e6896'),
    },
  },
}))(Button);

const S = {
  Drawer: styled(Drawer)`
    & > div {
      min-width: 11em;
      border-color: 1px gray;
      background-color: #131236;
      box-shadow: 1px 5px 5px grey;
      color: white;
      border-top-right-radius: 2em 2em;
      width: 15vw;
    }
  `,
  DrawerList: styled(List)`
    && {
      // padding-top: 1em;
      // margin-left: 0.5em;
      // margin: 0.5em;
    }
  `,
};

export default S;
