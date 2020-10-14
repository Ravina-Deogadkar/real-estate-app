import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { getAdsAction } from "../store/action/ads-action";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Adcards from "../component/Adcards";
import config from "../config";
import Axios from "axios";
import TextField from "@material-ui/core/TextField";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    
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
	  fontSize: "large",
	width: "100%"
    //flexGrow: 0,
    // flexBasis: "80%",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  location: {
    // display: "inline",
    width: "20%",
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
    console.log(obj);
    this.props.getAdsAction_action(obj);
  };

  searchAdsCard = (name) => async (event) => {
    var search = event.target.value;

    console.log(search);

    let data = this.props.adsDetails;
    const adsDetails = [];
    console.log(data);
    if (data != undefined) {
      data.filter((value, index) => {
        if (value.location.indexOf(search) != -1) {
          adsDetails[index] = value;
          adsDetails[index].image = config.HostURL + value.image;
        }
      });
    }
    const obj = { adsDetails: adsDetails };
    console.log(obj);
    this.props.getAdsAction_action(obj);
  };
  componentDidMount() {
    const { adsDetails } = this.props;
    if (adsDetails == undefined || adsDetails[0].title.length == 0)
      this.fetchAdsCard();
    console.log("Ads details:");
    console.log(adsDetails);
    this.setState({ fetchComplete: true });
  }
  render() {
    const { classes, adsDetails } = this.props;
    // this.AdsData = this.props;

    return (
      <React.Fragment>
        <div className={classes.cover}>
          <div className={classes.headerCover}>
            <div className={classes.header}>Short Stay</div>
            {/* <div className={classes.location}>
              <TextField
                id="outlined-name"
                label="Location"
                className={classes.textField}
                // value={this.state.adsDetails.title}
                onChange={this.searchAdsCard("title")}
                margin="normal"
              />
            </div> */}
          </div>
          <div className={classes.root}>
            <Grid container style={{ margin: "auto" }} spacing={2}>
              {adsDetails.map((value, index) => (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                  <Adcards adsData={value} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        {/* <div className={classes.cover}>
          <div className={classes.header}>Recommended</div>

          <div className={classes.root}>
            <Grid container style={{ margin: "auto" }} spacing={2}>
              {adsDetails.map((value, index) => (
                <Grid item xs={12} sm={6}  lg={4} key={index}>
                  <Adcards adsData={value} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div> */}
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
