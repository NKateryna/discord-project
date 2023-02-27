import actions from './actions';

const INITIAL_STATE = {
  servers: [],
  activeServer: '',
};

const serversReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATING_SERVERS_LIST: {
      const serversArray = [];
      action.payload.servers.map((server) => serversArray.push(server));
      return { ...state, servers: serversArray };
    }
    case actions.ADDING_SERVER: {
      const serversArray = [...state.servers];
      serversArray.push(action.payload.server);
      return { ...state, servers: serversArray };
    }
    case actions.SAVE_ACTIVE_ITEM_SIDEBAR: {
      return { ...state, activeServer: action.payload.id };
    }
    default:
      return state;
  }
};

export default serversReduser;
