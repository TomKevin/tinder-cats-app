import { FAVOURITES } from './../types/index';
import { instance } from './../../config/index';

// Get All Favourte CAT Images
export const getFavourites = () => async dispatch => {

    try {

        const response = await instance.get(`/favourites`);

        dispatch({ type: FAVOURITES, payload: response.data });

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};

// Save Image As Favourite 
export const saveAsFavourite = (data) => async dispatch => {

    try {

        const response = await instance.post(`/favourites`, data);

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};

// Delete Image As Favourite 
export const deleteFavourite = (id) => async dispatch => {

    try {

        const response = await instance.delete(`/favourites/${id}`);

        return response.data;
        
    } catch (error) {

        throw error.response.data;
        
    }

};