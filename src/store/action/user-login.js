import config from "../../config";
import Axios from "axios";

export const verifyUser = (data) => {
  return {
    type: "SIGN_IN",
    value: data,
  };
};

export const signoutUser = (data) => {
  return {
    type: "SIGN_OUT",
    value: data,
  };
};

export const verifyUserAction = (data) => {
  const url = config.HostURL + "/users";
  console.log("Successful");
  data.loginDetails["Loginstatus"] = true;
  return (dispatch) => {
    dispatch(verifyUser(data));
  };
};

export const signoutUserAction = (data) => {
  const url = config.HostURL + "/users";
  console.log("Successful");
  data.loginDetails["Loginstatus"] = false;
  return (dispatch) => {
    dispatch(signoutUser(data));
  };
};
