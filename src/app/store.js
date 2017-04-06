import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as appReducers from 'app/ducks';

let middleware = applyMiddleware(thunk);

if (__DEV__ && __CLIENT__ && typeof window.devToolsExtension === 'function') {
    middleware = compose(middleware, window.devToolsExtension());
}

export default createStore(combineReducers({
    ...appReducers,
}), middleware);
