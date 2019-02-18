import { RouteComponentProps as IRouteComponentProps } from 'react-router';

export * from './general';

export * from 'ducks/types';
export * from 'ducks/home/types';

export * from 'styles/types';

export * from 'services/types';

// Make generics optional
export interface RouteComponentProps<P = any, C = any> extends IRouteComponentProps<P, C> {}
