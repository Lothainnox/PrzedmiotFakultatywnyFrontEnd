import { Reducer } from "redux";
import { Actions, TodoStoreActions } from "../actions/todos.actions";


export interface Todo {
    id: number;
    label: string;
    done: boolean;
    description: string;
}

export interface TodosList {
    list: Todo[];
}

export const todosListInitialState: TodosList = {
    list: [
        {
        id: 1,
        description: 'Initial todo',
        done: false,
        label: 'Initial Todo',
        }
    ]
};

export const todosStoreReducer: Reducer<TodosList, Actions> = (
    state: TodosList = todosListInitialState,
    actions: Actions,
 ) => {
    switch (actions.type) {
       case TodoStoreActions.SET_NEW_TODO:
          return {
             ...state,
             list: [...state.list, actions.payload.todo],
          };
 
       case TodoStoreActions.SET_TODO_DONE:
          const todoToChange: Todo | undefined = state.list.find(
             (el) => el.id === actions.payload.id,
          );
          if (todoToChange) {
             todoToChange.done = true;
             return {
                ...state,
                list: [...state.list.filter((el) => el.id !== actions.payload.id), todoToChange],
             };
          }
          return state;
 
       case TodoStoreActions.SET_DELETE_TODO:
          return {
             ...state,
             list: state.list.filter((el) => el.id !== actions.payload.todo.id),
          };
 
       default:
          return state;
    }
 };