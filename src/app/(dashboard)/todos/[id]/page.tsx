interface Props {
  params?: {
    id?: number;
  };
}

const Todo = ({ params: { id } = {} }: Props) => {
  return (
    <div>
      <h1>Inside {id}</h1>
    </div>
  );
};

export default Todo;
