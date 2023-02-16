import actions from './actions';
import servers from './servers';

const INITIAL_STATE = {
  servers: [],
  activeServer: '',
};

const serversReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATION_SERVERS: {
      const ServersArray = [...state.servers];
      servers.map((server) => ServersArray.push(server));
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
