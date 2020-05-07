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

    // fetch(url,{method: "GET",mode: "no-cors", headers:{"Content-Type": "application/json; charset=utf-8"}})
    // .then(data => {
    // 	console.log("Adds details included");
    // 	console.log(data);
    // 	//dispatch(getMaterials(data.materials));
    // 	dispatch(getAds(data));
    // })
    // .catch(error => {
    // 	console.error(error);
    // });

    Axios.get(url)
      .then(({ data }) => {
        console.log(data.adsDetails);
        dispatch(getAds(data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
