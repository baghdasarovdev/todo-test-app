import { IClientTodo } from "@/app/types";
import { TodoEditFields } from "../todo-edit-fields";
import { TodoInfoFields } from "../todo-info-fields";
import { useDeleteTodo } from "./useDeleteTodo";
import { useUpdateTodo } from "./useUpdateTodo";

interface IProps {
  todo: IClientTodo;
}

export const TodoItem = ({ todo }: IProps) => {
  const {
    handleUpdateTodo,
    handleCancelEdit,
    handleComplete,
    toggleEditMode,
    setText,
    editMode,
    text,
  } = useUpdateTodo(todo);
  const { handleDeleteTodo } = useDeleteTodo(todo);

  return (
    <div
      key={todo._id.toString()}
      className="p-3 border rounded shadow-sm flex justify-between items-center gap-2"
    >
      {editMode ? (
        <TodoEditFields
          handleUpdateTodo={handleUpdateTodo}
          handleCancelEdit={handleCancelEdit}
          setText={setText}
          text={text}
        />
      ) : (
        <TodoInfoFields
          handleDeleteTodo={handleDeleteTodo}
          handleComplete={handleComplete}
          toggleEditMode={toggleEditMode}
          completed={todo.completed}
          text={todo.text}
        />
      )}
    </div>
  );
};
