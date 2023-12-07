import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from './redux/rootReducer';


export const useAppThunkDispatch = (): ThunkDispatch<RootState, unknown, AnyAction> => {
    const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
    return dispatch;
  };