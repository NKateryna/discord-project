import actions from './actions';

export type ConversationsActionTypes = {
  CREATING_CONVERSATIONS_LIST: 'CREATING_CONVERSATIONS_LIST',
  CONVERSATIONS_TOGGLE_LOADING: 'CONVERSATIONS_TOGGLE_LOADING',
  ADDING_CONVERSATION: 'ADDING_CONVERSATION',
  DELETE_CONVERSATION: 'DELETE_CONVERSATION',
};

interface CreatingConversationList {
  type: typeof actions.CREATING_CONVERSATIONS_LIST;
  payload: {
    data: Conversation,
  };
}
interface ConversationToggleLoading {
  type: typeof actions.CONVERSATIONS_TOGGLE_LOADING;
  payload: {
    toggleValue: boolean,
  };
}
interface AddingСonversation {
  type: typeof actions.ADDING_CONVERSATION;
  payload: {
    conversation: Conversation,
  };
}
interface DeleteСonversation {
  type: typeof actions.DELETE_CONVERSATION;
  payload: {
    id: string,
  };
}

export type Action =
  | CreatingConversationList
  | ConversationToggleLoading
  | AddingСonversation
  | DeleteСonversation;

export interface Conversation {
  _id: string;
  sender: {
    username: string,
    hash: number,
    status: string,
    avatar: string,
  };
}

export type ConversationsData = Array<Conversation>;
