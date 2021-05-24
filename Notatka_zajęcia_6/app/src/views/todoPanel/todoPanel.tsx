import React from "react";
import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";
import { TodoService } from "../../services/todo.service";
import { Todo } from "../../store/reducers/todos.reducer";
import todoSelector from "../../store/selectors/todo.selector";

const TodoPanel = () => {
   const todoActions = useAction(TodoService);
   const todos = useSelector(todoSelector.getAll);

   React.useEffect(() => {
      todoActions.setNewTodo({
         id: 123,
         label: "testowyLabel",
         done: false,
         description: "pierwszy wpis",
      });
   }, []);

   const deleteTodo = (todo: Todo) => {
      todoActions.setDeleteTodo(todo);
   };

   return (
      <div>
         <h1>TodoPanel</h1>
         {todos.map((todo, index) => (
            <div key={index}>
               <p>{todo.label}</p>
               <p>{todo.done}</p>
               <p>{todo.description}</p>
               <button onClick={() => deleteTodo(todo)}>Remove</button>
            </div>
         ))}
      </div>
   );
};

export default TodoPanel;
