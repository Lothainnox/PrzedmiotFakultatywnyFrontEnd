import { Todo } from "../reducers/todos.reducer";

export enum TodoStoreActions {
    SET_NEW_TODO = 'SET_NEW_TODO',
    SET_TODO_DONE = 'SET_TOTO_DONE',
    SET_DELETE_TODO = 'SET_DELETE_TODO',

}

export interface SetNewTodoAction{
    type: TodoStoreActions.SET_NEW_TODO,
    payload: {
        todo: Todo
    }
}

export interface SetTodoDoneAction{
    type: TodoStoreActions.SET_TODO_DONE,
    payload: {
        id: number,
    }
}

export interface SetDeleteTodoAction{
    type: TodoStoreActions.SET_DELETE_TODO,
    payload: {
        todo: Todo
    }
}
export type Actions = SetNewTodoAction | SetTodoDoneAction | SetDeleteTodoAction

export const todosActions = {
    setTodoDone: (id: number): SetTodoDoneAction => ({
        type: TodoStoreActions.SET_TODO_DONE,
        payload: { id }
    }),
    setNewTodo: (todo: Todo): SetNewTodoAction => ({
        type: TodoStoreActions.SET_NEW_TODO,
        payload: { todo }

    }),
    setDeleteTodo: (todo: Todo): SetDeleteTodoAction => ({
        type: TodoStoreActions.SET_DELETE_TODO,
        payload: { todo }
    }),

}

