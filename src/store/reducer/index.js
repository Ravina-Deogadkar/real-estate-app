const initialState = {
  adsDetails: [
    {
      title: "",
      price: 0,
      floorspace: 0,
      housetype: "",
      location: "",
    },
  ],
};

function adsReducer(state = initialState, action) {
  // const newState = { ...state }
  switch (action.type) {
    case "CREATE_ADS":
      // let newAds;
      if (action.value) {
        return {
          ...state,
          ...action.value,
        };
      } else {
        return {
          ...state,
        };
      }
    case "SHOW_ADS":
      if (action.value) {
        return {
          ...state,
          ...action.value,
        };
      } else {
        return {
          ...state,
        };
      }
    case "SIGN_IN":
      if (action.value) {
        return {
          ...state,
          ...action.value,
        };
      } else {
        return {
          ...state,
        };
      }
    case "SIGN_OUT":
      if (action.value) {
        return {
          ...state,
          ...action.value,
        };
      } else {
        return {
          ...state,
        };
      }
    default:
      break;
  }
  // if (action.type === CREATE_ADS) {
  //     state.adsDetails.push(action.value);
  // }
  return state;
}

export default adsReducer;
