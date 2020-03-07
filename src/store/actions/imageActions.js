import { IMAGES, IMAGE } from './../types/index';
import { instance } from './../../config/index';

// Get All Available CAT Images
export const getImages = () => async dispatch => {

    try {

        const response = await instance.get(`/images?limit=100`);

        dispatch({ type: IMAGES, payload: response.data });

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};

// Show Single CAT Image Based On id
export const getImage = (id) => async dispatch => {

    try {

        const response = await instance.get(`/images/${id}`);

        dispatch({ type: IMAGE, payload: response.data });

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};

// Upload CAT Image
export const uploadImage = (data) => async dispatch => {

    try {

        const formData = new FormData();

        formData.append('file', data.file);

        const response = await instance.post(`/images/upload`, formData);

        // dispatch({ type: IMAGES, payload: response.data });

        alert(`${JSON.stringify(response.data)}`);

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};