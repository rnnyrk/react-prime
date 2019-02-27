import { RouteComponentProps as IRouteComponentProps } from 'react-router-dom';

// Make generics optional
export interface RouteComponentProps<P = any, C = any> extends IRouteComponentProps<P, C> {}
