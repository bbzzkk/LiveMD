import React from 'react';

import S from './style';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    borderRadius: '1px',
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.background.paper,
  },
}));

const Account = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;
  return (
    <>
      <S.Profile aria-describedby={id} onClick={handleClick}>
        H
      </S.Profile>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.paper}>s
              <button>Sign Out</button>
            </div>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default Account;
