import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { connect } from "react-redux";
import { createAdsAction } from "../store/action/ads-action";
import PropTypes from "prop-types";

const useStyles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "500px",
    margin: "auto",
  },
});

class CreateAdds extends Component {
  constructor(props) {
    super(props);
    console.log("create");

    // this.classes = useStyles();

    this.state = {
      adsDetails: {},
    };
  }
  handleChange = (name) => (event) => {
    var value = event.target.value;
    // console.log(name);
    // console.log(value);
    let data = this.state.adsDetails;
    data[name] = value;
    this.setState({ adsDetails: data });
    // console.log(this.state);
  };
  updateState = () => {
    console.log("updated state");
    console.log(this.props);
    // const createAdsAction_action = this.props.createAdsAction;
    this.props.createAdsAction_action(this.state);
  };
  render() {
    const classes = this.props;
    return (
      // <div className={classes.root}>
      // <Layout>
      <div
        style={{
          width: "60%",
          flexGrow: 1,
          padding: "3%",
        }}
        className={classes.content}
      >
        <div className={classes.toolbar} />
        <h1>Create Ads</h1>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="outlined-name"
              label="Title"
              fullWidth
              className={classes.textField}
              value={this.state.adsDetails.title}
              onChange={this.handleChange("title")}
              margin="normal"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              id="standard-multiline-flexible"
              label="Price"
              fullWidth
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={this.state.adsDetails.price}
              onChange={this.handleChange("price")}
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-multiline-flexible"
              label="Floor Space"
              fullWidth
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={this.state.adsDetails.floorspace}
              onChange={this.handleChange("floorspace")}
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl
              component="fieldset"
              style={{ float: "left" }}
              className={classes.formControl}
            >
              <FormLabel component="legend" style={{ textAlign: "left" }}>
                House type
              </FormLabel>
              <RadioGroup
                row
                aria-label="housetype"
                name="housetype"
                value={this.state.adsDetails.housetype}
                onChange={this.handleChange("housetype")}
              >
                <FormControlLabel
                  value="Apartment"
                  control={<Radio color="primary" />}
                  label="Apartment"
                />
                <FormControlLabel
                  value="Bungalow"
                  control={<Radio color="primary" />}
                  label="Bungalow"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-multiline-flexible"
              label="Location"
              fullWidth
              value={this.state.adsDetails.location}
              onChange={this.handleChange("location")}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
          </Grid>

          {/* <Grid item xs={12}>
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        fullWidth
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange('email')}
                    />
                    </Grid> */}
          {/* <Grid item xs={12}>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange('password')}
                    />
                    </Grid> */}

          <Grid item xs={12}>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={this.updateState}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </div>
      // </Layout>
    );
  }
}

CreateAdds.propTypes = {
  adsDetails: PropTypes.object,
  createAdsAction_action: PropTypes.func,
};
const mapStateToProps = (state) => {
  return {
    adsDetails: state.adsDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAdsAction_action: (data) => dispatch(createAdsAction(data)),
  };
};

// const mapDispatchToProps =
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(CreateAdds));
