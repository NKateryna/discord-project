import { Friend } from '../../types';
import actions from './actions';

export interface FriendsDataState {
  data: Friend[],
  total: number,
  toggleLoading: boolean,
  dataSearch: Friend[],
  totalSearch: number,
  toggleSearch: boolean,
};

export type FriendsActionTypes = {
  CREATING_FRIENDS_LIST: 'CREATING_FRIENDS_LIST',
  REMOVE_FRIENDS_LIST: 'REMOVE_FRIENDS_LIST',
  FRIENDS_TOGGLE_LOADING: 'FRIENDS_TOGGLE_LOADING',
  SAVING_SEARCH_FRIENDS: 'SAVING_RESULT_SEARCH_FRIENDS',
};

interface CreatingFriendList {
  type: typeof actions.CREATING_FRIENDS_LIST;
  payload: {
    data: Friend[],
    total: number,
  };
}
interface RemoveFriendsList {
  type: typeof actions.REMOVE_FRIENDS_LIST;
}
interface FriendsToggleLoading {
  type: typeof actions.FRIENDS_TOGGLE_LOADING;
  payload: {
    toggleValue: boolean,
  };
}
export interface SavingSearchFriends {
  type: typeof actions.SAVING_SEARCH_FRIENDS;
  payload: {
   dataSearch: Friend[]
   totalSearch: number
   toggleSearch: boolean
  };
}

export type Action =
  | CreatingFriendList
  | RemoveFriendsList
  | FriendsToggleLoading 
  | SavingSearchFriends;
