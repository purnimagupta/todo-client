import { ADD_TODO, FETCH_TODOS, CREATE_LABEL, FETCH_LABELS, DELETE_TODO, UPDATE_TODO } from './action';

export const defaultTodoPageProps= {
  todos: [],
  labels: [],
  defaultLabel: undefined
}

export function reducer(state = defaultTodoPageProps, action){
  switch(action.type) {
    case ADD_TODO:
      return {
        defaultLabel: undefined,
        labels: state.labels,
        todos: [ action.data, ...state.todos ]
        
      }
    case FETCH_TODOS:
      return {
        defaultLabel: undefined,
        labels: state.labels,
        todos: action.data
      }
    case CREATE_LABEL:
      return {
        todos: state.todos,
        labels: [...state.labels, action.data],
        defaultLabel: action.data 
      }
    case FETCH_LABELS:
      return {
        todos: state.todos,
        labels: action.data    
      }
    case DELETE_TODO:
      return {
        labels: state.labels,
        todos: action.data
      }
    case UPDATE_TODO:
      // update the item which has been changed and return it.
      const updateTodos = state.todos.map(item => {
        if(item._id === action.data._id) {
          item = action.data;
        }
        return item;
      });
      return {
        defaultLabel: state.defaultLabel,
        labels: state.labels,
        todos: updateTodos
      }
    default:
      return state;
  }
  
}