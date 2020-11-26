/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorder from '@material-ui/icons/StarBorder';

const Teams = () => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Teams" />
      </ListItem>
      <List component="div" disablePadding>
        <ListItem button>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="bbzzkk" />
        </ListItem>
      </List>
    </List>
  );
};

export default Teams;
