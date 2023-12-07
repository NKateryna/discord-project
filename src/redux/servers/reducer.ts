import { Server } from '../../types';
import actions from './actions';
import { Action, ServersState } from './types';

const INITIAL_STATE: ServersState = {
  servers: [],
  isLoaded: false,
  activeServer: '',
  communities: [],
  communitiesSearch: [],
  toggleSearch: false,
};

const serversReduser = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case actions.SET_IS_LOADED: {
      return {
        ...state,
        isLoaded: true,
      };
    }
    case actions.CREATING_SERVERS_LIST: {
      return { ...state, servers: action.payload.servers };
    }
    case actions.ADDING_SERVER: {
      const serversArray: Server[] = [...state.servers];
      serversArray.push(action.payload.server);

      const communitiesArray: Server[] = [...state.communities].filter(
        (community: Server) => {
          return community._id !== action.payload.server._id;
        }
      );

      return { ...state, servers: serversArray, communities: communitiesArray };
    }
    case actions.LEAVE_SERVER: {
      const serversArray: Server[] = [...state.servers].filter(
        (server: Server) => {
          return server._id !== action.payload.id;
        }
      );

      return { ...state, servers: serversArray };
    }
    case actions.SAVE_ACTIVE_ITEM_SIDEBAR: {
      return { ...state, activeServer: action.payload.id };
    }
    case actions.CREATING_COMMUMITIES_LIST: {
      return { ...state, communities: action.payload.communities };
    }
    case actions.SAVING_SEARCH_COMMUMITIES_LIST: {
      const communitiesSearchArray: Server[] = [];
      action.payload.communitiesSearch.map((community: Server) =>
        communitiesSearchArray.push(community)
      );

      return {
        ...state,
        communitiesSearch: communitiesSearchArray,
        toggleSearch: action.payload.toggleSearch,
      };
    }
    default:
      return state;
  }
};

export default serversReduser;
