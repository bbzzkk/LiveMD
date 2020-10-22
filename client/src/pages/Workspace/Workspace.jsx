import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '@/components/workspace/Sidebar';
import Document from '@/components/workspace/Document'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {documents} from '@/utils/Mock'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  root: {
    display: 'flex',
  },
}));

const Workspace = props =>{
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerMove = () => {
      open? setOpen(false): setOpen(true) 
  }
  return (
  <>
    <CssBaseline />
    <div className={classes.root}>
    <Sidebar
      open={open}
      handleDrawerMove={handleDrawerMove}
    />
    <main className={classes.content}>
      {documents.data.map((info)=>{ 
        return (
        <Document info={info}/>
        )
      })}
    </main>
    </div>
  </>
  )
}

export default Workspace;
