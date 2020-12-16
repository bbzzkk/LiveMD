import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorder from '@material-ui/icons/StarBorder';

const S = {
  ListItem: styled(ListItem)``,
  ListItemText: styled(ListItemText)``,
  ListItemContainer: styled(IconButton)``,
  StarIcon: styled(StarBorder)`
    color: white;
  `,
};

export default S;
