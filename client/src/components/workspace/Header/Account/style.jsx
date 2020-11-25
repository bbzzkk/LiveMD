import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Popper from '@material-ui/core/Popper';

const S = {
  Profile: styled(Avatar)`
    position: absolute;
    top: 35%;
    left: 95%; 
  `,
  Popover: styled(Popper)`
    width: 25em;
    height: 25em;
    z-index: -10;
  `,
};

export default S;
