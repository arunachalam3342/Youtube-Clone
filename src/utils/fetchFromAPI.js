import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/captions',
    params: {
        part: 'snippet',
        videoId: 'M7FIvfx5J10',
        maxResults: 50
    },
    headers: {
        'X-RapidAPI-Key': '22a33d60ecmsh5c2d7f407a6d298p10b6b4jsnaa1e381e8bfa',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};