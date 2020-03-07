import  { combineReducers } from 'redux';

// Listing Reducers
import imageReducer from './imageReducer';

export default combineReducers({

    images: imageReducer,

});