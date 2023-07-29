import { useState } from "react";
import Button from "./Button";

const TodoList = ({ todos, onChangeTodo, onDeleteTodo }) => {
  const [editableTodoId, setEditableTodoId] = useState(null);
  const [editedDescription, setEditedDescription] = useState("");

  const handleEditClick = (todo) => {
    setEditableTodoId(todo.id);
    setEditedDescription(todo.description);
  };
  const handleDeleteClick = (todoId) => {
    onDeleteTodo(todoId);
  };

  const handleOnSave = (todo) => {
    onChangeTodo({ ...todo, description: editedDescription });
    setEditableTodoId(null);
    setEditedDescription("");
  };
  return (
    <div>
      <h1>My Todos List</h1>
      <div className="todos">
        {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            {/* Show editable input to change todo */}
            {editableTodoId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
                <Button label="Save" onClick={() => handleOnSave(todo)} />
              </div>
            ) : (
              <div>
                {todo.description}
                <Button label="Edit" onClick={() => handleEditClick(todo)} />
                <Button
                  label="Delete"
                  onClick={() => handleDeleteClick(todo.id)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TodoList;
