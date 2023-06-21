const actions = {
  CREATING_USER_INFO: 'CREATING_USER_INFO',
};

export default actions;

export const creationUserInfo = (userInfo) => {
  return { type: actions.CREATING_USER_INFO, payload: { userInfo } };
};
