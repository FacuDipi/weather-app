import initialState from './initialState'
import { fetchWeather, FETCH_WEATHER } from '../actions';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WEATHER:
        return {
          ...state,
        tempNum: action.payload.main.temp ,
        cityName: action.payload.name ,
        countryName: action.payload.sys.country,
        rainProb: action.payload.weather.description
          
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  