import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    marginLeft: "10px",
  },
  card: {
    padding: "5%",
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    console.log("create");
  }
  render() {
    const classes = this.props;
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
            margin="normal"
          />
          <TextField
            id="filled-password-input"
            label="Password"
            fullWidth
            type="password"
            className={classes.textField}
            margin="normal"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Login);
