import styled from 'styled-components';

import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import StarBorder from '@material-ui/icons/StarBorder';

const S = {
  List: styled(List)``,
  ListItem: styled(ListItem)``,
  ListItemText: styled(ListItemText)``,
  ListItemContainer: styled(ListItemIcon)``,
  AddIcon: styled(AddIcon)`
    margin-right: 0.3vw;
      &:hover {
      letterSpacing: '0.3em',
      color: '#1e6896',
      border: '1px solid #1e6896',
      backgroundColor: grey,
    },
  `,
  StarIcon: styled(StarBorder)`
    color: white;
  `,
};

export default S;
