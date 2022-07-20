
import {configureStore} from '@reduxjs/toolkit';  
import rootReducer from '../reducers';  



export default function getStore() {  
  return configureStore(rootReducer);
}