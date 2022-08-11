

import initialState from './initialState'

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_WEATHER":
        return {
          ...state,
        tempNum: action.payload.main.temp ,
        cityName: action.payload. ,
        countryName: action.payload.,
        rainProb: action.payload.
          
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  