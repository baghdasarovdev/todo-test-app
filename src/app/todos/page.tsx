import { Metadata } from "next";
import { TodoForm, TodoList } from "./components";

export const metadata: Metadata = {
  title: "Todo List",
};

export default function TodoListPage() {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
