import actions from './actions';
import { Action, Conversation, conversationsData } from './types';

const INITIAL_STATE = {
  data: [],
  toggleLoading: false,
};

const conversationsDataReduser = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case actions.CREATING_CONVERSATIONS_LIST: {
      return { ...state, data: action.payload.data };
    }
    case actions.CONVERSATIONS_TOGGLE_LOADING: {
      return {
        ...state,
        toggleLoading: action.payload.toggleValue,
      };
    }
    case actions.ADDING_CONVERSATION: {
      const сonversationsArray: conversationsData = [...state.data];
      const existingConversation = сonversationsArray.some(
        (сonversation: Conversation) =>
          сonversation._id === action.payload.conversation._id
      );
      if (!existingConversation) {
        сonversationsArray.push(action.payload.conversation);
      }
      return { ...state, data: сonversationsArray };
    }
    case actions.DELETE_CONVERSATION: {
      const сonversationsArray = state.data.filter(
        (сonversation: Conversation) => сonversation._id !== action.payload.id
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
