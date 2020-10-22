import React from 'react';

import Sidebar from '@/components/workspace/Sidebar';
import Document from '@/components/workspace/Document';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { documents } from '@/utils/Mock';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  root: {
    display: 'flex',
  },
}));

const Workspace = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerMove = () => {
    return (open && setOpen(false)) || (!open && setOpen(true));
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Sidebar open={open} handleDrawerMove={handleDrawerMove} />
        <main className={classes.content}>
          {documents.data.map(({ owner, createdAt, title }) => {
            return (
              <Document owner={owner} createdAt={createdAt} title={title} />
            );
          })}
        </main>
      </div>
    </>
  );
};

export default Workspace;
