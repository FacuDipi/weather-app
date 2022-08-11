
import {configureStore} from '@reduxjs/toolkit';  
import rootReducer from './reducers/rootReducer';  
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

let middlewares = [thunk];
const middleware = applyMiddleware(...middlewares);

export default createStore(rootReducer, (middleware));

export  function getStore() {  
  return configureStore(rootReducer);
}