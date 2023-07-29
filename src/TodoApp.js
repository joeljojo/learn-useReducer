import { useReducer } from "react";
import AddTodos from "./AddTodos";
import "./App.css";
import TodoList from "./TodoList";
import todosReducer from "./reducer";
import initialTodos from "./todos";
let nextId = 4;

function TodoApp() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  const handleAddTodo = (description) => {
    // Dispatch action
    dispatch({
      type: "added",
      id: nextId++,
      description: description,
    });
  };

  const handleChangeTodo = (todo) => {
    dispatch({
      type: "changed",
      todo: todo,
    });
  };

  const handleDeleteTodo = (todoId) => {
    dispatch({
      type: "deleted",
      id: todoId,
    });
  };
  return (
    <div className="App">
      <AddTodos onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default TodoApp;
