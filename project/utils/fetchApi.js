import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '054fb6c66fmshf071b7679489855p19612ejsnea1364236372',
    },
  });
    
  return data;
}

/** 
 * headers: {
    'X-RapidAPI-Key': '054fb6c66fmshf071b7679489855p19612ejsnea1364236372',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
*/



