import { RouteComponentProps as IRouteComponentProps } from 'react-router-dom';

// Make generics optional
export type RouteComponentProps<P = any, C = any> = IRouteComponentProps<P, C>;
