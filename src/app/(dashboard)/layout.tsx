import TodoForm from "@/_components/TodoForm";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <TodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
