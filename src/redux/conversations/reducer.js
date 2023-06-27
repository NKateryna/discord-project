import actions from './actions';

const INITIAL_STATE = {
  data: [],
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
      };
    }
    case actions.DELETE_CONVERSATION: {
      const сonversationsArray = state.data.filter(
        (сonversation) => сonversation._id !== action.payload.id
      );
      return {
        ...state,
        data: сonversationsArray,
      };
    }
    default:
      return state;
  }
};

export default conversationsDataReduser;
