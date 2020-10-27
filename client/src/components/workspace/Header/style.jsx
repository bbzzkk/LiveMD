import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Notifications from '@material-ui/icons/Notifications';

const S = {
  Header: styled(AppBar)`
    z-index: 7;
    height: 3em;

    && {
      background-color: rgba(0, 0, 255, 0);
      box-shadow: none;
    }
  `,
  Nofication: styled(Notifications)`
    & {
      color: green[500];
    }
  `,
};

export default S;
