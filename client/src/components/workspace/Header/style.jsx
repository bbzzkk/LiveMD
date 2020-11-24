import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Notifications from '@material-ui/icons/Notifications';

const S = {
  Container: styled.div`
    display: flex;
    background-color: pink;
  `,
  Header: styled(AppBar)`
    z-index: 7;
    height: 4em;
    && {
      display: flex;
      width: 100%;
      background-color: yellow;
      box-shadow: 10px 3px 3px transparent;
    }
  `,
  Nofication: styled(Notifications)`
    & {
      color: green[500];
    }
  `,
};

export default S;
