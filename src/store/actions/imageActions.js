import { IMAGES, IMAGE } from './../types/index';
import { instance } from './../../config/index';

// Get All Available CAT Images
export const getImages = () => async dispatch => {

    try {

        const response = await instance.get(`/images`);

        dispatch({ type: IMAGES, payload: response.data });

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};