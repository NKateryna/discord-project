import { combineReducers } from '@reduxjs/toolkit';
import serversReduser from './servers/reducer';
import userInfoReduser from './userInfo/reducer';
import conversationsDataReduser from './conversations/reducer';
import friendsDataReduser from './friends/reducer';

const rootReducer = combineReducers({
  servers: serversReduser,
  userInfo: userInfoReduser,
  conversationsData: conversationsDataReduser,
  friendsData: friendsDataReduser,
});

export default rootReducer;
