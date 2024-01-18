import { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://todo20240118-1.fly.dev/api/v1/todos")
      .then((res) => res.json())
      .then((result) => setTodos(result.data));
  }, [todos]);

  return (
    <div>
      {todos && todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}
    </div>
  );
}

export default TodoList;
