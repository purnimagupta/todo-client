import axios from 'axios';
import getBaseUrl from "../../helpers/api";


const apiUrl = getBaseUrl();

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';

export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';

export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ERROR = 'DELETE_ERROR';

export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_TODO_ERROR = 'UPDATE_TODO_ERROR'

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_TODO_ERROR = 'TOGGLE_TODO_ERROR';

export const CREATE_LABEL = 'CREATE_LABEL';
export const FETCH_LABELS = 'FETCH_LABELS';

export const success = (actionType, data) => {
  return {
    type: actionType,
    data,
  }
}
export const error = (actionType, data) => {
  return {
    type: actionType,
    data: data,
  }
}

export function saveTodo(todo, bucket) {
  return (dispatch) => {
    return axios.post(`${apiUrl}/todo/save`, {todo, bucket})
      .then(response => {
          if (response.status >= 200 && response.status < 300) {
            dispatch(success(ADD_TODO, response.data.todos))
          }
      })
      .catch(err => {
        if(err.response){
          dispatch(error(ADD_TODO_ERROR, err.response ));
        }
      });
  };
}


export function fetchTodos(item) {
  return (dispatch) => {
    return axios.get(`${apiUrl}/todo/fetch`)
      .then(response => {
          if (response.status >= 200 && response.status < 300) {
            dispatch(success(FETCH_TODOS, response.data.todos))
          }
      })
      .catch(err => {
        if(err.response){
         dispatch(error(FETCH_TODOS_ERROR, err.response));
        }
      });
  };
}

export function createNewLabel(options) {
  return (dispatch) => {
    return axios.post(`${apiUrl}/todo/label/create`, {...options} )
      .then(response => {
        if(response.status >= 200 && response.status < 300) {
          dispatch(success(CREATE_LABEL, response.data))
        }
      })
      .catch(err=> {
        if(err.response) {
          console.log(err.response)
        }
      });
  };
}

export function fetchLabels() {
  return (dispatch) => {
    return axios.get(`${apiUrl}/todo/labels/fetch`)
      .then(response => {
        if(response.status >= 200 && response.status < 300) {
          dispatch(success(FETCH_LABELS, response.data.labels))
        }
      })
      .catch(err=> {
        if(err.response) {
          console.log(err.response)
        }
      });
  };
}

export function deleteTodo(id) {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/todo/${id}`, {data: {id: id}})
      .then(response => {
        if(response.status >= 200 && response.status < 300) {
          dispatch(success(DELETE_TODO, response.data.todos))
        }
      })
      .catch(err=> {
        if(err.response) {
          console.log(err.response)
        }
      });
  };
}

/* 
  params(id, todo)
  const todo = {
    todo,
    status,
    bucket,
    createdAt?
  }
*/
export function updateTodo(id, todo) {
  // todo is an object  which is why we're using the spread operator
  return (dispatch) => {
    return axios.patch(`${apiUrl}/todo/${id}`, {id, ...todo})
      .then(response => {
          if (response.status >= 200 && response.status < 300) {
            dispatch(success(UPDATE_TODO, response.data.todos))
          }
      })
      .catch(err => {
        if(err.response){
          return dispatch(error(UPDATE_TODO_ERROR, err.response))
        }
      });
  };
}