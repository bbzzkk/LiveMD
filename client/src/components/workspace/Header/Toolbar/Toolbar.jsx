import React from "react";
import { makeStyles, responsiveFontSizes, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
    backgroundColor: "white",
    color: "black",
    width:"80%"
    // boxShadow: "10px 1px 1px lightgrey",
  
  },
  indicator: {
    backgroundColor: "purple"
  }
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 50,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: "15px",
    marginRight: theme.spacing(30),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "yellow",
      opacity: 10
    },
    "&$selected": {
      color: "red",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "green"
    }
  },
  selected: {}
}))((props) => <Tab disableRipple {...props} />);

// const StyledTabs = withStyles({
//   indicator: {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "transparent",
//     "& > span": {
//       maxWidth: 40,
//       width: "100%",
//       backgroundColor: "purple"
//     }
//   }
// })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

// const StyledTab = withStyles((theme) => ({
//   root: {
//     textTransform: "none",
//     color: "#fff",
//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     "&:focus": {
//       opacity: 1
//     }
//   }
// }))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(3)
  },
  demo1: {
    backgroundColor: theme.palette.background.paper
  },
  // demo2: {
  //   backgroundColor: "green"
  // }
}));

const Toolbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
        <AntTabs value={value} onChange={handleChange} aria-label="ant example" centered>
          <AntTab label={<div><DescriptionOutlinedIcon style={{verticalAlign: 'middle', marginRight:'10px'}} />Documents</div>} />
          <AntTab label={<div><PeopleAltOutlinedIcon style={{verticalAlign: 'middle', marginRight:'10px'}} />People</div>} />
          <AntTab label={<div><SettingsIcon style={{verticalAlign: 'middle', marginRight:'10px'}} />Settings</div>} />
        </AntTabs>
       
  
  );
}

export default Toolbar;