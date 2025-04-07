import { trpc } from "@/app/_trpc/client";
import { IClientTodo } from "@/app/types";
import { useState } from "react";

export const useUpdateTodo = (todo: IClientTodo) => {
  const [text, setText] = useState(todo.text);
  const [editMode, setEditMode] = useState(false);

  const utils = trpc.useUtils();
  const updateTodoMutation = trpc.updateTodo.useMutation({
    onMutate: async (updatedTodo) => {
      await utils.getTodos.cancel();

      utils.getTodos.setData(undefined, (old) => {
        return old?.map((t) => {
          return t._id === updatedTodo.id.toString()
            ? Object.assign(t, updatedTodo.data)
            : t;
        });
      });
    },
    onSettled: () => {
      utils.getTodos.invalidate();
    },
  });

  const handleUpdateTodo = async () => {
    updateTodoMutation.mutate({ id: todo._id, data: { text } });
    handleCancelEdit();
  };

  const toggleEditMode = () => {
    setText(todo.text);
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setText(todo.text);
    setEditMode(false);
  };

  const handleComplete = () => {
    updateTodoMutation.mutate({
      id: todo._id,
      data: { completed: !todo.completed },
    });
  };

  return {
    handleUpdateTodo,
    handleCancelEdit,
    handleComplete,
    toggleEditMode,
    editMode,
    setText,
    text,
  };
};
