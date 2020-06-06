import config from "../../config";
import Axios from "axios";

export const verifyUser = (data) => {
  return {
    type: "SIGN_IN",
    value: data,
  };
};

export const verifyUserAction = (data) => {
  const url = config.HostURL + "/users";
  return (dispatch) => {
    dispatch(verifyUser(data));
  };
  console.log("Successful");
};
