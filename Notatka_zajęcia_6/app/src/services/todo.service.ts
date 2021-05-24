import { Todo } from '../store/reducers/todos.reducer';
import store from '../store';
import { todosActions } from '../store/actions/todos.actions';

export class TodoService {

  setNewTodo(todo: Todo) {
   store.dispatch(todosActions.setNewTodo(todo));
  }

  setDeleteTodo(todo: Todo) {
    store.dispatch(todosActions.setDeleteTodo(todo));
  }

  setTodoDone(todo: Todo) {
    store.dispatch(todosActions.setTodoDone(todo.id));
  }

}