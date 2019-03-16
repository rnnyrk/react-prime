import * as i from 'types';

export type ReduxState = {
  data: i.DataState;
}

export type BaseDuckState<DataType, LoadingType = boolean, ErrorType = boolean> = {
  data: DataType;
  loading: LoadingType;
  error: ErrorType;
}
