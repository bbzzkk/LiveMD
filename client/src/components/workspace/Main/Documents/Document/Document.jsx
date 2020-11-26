import React, {useState} from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 200,
    minWidth: 250,
    margin: theme.spacing(2),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
    fontWeight: "550",
  },
  pos: {
    marginTop: 10,
    marginBottom: 12,
    verticalAlign: 'middle',
    display: 'inline-flex',
  },
  clock: {
    marginTop: 10,
    marginLeft: 5
  },
  red_btn:{
    color: '#db4646'
  },
  black_btn:{
    color: 'grey'
  },
  cardaction:{

  }
}));

const Document = props => {
  const { owner, createdAt, title } = props;
  const classes = useStyles();
  const [click, setClick] = useState(false);


  const handleClick =()=>{
    console.log(click)
    setClick(!click);
  }


  

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <QueryBuilderIcon />
          {createdAt}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
        <BookmarkIcon className={click===true? classes.red_btn : classes.black_btn} onClick={handleClick}/>
        </IconButton>
        <IconButton>
        <DeleteIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
};

Document.propTypes = {
  owner: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Document;
