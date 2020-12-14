import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Notifications from '@material-ui/icons/Notifications';

const S = {
  Container: styled.div`
    display: flex;
  `,
  Header: styled(AppBar)`
    z-index: 7;
    height: 8%;      

    && {
      display: flex;
      width: 100%;
      background-color: white;
      box-shadow: 10px 3px 3px transparent;
      border-bottom: 1px solid #e8e8e8;
      left: 10rem;
      justify-content:flex-end;
    }
  `,
  Nofication: styled(Notifications)`
    & {
      color: green[500];
    }
  `,
};

export default S;
