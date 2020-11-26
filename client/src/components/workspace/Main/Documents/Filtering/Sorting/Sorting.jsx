import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: theme.spacing(0),
    minWidth: 200,
    marginTop: theme.spacing(0.7),
    // minHeight: 10
  },
  iconControl: {
    marginLeft: theme.spacing(90),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(0.7),
    fontSize: 25,
  },
}));


const Sorting = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  return (
    <div>
      <FilterListIcon className={classes.iconControl}/>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-controlled-open-select-label">정렬</InputLabel> */}
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={0}>가장 최근 수정된 문서</MenuItem>
          <MenuItem value={10}>가장 오래전 수정된 문서</MenuItem>
          <MenuItem value={20}>A-Z</MenuItem>
          <MenuItem value={30}>Z-A</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
  
}
export default Sorting;