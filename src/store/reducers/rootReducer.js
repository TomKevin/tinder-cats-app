import  { combineReducers } from 'redux';

// Listing Reducers
import imageReducer from './imageReducer';
import favouriteReducer from './favouriteReducer';

export default combineReducers({

    images: imageReducer,

    favourites: favouriteReducer

});