import axios from 'axios';

export const instance = axios.create({

  baseURL: 'https://api.thecatapi.com/v1/',

  headers: {
    
    'Accept': 'application/json',

    'x-api-key': '21646b43-a5cb-436f-9777-08c4626023e5'
    
  },

});