import { RootState } from '../rootReducer';

export const getConversations = (state: RootState) => state.conversationsData;
