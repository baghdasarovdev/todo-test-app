import { trpc } from "@/app/_trpc/client";
import { IClientTodo } from "@/app/types";

export const useDeleteTodo = (todo: IClientTodo) => {
  const utils = trpc.useUtils();
  const deleteTodoMutation = trpc.deleteTodo.useMutation({
    onMutate: async () => {
      await utils.getTodos.cancel();
      utils.getTodos.setData(undefined, (old) => {
        return old?.filter((t) => t._id !== todo._id);
      });
    },
    onSettled: () => {
      utils.getTodos.invalidate();
    },
  });

  const handleDeleteTodo = () => {
    deleteTodoMutation.mutate({ id: todo._id });
  };
  return { handleDeleteTodo };
};
