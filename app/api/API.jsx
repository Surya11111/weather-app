import axios from 'axios'

/*---Declarations
--*/

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/';
const apiKEY = 'appid=f846839bc4137c6d2971edc1269f1a7a&units=metric';


/*--@Function GetWeather 
Purpose:- Making a get request to get the 5 days weather data
*/

export const getWeather = (location) => {

  const encodedLocation = encodeURIComponent(location);
  const requestUrl = `${OPEN_WEATHER_MAP_URL}forecast?q=${encodedLocation}&${apiKEY}`;

  return axios.get(requestUrl).then((res) => {
    return res.data;
  }, (res) => {
    throw new Error(res);
  })
}
