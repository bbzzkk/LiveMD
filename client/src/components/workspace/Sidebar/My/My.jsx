import React from 'react';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import S from './style';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#131236',
  },
}));

const ListItem = withStyles({
  root: {
    '&$selected': {
      backgroundColor: '#020120',
      borderLeftStyle: 'solide',
      borderLeft: '0.25rem ridge white',
    },
    '&$selected:hover': {
      backgroundColor: '#020120',
      color: 'white',
    },
    '&:hover': {
      backgroundColor: '#020120',
      color: 'white',
    },
  },
  selected: {},
})(MuiListItem);

const My = props => {
  const handleClickMy = (e, index) => {
    props.setSelectedIndex(index);
    props.store.teamStore.initCurrentTeam();
    props.history.push('/');
  };
  const classes = useStyles();
  return (
    <S.MyButtonContainer className="myButton">
      <ListItem
        button
        onClick={e => handleClickMy(e, 0)}
        selected={props.selectedIndex === 0}
        className={classes.root}
      >
        <S.MyText primary="My Workspace" />
      </ListItem>
    </S.MyButtonContainer>
  );
};
export default withRouter(inject('store')(observer(My)));
