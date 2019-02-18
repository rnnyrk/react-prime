import * as i from 'types';
import { action } from 'typesafe-actions';

import mockData from 'services/mockdata';

const HOME_LOAD = 'home/load';
const HOME_SUCCESS = 'home/success';
const HOME_FAILED = 'home/failed';

const initialState: i.HomeState = {
  loading: false,
  data: null,
};

export default (state = initialState, action: i.Actions<typeof actions>) => {
  switch (action.type) {
    case HOME_LOAD:
      return {
        ...state,
        loading: true,
      };

    case HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case HOME_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export const actions = {
  load: () => action(HOME_LOAD),
  success: (data: i.HomeData) => action(HOME_SUCCESS, data),
  failed: () => action(HOME_FAILED),
};

export const getHome: i.GetHomeAction = () => {
  return (dispatch, getState, api) => {
    dispatch(actions.load());

    setTimeout(() => {
      dispatch(actions.success(mockData));
    }, 2000);
  };
};
