import { IMAGES, IMAGE } from './../types/index';

const initialState = {

    images: [],

    image: {}

};

export default function(state = initialState, action) {

    switch(action.type) {

        case IMAGES:

            return {

                ...state,

                images: action.payload

            };

        case IMAGE:

            return {

                ...state,

                image: action.payload

            };

        default:

            return state;

    }

};