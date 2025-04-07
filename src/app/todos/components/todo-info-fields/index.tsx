import { Icons } from "@/assets/icons";
import { Button } from "@/ui";

interface IProps {
  handleDeleteTodo: () => void;
  handleComplete: () => void;
  toggleEditMode: () => void;
  completed: boolean;
  text: string;
}

export const TodoInfoFields = ({
  handleDeleteTodo,
  handleComplete,
  toggleEditMode,
  completed,
  text,
}: IProps) => {
  return (
    <>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleComplete}
        className="cursor-pointer w-4"
      />
      <p
        className={`flex-1 ${completed ? "line-through text-gray-500" : ""}`}
        onDoubleClick={toggleEditMode}
      >
        {text}
      </p>
      <Button onClick={toggleEditMode} variant="secondary">
        <Icons.Pencil width={16} height={16} />
      </Button>
      <Button onClick={handleDeleteTodo} variant="secondary">
        <Icons.Trash width={16} height={16} />
      </Button>
    </>
  );
};
