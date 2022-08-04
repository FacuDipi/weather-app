import {initialState} from '../reducers/initialState'

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PASSENGERS":
        return {
          ...state,
          count: action.payload.totalPassengers,
          passengers: action.payload.data
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;