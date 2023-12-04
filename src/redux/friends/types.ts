import actions from './actions';

export type FriendsActionTypes = {
  CREATING_FRIENDS_LIST: 'CREATING_FRIENDS_LIST',
  REMOVE_FRIENDS_LIST: 'REMOVE_FRIENDS_LIST',
  FRIENDS_TOGGLE_LOADING: 'FRIENDS_TOGGLE_LOADING',
  SAVING_SEARCH_FRIENDS: 'SAVING_RESULT_SEARCH_FRIENDS',
};

interface CreatingFriendList {
  type: typeof actions.CREATING_FRIENDS_LIST;
  payload: {
    data: FriendsData,
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
interface SavingSearchFriends {
  type: typeof actions.SAVING_SEARCH_FRIENDS;
  payload: {
   dataSearch: FriendsData,
   totalSearch: number
   toggleSearch: boolean
  };
}

export type Action =
  | CreatingFriendList
  | RemoveFriendsList
  | FriendsToggleLoading 
  | SavingSearchFriends;


export interface Friend {
  _id: string;
  username: string;
  status: string;
  hash: number;
  avatar: string;
}

export type FriendsData = Array<Friend>;
