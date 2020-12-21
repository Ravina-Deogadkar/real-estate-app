import React, { Component, Fragment } from "react";
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: "500px",
    margin: "auto",
  },
  header: {
    color: "rgba(63, 81, 181, 1)",
    boxShadow: "0px 4px 3px rgba(202, 203, 210, 1)",
    padding: "10px",
    fontSize: "large",
    width: "100%",
  },
  headerCover: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm") && theme.breakpoints.up("xs")]: {
      marginTop: "80px",
    },

    [theme.breakpoints.down("md") && theme.breakpoints.up("sm")]: {
      marginTop: "10%",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "2%",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "0",
    },
  },
});

class CreateAdds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adsDetails: {},
    };
  }
  handleChange = (name) => (event) => {
    let data = this.state.adsDetails;
    data[name] = event.target.value;
    this.setState({ adsDetails: data });
  };
  updateState = () => {
    this.props.createAdsAction_action(this.state);
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.toolbar} />
        <div className={classes.headerCover}>
          <div className={classes.header}>Create Ads</div>
        </div>
        <div
          style={{
            width: "50%",
            flexGrow: 1,
            padding: "3%",
          }}
          className={classes.content}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="outlined-name"
                label="Title"
                InputLabelProps={{
                  shrink: true,
                }}
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
                  InputLabelProps={{
                    shrink: true,
                  }}
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
      </Fragment>
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
