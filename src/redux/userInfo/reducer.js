import actions from './actions';

const INITIAL_STATE = {
  username: '',
  hash: '',
  status: '',
  microphone: false,
  headphones: false,
  avatar: '',
  createdAt: '',
};

const userInfoReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATING_USER_INFO: {
      const {
        username,
        hash,
        status,
        microphone,
        headphones,
        avatar,
        createdAt,
      } = action.payload.userInfo;
      return {
        ...state,
        username,
        hash,
        status,
        microphone,
        headphones,
        avatar,
        createdAt,
      };
    }
    default:
      return state;
  }
};

export default userInfoReduser;
