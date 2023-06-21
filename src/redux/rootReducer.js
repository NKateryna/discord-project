import { combineReducers } from '@reduxjs/toolkit';
import serversReduser from './servers/reducer';
import userInfoReduser from './userInfo/reducer';

const rootReducer = combineReducers({
  servers: serversReduser,
  userInfo: userInfoReduser,
});

export default rootReducer;
