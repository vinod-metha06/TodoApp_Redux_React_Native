import {TodoAction} from '../constanst/constanst';

export function addTodo(todo:any) {
  return {
    type: TodoAction.ADD_TODO,
    payload: todo,
  };
}

export function toggleTodos(id: any) {
  return {
    type: TodoAction.TOGGLE_TODO,
    payload: id,
  };
}

export function deleteTodos(id: any) {
  return {
    type: TodoAction.DELETE_TODO,
    payload: id,
  };
}
