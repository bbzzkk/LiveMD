import styled from 'styled-components';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const S = {
  My: styled(ListItem)`
    background-color: #05042b;
    border-left-style: dotted;
    border-left: 1mm ridge white;
  `,
  MyText: styled(ListItemText)``,
};

export default S;
