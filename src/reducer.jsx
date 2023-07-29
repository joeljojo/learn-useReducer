// define reducer function
const todosReducer = (todos, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...todos,
        {
          id: action.id,
          description: action.description,
          done: false,
        },
      ];
    }

    case "changed": {
      return todos.map((td) => {
        // compare if the todo has changed return the changed todo else
        // return the old todo
        if (td.id === action.todo.id) {
          return action.todo; // changed todo
        } else {
          return td; // old todo
        }
      });
    }
    case "deleted": {
      return todos.filter((td) => td.id !== action.id);
    }

    default: {
      throw Error("Invalid action" + action);
    }
  }
};

export default todosReducer;
