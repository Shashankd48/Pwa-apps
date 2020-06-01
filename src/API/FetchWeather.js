import Axios from "axios";
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const URL = process.env.REACT_APP_URL;
const KEY = process.env.REACT_APP_API;

export const FectWeather = async (query) => {
   const { data } = await Axios.get(URL, {
      params: {
         q: query,
         units: "metric",
         APPID: KEY,
      },
   });
   return data;
};
