import { UserInfo, UserInfoActionTypes } from './types';

const actions: UserInfoActionTypes = {
  CREATING_USER_INFO: 'CREATING_USER_INFO',
};

export default actions;

export const creationUserInfo = (userInfo: UserInfo) => {
  return { type: actions.CREATING_USER_INFO, payload: { userInfo } };
};
