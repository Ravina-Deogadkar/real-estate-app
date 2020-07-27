import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { verifyUserAction } from "../store/action/user-login";
import { CenterFocusStrong } from "material-ui-icons";

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
    console.log("create");
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
  };
  render() {
    const { classes, loginDetails } = this.props;
    return (
      <div className={classes.root}>
        <div>
          <Typography variant="h6" noWrap>
            Sign In
          </Typography>
        </div>
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
      </div>
    );
  }
}
Login.propTypes = {
  verifyUser_action: PropTypes.func,
};
const mapStateToProps = (state) => {
  return {
    loginDetails: state.loginDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyUser_action: (data) => dispatch(verifyUserAction(data)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(Login));
