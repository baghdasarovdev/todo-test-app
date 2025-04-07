'use client'

import { TodoItem } from "../todo-item";
import useTodoList from "./useTodoList";

export const TodoList = () => {
  const { isLoading, error, data } = useTodoList();

  return (
    <div className="space-y-2">
      {isLoading ? (
        <p>Loading todos...</p>
      ) : error ? (
        <p>Error loading todos: {error.message}</p>
      ) : (
        <>
          {data?.length === 0 ? (
            <p>No todos yet. Add one above!</p>
          ) : (
            data?.map((todo) => <TodoItem key={todo._id} todo={todo} />)
          )}
        </>
      )}
    </div>
  );
};
