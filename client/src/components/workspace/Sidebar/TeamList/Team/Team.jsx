import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
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

const Team = props => {
  const classes = useStyles();

  const { marked, teamname } = props.team;
  const { teamStore, boardStore } = props.store;
  const [isMarked, setMarked] = useState(marked);
  const handleMarked = () => {
    if (isMarked) {
      setMarked(false);
    } else {
      setMarked(true);
    }
  };

  const handleTeamClick = (e, index) => {
    props.history.push(`/${teamname}`);
  };

  return (
    <ListItem
      onClick={e => handleTeamClick(e, props.index)}
      button
      style={{ textAlign: 'center' }}
      selected={props.selectedIndex === props.index}
      className={classes.root}
    >
      {/* <S.ListItemContainer onClick={handleMarked}>
        <S.StarIcon style={{ color: isMarked ? 'yellow' : 'green' }} />
      </S.ListItemContainer> */}
      <S.ListItemText style={{ color: 'white' }}>{teamname}</S.ListItemText>
    </ListItem>
  );
};

export default withRouter(inject('store')(observer(Team)));
