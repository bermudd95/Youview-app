
import axios from 'axios';

export const URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'ba587c60cbmsh33b9ccb644d1f2bp181a77jsn047fce048636',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const API = async (url) => {
  const { data } = await axios.get(`${URL}/${url}`, options);

  return data;
};