import { combineReducers } from "redux";
import { Actions as TodosActions} from "./actions/todos.actions";
import { TodosList, todosListInitialState, todosStoreReducer } from "./reducers/todos.reducer";


export type StoreActionTypes = TodosActions;

export interface StoreState {
    todos: TodosList;
}

export const initialStoreState: StoreState = {
    todos: todosListInitialState,
};

export const reducers = combineReducers<StoreState>({
    todos: todosStoreReducer,
}) 
