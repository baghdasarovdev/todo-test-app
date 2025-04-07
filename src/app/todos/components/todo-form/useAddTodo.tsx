import { trpc } from "@/app/_trpc/client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useAddTodo = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const utils = trpc.useUtils();

  const addTodoMutation = trpc.addTodo.useMutation({
    onMutate: (newTodo) => {
      utils.getTodos.setData(undefined, (old) => {
        const todo = {
          text: newTodo.text,
          _id: uuidv4(),
          completed: false,
          createdAt: new Date().toString(),
        };
        old?.unshift(todo);
        return old;
      });
      setNewTodoText("");
    },
    onSettled: () => {
      utils.getTodos.invalidate();
    },
  });

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      addTodoMutation.mutate({ text: newTodoText });
    }
  };

  return {
    newTodoText,
    setNewTodoText,
    handleAddTodo,
    isPending: addTodoMutation.isPending,
  };
};
