import {
  AppBar,Toolbar,Typography,Button,makeStyles,} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };


  return (
    <AppBar position="fixed" style={{background:"white"}}>
      <Toolbar style={{minHeight: "100px"}}>
        <Typography variant="h6" className={classes.title} style={{fontSize: "32px",fontWeight: "100",color:"black"}}>
        PKRGM
        </Typography>
        <div>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              
              <Button color="inherit" onClick={() => handleClick("/home")}>
              <Typography style={{fontSize:"18px",color:"black"}}>Home</Typography>
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
              <Typography style={{fontSize:"18px",color:"black"}}>Add Jobs</Typography>
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
              <Typography style={{fontSize:"18px",color:"black"}}>Posted</Typography>
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
              <Typography style={{fontSize:"18px",color:"black"}}>Employees</Typography>
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
              <Typography style={{fontSize:"18px",color:"black"}}>Profile</Typography>
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
              <Typography style={{fontSize:"18px",color:"white"}}>Logout</Typography>
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
              <Typography style={{fontSize:"18px",color:"black",fontFamily:"sans-serif"}}>Home</Typography>
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                <Typography style={{fontSize:"18px",color:"black",fontFamily:"sans-serif"}}>Applied</Typography>
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
              <Typography style={{fontSize:"18px",color:"black",fontFamily:"sans-serif"}}>Profile</Typography>
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
              <Typography style={{fontSize:"18px",color:"black",fontFamily:"sans-serif"}}>Logout</Typography>
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              <Typography style={{fontSize:"18px", color:"black"}}>Login</Typography>
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
            <Typography style={{fontSize:"18px", color:"black",backgroundColor:"orange",padding:"1rem",borderRadius:"0.5rem"}}>SignUp</Typography>
            </Button>
          </>
        )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
