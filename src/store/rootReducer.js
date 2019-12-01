import { combineReducers } from 'redux';
import { reducer as todoReducer } from '../containers/store/reducer';

const appReducer = combineReducers({
  todo_screen: todoReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;