import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import { defaultTodoPageProps } from "../containers/store/reducer";


export function configureDefaultState() {
  const defaultState = {
    todo_screen: defaultTodoPageProps,
  }

  return defaultState;
}

export function configureStore(defaultState) {
  const composeEnhancers = (window && (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(thunk)));
  return store;
}