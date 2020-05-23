import React, { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const CreateAdds = lazy(() => import("../templates/create-adds"));
const ShowAdds = lazy(() => import("../templates/show-adds"));

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menus: {
    margin: "auto",
    justify: "flex-end",
    // justify
  },
  maincontent: {
    margin: "10%",
  },
  link: {
    textDecoration: "none",
    cursor: "default",
    color: "white",
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    fontWeight: "bold",
    //   backgroundColor: purple[500],
    //   '&:hover': {
    //     backgroundColor: purple[700],
    //   },
  },
}))(Button);

function Layout(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {["Search", "Location", "Building Type", "Filter"].map(
          (text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </div>
  );

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" noWrap>
              <Link to="/" className={classes.link}>
                React Real Estate
              </Link>
            </Typography>
            <div className={classes.menus}>
              <ColorButton
                color="primary"
                className={classes.margin}
                href="/createadds"
              >
                Create Ads
              </ColorButton>

              <ColorButton color="primary" className={classes.margin} href="/">
                About us
              </ColorButton>

              <ColorButton color="primary" className={classes.margin} href="/">
                Log In
              </ColorButton>

              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                href="/"
              >
                {" "}
                Register{" "}
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className="maincontent" style={{ marginTop: "7%" }}>
          <React.Fragment>
            <Suspense fallback={<div></div>}>
              <Switch>
                <Route exact path="/" component={ShowAdds} />
                <Route path="/createadds" component={CreateAdds} />
              </Switch>
            </Suspense>
          </React.Fragment>
        </main>
      </div>
    </Router>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  ),
  children: PropTypes.node.isRequired,
};

export default withStyles(useStyles)(Layout);
