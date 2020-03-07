import { FAVOURITES } from './../types/index';

const initialState = [];

export default function(state = initialState, action) {

    switch(action.type) {

        case FAVOURITES:

            state = action.payload;

            return state;

        default:

            return state;

    }

};