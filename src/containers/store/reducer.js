import { ADD_TODO, FETCH_TODOS, CREATE_LABEL, FETCH_LABELS } from './action';

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
    default:
      return state;
  }
  
}