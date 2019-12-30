// action types

export const createAds = (data) => {
    return {
        type: 'CREATE_ADS',
        value: data
    }
}

export const getAds = () => {
    return {
        type: 'SHOW_ADS',
        value: ''
    }
}
// action creator

export const createAdsAction = (data) => {
    return dispatch =>{
        dispatch(createAds(data));
    }
}

export const getAdsAction = () => {
    return async dispatch =>{
        dispatch(getAds());
    }
}