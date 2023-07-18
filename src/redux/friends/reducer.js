import actions from './actions';

const INITIAL_STATE = {
  data: [],
  total: 0,
  toggleLoading: false,
  activeItem: {},
};

const friendsDataReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATING_FRIENDS_LIST: {
      const friendsArray = [];
      action.payload.data.map((friend) => friendsArray.push(friend));
      return {
        ...state,
        data: friendsArray,
        total: action.payload.total,
      };
    }
    case actions.REMOVE_FRIENDS_LIST: {
      return {
        ...state,
        data: [],
        total: 0,
      };
    }
    case actions.TOGGLE_LOADING: {
      return {
        ...state,
        toggleLoading: action.payload.toggleValue,
      };
    }
    case actions.SAVE_ACTIVE_ITEM: {
      return {
        ...state,
        activeItem: action.payload.activeItem,
      };
    }
    default:
      return state;
  }
};

export default friendsDataReduser;