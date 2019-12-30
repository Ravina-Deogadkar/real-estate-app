import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import { Link } from 'react-router';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    button: {
        margin: theme.spacing(1),
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
   
    menus: {
        margin: "auto",
        justify: "flex-end",
        // justify
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const ColorButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(blue[500]),
        fontWeight: "bold",
        //   backgroundColor: purple[500],
        //   '&:hover': {
        //     backgroundColor: purple[700],
        //   },
    },
}))(Button);

const Header = (props) => {
    const classes = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
              {MenuIcon}
              </IconButton> */}
                    <Typography variant="h6" noWrap style={{ width: "15%" }}>
                        Real Estate App
                        </Typography>
                   
                        <div className={classes.menus}>
                 
                            <ColorButton color="primary" className={classes.margin}>Create Ads</ColorButton>
                      
                            <ColorButton color="primary" className={classes.margin}>About us</ColorButton>
                     
                            <ColorButton color="primary" className={classes.margin}>Log In</ColorButton>
                      
                            <Button variant="contained" color="secondary" className={classes.button}> Register </Button>
                      
                        </div>
                </Toolbar>
            </AppBar>

        
    );
}

export default Header;