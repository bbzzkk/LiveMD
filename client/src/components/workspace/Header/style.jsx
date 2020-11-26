import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Notifications from '@material-ui/icons/Notifications';

const S = {
  Container: styled.div`
    display: flex;
  `,
  Header: styled(AppBar)`
    z-index: 7;
    height: 4em;
    && {
      display: flex;
      width: 100%;
      background-color: white;
      box-shadow: 10px 3px 3px transparent;
      // border-bottom: "1px solid #e8e8e8";
    }
  `,
  Nofication: styled(Notifications)`
    & {
      color: green[500];
    }
  `,
};

export default S;
