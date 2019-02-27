import * as i from 'types';

export type DataState = {
  data: i.Data;
  error: boolean;
  loading: boolean;
};

export type Data = {
  success?: boolean;
};

export type GetDataThunk = () => i.ThunkAction;
