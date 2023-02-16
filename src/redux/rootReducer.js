import { combineReducers } from '@reduxjs/toolkit';
import serversReduser from './reducer';

const rootReducer = combineReducers({
  servers: serversReduser,
});

export default rootReducer;
