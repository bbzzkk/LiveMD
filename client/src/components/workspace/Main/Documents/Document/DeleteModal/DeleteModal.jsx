import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


const DeleteModal = (props) => {
  const {title} = props; 

  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }


  return (
    <>
    <IconButton style={{padding:'0'}} onClick={handleClickOpen}>
    <DeleteIcon/>
    </IconButton>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"정말로 삭제하시겠습니까?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            해당 문서가 영구히 삭제됩니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{border:'#1e6896', color: '#1e6896'}}>
            취소
          </Button>
          <Button onClick={handleClose} style={{backgroundColor:'#db4646', color: 'white'}}>
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default DeleteModal;