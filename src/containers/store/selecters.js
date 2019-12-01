export function getTodos(state) {
  return state.todo_screen.todos;
}

export function getLabels(state) {
  return state.todo_screen.labels;
}

export function getDefaultLabel(state) {
  return state.todo_screen.defaultLabel;
}