import prisma from "@/_utils/db";
import TodoList from "@/_components/TodoList";

const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return await prisma.todo.findMany({});
};

const Todos = async () => {
  const todos = await getTodos();
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default Todos;
