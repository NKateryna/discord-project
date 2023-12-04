import actions from './actions';
import { Action, Friend, FriendsData } from './types';

const INITIAL_STATE = {
  data: [],
  total: 0,
  toggleLoading: false,
  dataSearch: [],
  totalSearch: 0,
  toggleSearch: false,
};

const friendsDataReduser = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case actions.CREATING_FRIENDS_LIST: {
      const friendsArray: FriendsData = [];
      action.payload.data.map((friend: Friend) => friendsArray.push(friend));
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
    case actions.FRIENDS_TOGGLE_LOADING: {
      return {
        ...state,
        toggleLoading: action.payload.toggleValue,
      };
    }
    case actions.SAVING_SEARCH_FRIENDS: {
      const friendsArray: FriendsData = [];
      action.payload.dataSearch.map((friend: Friend) =>
        friendsArray.push(friend)
      );
      return {
        ...state,
        dataSearch: friendsArray,
        totalSearch: action.payload.totalSearch,
        toggleSearch: action.payload.toggleSearch,
      };
    }
    default:
      return state;
  }
};

export default friendsDataReduser;
