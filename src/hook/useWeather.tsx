import axios from "axios";
import { SearchType } from "../types";

export default function useWeather() {
  const fetchWeather = async (search: SearchType) => {
    const appId = "683d6185cec378cdcffd6de470b297f8";
    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
        const data = await axios(geoUrl)
    } catch (error) {
      console.log(error);
    }
  };
  return {
    fetchWeather,
  };
}
