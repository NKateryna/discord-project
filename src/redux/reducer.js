import actions from './actions';

const INITIAL_STATE = {
  servers: [],
  activeServer: '',
};

const serversReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATION_SERVERS: {
      const ServersArray = [...state.servers];
      action.payload.servers.map((server) => ServersArray.push(server));
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
