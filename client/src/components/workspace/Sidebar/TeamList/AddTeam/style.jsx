import styled from 'styled-components';

import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const S = {
  AddButton: styled.div``,
  AddIcon: styled.button`
    color: white;
    height: 1.9em;
    background: transparent;
    border: transparent;
    border: 2px solid white;
    border-radius: 5px;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    &:hover {
      background: white;
      color: #131236;
      border: 2px solid white;
      -webkit-transition: all 0.35s ease;
      transition: all 0.35s ease;
    }
  `,
  Dialog: styled(Dialog)`
    min-width: 15em;
  `,
  Header: styled.div`
    display: flex;
    margin-right: auto;
    margin-left: auto;
  `,
  Title: styled(DialogTitle)``,
  Actions: styled(DialogActions)``,
  CloseButton: styled(Button)`
    &&& {
      color: #131236;
    }
  `,
  Contents: styled(DialogContent)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  Input: styled(TextField)`
    && {
      min-width: 10em;
      margin: 1em;
    }
  `,
  CreateButton: styled(Button)`
    && {
      margin-left: auto;
      margin-right: auto;
      margin-top: 1em;
      margin-bottom: 1em;
    }
    &&& {
      color: white;
      background-color: #131236;
    }
    width: 80%;
  `,
};

export default S;
