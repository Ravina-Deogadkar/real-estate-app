import FetchAPI from "../../fetch";
import config from "../../config";
// action types

export const createAds = (data) => {
    return {
        type: 'CREATE_ADS',
        value: data
    }
}

export const getAds = (data) => {
    return {
        type: 'SHOW_ADS',
        value: data
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
		const url = config.HostURL + '/ads';
	FetchAPI.get(url)
		.then(data => {
			//dispatch(getMaterials(data.materials));
			dispatch(getAds(data));
		})
		.catch(error => {
			console.error(error);
		});
	
        
    }
}