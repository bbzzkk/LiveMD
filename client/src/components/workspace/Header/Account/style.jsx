import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';

const S = {
  Profile: styled(Avatar)`
    position: absolute;
    top: 15%;
    left: 95%;
  `,
  Popover: styled(Popover)`
    width: 25em;
    height: 25em;
  `,
};

export default S;
