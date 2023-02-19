import actions from './actions';

const INITIAL_STATE = {
  servers: [],
  activeServer: '',
};

const serversReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATING_SERVERS_LIST: {
      const ServersArray = [];
      action.payload.servers.map((server) => ServersArray.push(server));
      return { ...state, servers: ServersArray };
    }
    case actions.ADDING_SERVER: {
      const ServersArray = [...state.servers];
      ServersArray.push(action.payload.server);
      return { ...state, servers: ServersArray };
    }
    case actions.SAVE_ACTIVE_ITEM_SIDEBAR: {
      return { ...state, activeServer: action.payload.id };
    }
    default:
      return state;
  }
};

export default serversReduser;
