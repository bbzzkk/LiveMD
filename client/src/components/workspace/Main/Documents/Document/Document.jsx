import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

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

import DeleteModal from '@/components/workspace/Main/Documents/Document/DeleteModal';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 250,
    minWidth: 100,
    // width: '150%',
    width: '15rem',
    height: '4%',
    margin: '1%',
    transition: "transform 0.15s ease-in-out"
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
    fontWeight: "550",
    textAlign: 'left',
    textTransform:'none',
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
  icon_button:{
    padding: 0,

  },
  card_action:{
    justifyContent: 'flex-end',
  }
}));

const Document = props => {
  const { owner, createdAt, title, store, docId } = props;
  const { user } = store.authStore;
  const classes = useStyles();
  const [click, setClick] = useState(false);

  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })


  const handleClick =()=>{
    // console.log(click)
    setClick(!click);
  }

  const handleCardClick = () => {
    props.history.push({
      pathname: `/page/${docId}`,
      state: {
        user: user,
        title: title,
      },
    })
  }

  return (
    <Card
      className={classes.root}
      onClick={handleCardClick}
      classes={{root: state.raised ? classes.cardHovered : ""}}
      onMouseOver={()=>setState({raised: true, shadow:1})}
      onMouseOut={()=>setState({raised:false, shadow:0})}
      raised={state.raised} zDepth={state.shadow}
    >
    <Button style={{width:'100%'}}>
      {/* <CardContent style={{marginLeft:'-30%'}}> */}
      <div className="spanTitleAndTiem">
          <Typography className={classes.title} variant="h5" component="h2" >
            {title}
          </Typography>
          <br/>
        <Typography className={classes.pos} color="textSecondary">
          <QueryBuilderIcon />
          {createdAt}
        </Typography>
      </div>
      {/* </CardContent> */}
      </Button>
      <CardActions className={classes.card_action} focusV>
        <IconButton className={classes.icon_button}>
        <BookmarkIcon className={click===true? classes.red_btn : classes.black_btn} onClick={handleClick}/>
        </IconButton>

        <DeleteModal/>
      </CardActions>
    </Card>
  );
};

Document.propTypes = {
  owner: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default withRouter(inject('store')(observer(Document)));
