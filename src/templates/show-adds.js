import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { getAdsAction } from "../store/action/ads-action";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Adcards from "../component/Adcards";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    marginLeft: "10%",
  },
  card: {
    padding: "5%",
  },
});
class ShowAdds extends Component {
  constructor(props) {
    super(props);
    console.log("show details");
    // var AdsData;
    // this.state={
    //     adsDetails:{

    //     }
    // }
    // console.log(this.state);
  }

  componentDidMount() {
    this.props.getAdsAction_action();
    console.log(this.props);
  }

  render() {
    const { classes, adsDetails } = this.props;
    // this.AdsData = this.props;
    console.log(adsDetails);

    return (
      <React.Fragment>
        <h2>Short Stay</h2>
        <div className={classes.root}>
          <Grid container style={{ margin: "auto" }} spacing={2}>
            {adsDetails.map((value, index) => (
              <Grid item xs={10} sm={6} lg={5} key={index}>
                <Adcards adsData={value} />
              </Grid>
            ))}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

ShowAdds.propTypes = {
  adsDetails: PropTypes.array,
  getAdsAction_action: PropTypes.func,
};
const mapStateToProps = (state) => {
  return {
    adsDetails: state.adsDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAdsAction_action: () => dispatch(getAdsAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(ShowAdds));
