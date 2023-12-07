import { Server } from '../../types';
import actions from './actions';

export type ServersState = {
  servers: Server[],
  isLoaded: boolean,
  activeServer: string,
  communities: Server[],
  communitiesSearch: Server[],
  toggleSearch: boolean,
};

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
    servers: Server[],
  };
}

export interface СreationCommunitiesList {
  type: typeof actions.CREATING_COMMUMITIES_LIST;
  payload: {
    communities: Server[],
  };
}

interface SavingSearchCommunitiesList {
  type: typeof actions.SAVING_SEARCH_COMMUMITIES_LIST;
  payload: {
    communitiesSearch: Server[],
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
