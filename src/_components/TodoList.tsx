import React from "react";
import { Todo as TodoType } from "@prisma/client";
import Todo from "./Todo";

interface TodoListProps {
  todos: TodoType[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
