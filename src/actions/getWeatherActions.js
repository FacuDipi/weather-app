export const fetchWeather = () => {
    return async (dispatch) => {
      try {
        const response = await fetch(
          "https://api.instantwebtools.net/v1/passenger?page=0&size=10"
        );
        const data = await response.json();
        dispatch({ type: "FETCH_WEATHER", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_WEATHER_REJECTED", payload: err });
      }
    };
  };
  