import React from 'react';

import Others from './Others';
import Account from './Account';
import Toolbar from './Toolbar'

import S from './style';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = props => {
  return (
    <>
      <HideOnScroll {...props}>
        <S.Header>
          <S.Container>
            
            <Toolbar>          
            </Toolbar>
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<ExitToAppIcon/>}
              style={{marginTop:'auto', marginLeft:'-34%'}}
            >
              Sign out
            </Button>
          </S.Container>
        </S.Header>
      </HideOnScroll>
    </>
  );
};

export default Header;
