
const FETCH_WEATHER = 'FETCH_WEATHER'

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=metric`;


export const fetchWeather = (city) => {
    return async (dispatch) => {
      try {
        const response = await fetch(
            `${ROOT_URL}&q=${city}`
        );
        const data = await response.json();
        dispatch({ type: "FETCH_WEATHER", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_WEATHER_REJECTED", payload: err });
      }
    };
  };
  