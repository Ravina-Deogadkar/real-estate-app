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

export const getAdsAction = (data) => {
  return async (dispatch) => {
    
    dispatch(getAds(data));
  };
};
