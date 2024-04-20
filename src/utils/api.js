import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_WATCH_IT_APIKEY;

const headers = {
    Authorization: "Bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url , {
                headers: headers,   // configurartions
                params: params
            });
        return data;
    }
    catch (err) {
        console.log(err, 'error fetching');
        return err;
    }
}