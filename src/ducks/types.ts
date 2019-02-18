import * as i from 'types';
import { Dispatch } from 'redux';
import { ThunkAction as IThunkAction } from 'redux-thunk';
import { ActionType } from 'typesafe-actions';

export interface ReduxState {
  home: i.HomeState;
}

export interface Action<P = any> {
  type: string;
  payload?: P;
  error?: boolean,
  meta?: any,
}

export type Actions<A> = ActionType<A>;

// R = Return Type
export type ThunkAction<R = void> = IThunkAction<R, i.ReduxState, i.ApiHelper, Action>;

export type D = Dispatch<i.Action>;
export type GS = () => i.ReduxState;
export type A = i.ApiHelper;
