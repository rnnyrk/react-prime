/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteComponentProps as IRouteComponentProps } from 'react-router-dom';

// Make generics optional
export type RouteComponentProps<P = any, C = any> = IRouteComponentProps<P, C>;

// Exclude K from T
// T = Type
// K = Props to be excluded from T
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
