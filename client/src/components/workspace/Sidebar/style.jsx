import styled from 'styled-components';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
    letterSpacing: '0.6em',
    '&:hover': {
      color: '#1e6896',
      border: '1px solid #1e6896',
      backgroundColor: theme.palette.getContrastText('#1e6896'),
    },
  },
}))(Button);

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
      // margin-left: 0.5em;
      margin: 0.5em;
    }
  `,
  My: styled(ListItem)``,
  MyText: styled(ListItemText)``,
  ButtonGroup: styled.div`
    display: flex;
  `,

  TeamButton: styled(ColorButton)`
    margin-top: 1em;
    min-width: 10vw;
    background-color: #e8e8e8;
    height: 3em;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    outline: none;
    width: 100%;
  `,
};

export default S;
