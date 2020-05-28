import FetchAPI from "../../fetch";
import config from "../../config";
import Axios from "axios";
//const fetch = require('node-fetch');
// action types

export const createAds = (data) => {
  return {
    type: "CREATE_ADS",
    value: data,
  };
};

export const getAds = (data) => {
  return {
    type: "SHOW_ADS",
    value: data,
  };
};
// action creator

export const createAdsAction = (data) => {
  return (dispatch) => {
    dispatch(createAds(data));
  };
};

export const getAdsAction = () => {
  return async (dispatch) => {
    const url = config.HostURL + "/ads";

    Axios.get(url)
      .then(({ data }) => {
        const adsDetails = [];
        data.adsDetails.map((value, index) => {
          adsDetails[index] = value;
          adsDetails[index].image = config.HostURL + value.image;
        });
        console.log(adsDetails);
        dispatch(getAds(adsDetails));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
