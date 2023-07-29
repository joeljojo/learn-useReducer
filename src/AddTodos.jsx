import { useState } from "react";
import Button from "./Button";
const AddTodos = ({ onAddTodo }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    onAddTodo(value);
    setValue("");
  };
  return (
    <div className="todo-form">
      <form>
        <input
          type="text"
          onChange={handleOnChange}
          value={value}
          placeholder="Add Your Todo here ..."
        />

        <Button label="Add Todo" onClick={handleOnClick} />
      </form>
    </div>
  );
};
export default AddTodos;
