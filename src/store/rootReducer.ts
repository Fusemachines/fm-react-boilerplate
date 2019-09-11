import { History } from 'history';
import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';

import { DogReducer } from './example/reducers';
import { DogState } from './example/types';

export interface ReduxState {
  router: RouterState;
  dogs: DogState;
}

/**
 * Creates a combination of all the reducers for the application
 * @param {History} history History object
 */
const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    dogs: DogReducer
  });

export default createRootReducer;
