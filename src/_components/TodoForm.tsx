import { createTodo } from "@/_utils/actions";

const TodoForm = () => {
  return (
    <div>
      <form action={createTodo}>
        <input
          type="text"
          name="title"
          className="border border-black/25"
          required
        />
        <textarea name="description" className="border border-black/50" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default TodoForm;
