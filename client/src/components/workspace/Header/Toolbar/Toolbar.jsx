import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { inject, observer } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';

import {
  makeStyles,
  responsiveFontSizes,
  withStyles,
} from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const AntTabs = withStyles({
  root: {
    // marginLeft: "5%",
    padding: '0.1em',
    // borderBottom: "1px solid #e8e8e8",
    backgroundColor: 'none',
    color: 'black',
    width: '100%',
    // boxShadow: "10px 1px 1px lightgrey",
    fontSize: '5em',
    marginRight: '10%',
  },
  indicator: {
    backgroundColor: '#1e6896',
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 50,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: '15px',
    // marginTop: "0%",
    marginRight: '10%',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#1e6896',
      opacity: 10,
    },
    '&$selected': {
      color: '#1e6896',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#1e6896',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Toolbar = props => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { currentTeamIndex } = props.store.teamStore;
  const [params, setParams] = useState('');
  if (
    Object.keys(props.match.params).length > 1 &&
    params !== props.match.params.team
  ) {
    setValue(0);
    setParams(props.match.params.team);
  } else if (Object.keys(props.match.params).length < 1 && params !== '') {
    setParams('');
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = name => {
    if (props.match.params.team) {
      if (name !== 'documents') {
        if (props.match.url.match(/\//g).length > 1) {
          props.history.push('/' + props.match.params.team + '/' + name);
        } else {
          props.history.push(props.match.params.team + '/' + name);
        }
      } else {
        props.history.push('/' + props.match.params.team);
      }
    } else {
      if (name !== 'documents') {
        props.history.push('/' + name);
      } else {
        props.history.push('/');
      }
    }
  };

  return (
    <>
      <AntTabs value={value} onChange={handleChange} centered>
        <AntTab
          label={
            <div>
              <DescriptionOutlinedIcon
                style={{ verticalAlign: 'middle', marginRight: '10px' }}
              />
              Documents
            </div>
          }
          onClick={() => handleClick('documents')}
          // component={Link}
          // to="/"
        />
        {currentTeamIndex + 1 > 0 && (
          <AntTab
            label={
              <div>
                <PeopleAltOutlinedIcon
                  style={{ verticalAlign: 'middle', marginRight: '10px' }}
                />
                People
              </div>
            }
            onClick={() => handleClick('people')}
            // component={Link}
            // to="/people"
          />
        )}
        <AntTab
          label={
            <div>
              <SettingsIcon
                style={{ verticalAlign: 'middle', marginRight: '10px' }}
              />
              Settings
            </div>
          }
          onClick={() => handleClick('settings')}
          // component={Link}
          // to="/settings"
        />
      </AntTabs>
    </>
  );
};

export default withRouter(inject('store')(observer(Toolbar)));
