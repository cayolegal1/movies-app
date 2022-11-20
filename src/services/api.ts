import axios from 'axios';

const API_KEY = "df27a80ab685bd8e8093d8bd4c126daa";

export const movies_api = axios.create({

    baseURL: 'https://api.themoviedb.org/3/', 
    headers: {

        'Content-Type': 'application/json'
    }, 
    params: {

        'api_key': API_KEY
    }
});