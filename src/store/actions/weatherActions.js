const API_KEY = "dbe74c1e10696b7c5c58b4e703b1eefd";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = "FETCH_WEATHER"

export const fetchWeather = (city) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
          `${API_URL}&q=${city}`
      );      
      const data = await response.json();
      dispatch({ type: "FETCH_WEATHER", payload: data });
    } catch (err) {
      dispatch({ type: "FETCH_WEATHER_REJECTED", payload: err });
    }
  };
};