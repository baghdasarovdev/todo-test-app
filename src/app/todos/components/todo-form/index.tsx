"use client";

import { Button, Input } from "@/ui";
import { useAddTodo } from "./useAddTodo";

export const TodoForm = () => {
  const { setNewTodoText, handleAddTodo, isPending, newTodoText } =
    useAddTodo();

  return (
    <form onSubmit={handleAddTodo} className="mb-6">
      <div className="flex gap-2">
        <Input
          className="stroke-black"
          value={newTodoText}
          setValue={setNewTodoText}
          placeholder="Add a new todo..."
        />
        <Button
          variant="primary"
          type="submit"
          disabled={isPending || !newTodoText.trim()}
        >
          {isPending ? "Adding..." : "Add"}
        </Button>
      </div>
    </form>
  );
};
