import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  verifyUserAction,
  signoutUserAction,
} from "../store/action/user-login";

const useStyles = (theme) => ({
  root: {
    marginLeft: "10%",
    float: "center",
  },
  card: {
    padding: "5%",
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (name) => (event) => {
    var value = event.target.value;
    var curState = this.state;
    if (name == "username") {
      curState.username = value;
      this.setState(curState);
    }

    if (name == "password") {
      curState.password = value;
      this.setState(curState);
    }
  };

  verifyUser = () => {
    var data = { loginDetails: this.state };
	  this.props.verifyUser_action(data);
	  window.location.replace("/");
  };
  removeUser = () => {
    var data = {
      loginDetails: {
        username: "",
        password: "",
      },
    };
    this.props.signout_action(data);
  };
  render() {
    const { classes, loginDetails } = this.props;
    let loggedinView = null;
    if (
      (loginDetails !== null ||
      loginDetails !== undefined) &&
      loginDetails?.Loginstatus === true
    ) {
      loggedinView = (
        <div>
          <p> User is already logged in, Do you want to SignOut instead? </p>
          <div>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={this.removeUser}
            >
              Sign Out
            </Button>
          </div>
        </div>
      );
    } else {
      loggedinView = (
        <main>
          <div>
            <TextField
              id="filled-name"
              label="Username"
              fullWidth
              className={classes.textField}
              onChange={this.handleChange("username")}
              margin="normal"
            />
            <TextField
              id="filled-password-input"
              label="Password"
              fullWidth
              type="password"
              className={classes.textField}
              onChange={this.handleChange("password")}
              margin="normal"
            />
          </div>
          <div>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={this.verifyUser}
            >
              Sign In
            </Button>
          </div>
        </main>
      );
    }
    return (
      <div className={classes.root}>
        <div>
          <Typography variant="h6" noWrap>
            Sign In
          </Typography>
        </div>
        {loggedinView}
      </div>
    );
  }
}
Login.propTypes = {
  verifyUser_action: PropTypes.func,
  signout_action: PropTypes.func,
};
const mapStateToProps = (state) => {
  return {
    loginDetails: state.loginDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyUser_action: (data) => dispatch(verifyUserAction(data)),
    signout_action: (data) => dispatch(signoutUserAction(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(Login));
