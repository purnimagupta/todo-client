import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components'

import {EditTodo} from '../components/index';

import { saveTodo, fetchTodos, createNewLabel, deleteTodo, updateTodo } from './store/action';
import { getTodos, getLabels, getDefaultLabel } from './store/selecters';

export class TodoList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      bucket: undefined,
    }
  }
  componentDidMount() {
    this.props.fetchTodos();
  }
 
  render() {
    const { todos, labels, defaultLabel, createNewLabel, deleteTodo, updateTodo} = this.props;

    const list = todos.map((item) => {
      return(
        <EditTodo 
          key={item._id}
          id={item._id}
          item={item}

          labels={labels}
          defaultLabel={defaultLabel}
          createNewLabel={createNewLabel}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      );
    });
    return (
      <StyledDiv name="display_todo_list">
        {list}
      </StyledDiv> 
    )
  }
}

const StyledDiv = styled.div`
  margin: auto;
  width: 70%;
`;

function mapStateToProps(state){
  return {
    todos: getTodos(state),
    labels: getLabels(state),
    defaultLabel: getDefaultLabel(state),
  }
}

export default connect(mapStateToProps, {
  createNewLabel: createNewLabel,
  fetchTodos: fetchTodos,
  saveTodo: saveTodo,
  deleteTodo: deleteTodo,
  updateTodo: updateTodo
})(TodoList);
