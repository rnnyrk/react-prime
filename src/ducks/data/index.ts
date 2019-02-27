/**
 * This is an example file from react-prime
 */
import * as i from 'types';
import { action, ActionType } from 'typesafe-actions';

const GET_DATA = 'data/GET';
const GET_DATA_SUCCESS = 'data/GET_SUCCESS';
const GET_DATA_FAILED = 'data/GET_FAILED';

const initialState: i.DataState = {
  data: {},
  error: false,
  loading: false,
};

export default (state = initialState, action: ActionType<typeof actions>) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
      };
    case GET_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const actions = {
  load: () => action(GET_DATA),
  success: (passed: i.Data) => action(GET_DATA_SUCCESS, passed),
  failed: () => action(GET_DATA_FAILED),
};

export const getData: i.GetDataThunk = () => (dispatch) => {
  dispatch(actions.load());

  setTimeout(() => {
    dispatch(actions.success({ success: true }));
  }, 2000);
};
