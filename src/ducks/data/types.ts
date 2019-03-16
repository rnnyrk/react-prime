import * as i from 'types';

export type DataState = i.BaseDuckState<i.Data | {}>;

export type Data = {
  success: boolean;
};

export type GetDataThunk = () => i.ThunkAction;
