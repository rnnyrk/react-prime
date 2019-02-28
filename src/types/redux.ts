/* eslint-disable @typescript-eslint/no-explicit-any */
import * as i from 'types';
import { ThunkAction as IThunkAction } from 'redux-thunk';
import { MapStateToProps as ReduxMapStateToProps } from 'react-redux';

/*
  Shape of a Redux action
  P = shape of payload
*/
export type Action<P = any> = {
  type: string;
  payload?: P;
  error?: boolean;
  meta?: any;
};

/*
  Thunk action type with pre-filled generics
  ReturnType = return type of function
*/
export type ThunkAction<ReturnType = void> = IThunkAction<ReturnType, i.ReduxState, {}, Action>;

/*
  MapStateToProps type with pre-filled state
  P = component props
  T = state props
*/
export type MapStateToProps<P = any, T = any> = ReduxMapStateToProps<T, P, i.ReduxState>;
