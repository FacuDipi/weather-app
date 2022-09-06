//import initialState from './initialState'
import { fetchWeather } from '../actions';
 
const initialState = {
    
  tempNum: [''],
  cityName: [""],
  countryName: [""],
  rainProb: [""],
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_WEATHER":
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
  