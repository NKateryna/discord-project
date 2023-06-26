import actions from './actions';

const INITIAL_STATE = {
  data: [],
  total: 0,
};

const conversationsDataReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATING_CONVERSATIONS_LIST: {
      const сonversationsArray = [];
      action.payload.data.map((сonversation) =>
        сonversationsArray.push(сonversation)
      );
      return {
        ...state,
        data: сonversationsArray,
        total: action.payload.total,
      };
    }
    case actions.DELETE_CONVERSATION: {
      const сonversationsArray = state.data.filter(
        (сonversation) => сonversation._id !== action.payload.id
      );
      return {
        ...state,
        data: сonversationsArray,
        total: сonversationsArray.length,
      };
    }
    default:
      return state;
  }
};

export default conversationsDataReduser;
