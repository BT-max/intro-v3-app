import { Todo as TodoType } from "@prisma/client";
import React from "react";

interface TodoProps {
  todo: TodoType;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo?.description}</h2>
      <h3>{todo.completed}</h3>
      <h4>{todo.createdAt.toLocaleTimeString()}</h4>
    </div>
  );
};

export default Todo;
