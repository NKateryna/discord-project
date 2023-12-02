import actions from './actions';

export type ServersActionTypes = {
  SET_IS_LOADED: 'SET_IS_LOADED',
  ADDING_SERVER: 'ADDING_SERVER',
  LEAVE_SERVER: 'LEAVE_SERVER',
  SAVE_ACTIVE_ITEM_SIDEBAR: 'SAVE_ACTIVE_ITEM_SIDEBAR',
  CREATING_SERVERS_LIST: 'CREATING_SERVER_LIST',
  CREATING_COMMUMITIES_LIST: 'CREATING_COMMUMITIES_LIST',
  SAVING_SEARCH_COMMUMITIES_LIST: 'SEARCH_COMMUMITIES',
};

interface SetIsLoadedServers {
  type: typeof actions.SET_IS_LOADED;
}

interface AddingServer {
  type: typeof actions.ADDING_SERVER;
  payload: {
    server: Server,
  };
}

interface LeaveServer {
  type: typeof actions.LEAVE_SERVER;
  payload: {
    id: string,
  };
}

interface SaveActiveItemSidebar {
  type: typeof actions.SAVE_ACTIVE_ITEM_SIDEBAR;
  payload: {
    id: string,
  };
}

interface СreationServersList {
  type: typeof actions.CREATING_SERVERS_LIST;
  payload: {
    servers: serversData,
  };
}

interface СreationCommunitiesList {
  type: typeof actions.CREATING_COMMUMITIES_LIST;
  payload: {
    communities: serversData,
  };
}

interface SavingSearchCommunitiesList {
  type: typeof actions.SAVING_SEARCH_COMMUMITIES_LIST;
  payload: {
    communitiesSearch: serversData,
    toggleSearch: boolean,
  };
}

export type Action =
  | SetIsLoadedServers
  | AddingServer
  | LeaveServer
  | SaveActiveItemSidebar
  | СreationServersList
  | СreationCommunitiesList
  | SavingSearchCommunitiesList;

export interface Server {
  _id: string;
  name: string;
  photo: string;
}

export type serversData = Array<Server>;
