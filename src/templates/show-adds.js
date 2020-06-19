import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { getAdsAction } from "../store/action/ads-action";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Adcards from "../component/Adcards";
import config from "../config";
import Axios from "axios";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    marginLeft: "5%",
    marginRight: "5%",
  },
  card: {
    padding: "5%",
  },
  cover: {
    // boxShadow: "0px 4px 3px rgba(174, 181, 178, 0.4)",
    //  borderRadius: 10,
    margin: "auto",
    paddingBottom: "50px",
  },

  header: {
    color: "rgba(63, 81, 181, 1)",
    boxShadow: "0px 4px 3px rgba(202, 203, 210, 1)",
    padding: "10px",
  },
});
class ShowAdds extends Component {
  constructor(props) {
    super(props);
  }

  fetchAdsCard = async () => {
    const url = config.HostURL + "/ads";

    let data = await Axios.get(url);
    const adsDetails = [];
    console.log(data.data.adsDetails);
    if (data.data.adsDetails != undefined) {
      data.data.adsDetails.map((value, index) => {
        if (index < 6) {
          adsDetails[index] = value;
          adsDetails[index].image = config.HostURL + value.image;
        }
      });
    }
    const obj = { adsDetails: adsDetails };
    this.props.getAdsAction_action(obj);
  };

  render() {
    const { classes, adsDetails } = this.props;
    // this.AdsData = this.props;
    if (adsDetails == undefined || adsDetails[0].title.length == 0)
      this.fetchAdsCard();
    console.log("Ads details:");
    console.log(adsDetails);

    return (
      <React.Fragment>
        <div className={classes.cover}>
          <h2 className={classes.header}>Short Stay</h2>
          <div className={classes.root}>
            <Grid container style={{ margin: "auto" }} spacing={2}>
              {adsDetails.map((value, index) => (
                <Grid item xs={3} sm={3} lg={4} key={index}>
                  <Adcards adsData={value} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        <div className={classes.cover}>
          <h2 className={classes.header}>Recommended</h2>
          <div className={classes.root}>
            <Grid container style={{ margin: "auto" }} spacing={2}>
              {adsDetails.map((value, index) => (
                <Grid item xs={3} sm={3} lg={4} key={index}>
                  <Adcards adsData={value} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ShowAdds.propTypes = {
  adsDetails: PropTypes.array,
  getAdsAction_action: PropTypes.func,
};

ShowAdds.defaultProps = {
  adsDetails: [
    {
      title: "Organized Bungalow",
      price: "55,00,000",
      floorspace: "5500sqft",
      housetype: "Bungalow",
      location: "Mumbai",
      image: "/images/Ads.jpg",
      category: "shortStay",
    },
  ],
};

const mapStateToProps = (state) => {
  return {
    adsDetails: state.adsDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAdsAction_action: (data) => dispatch(getAdsAction(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(ShowAdds));
