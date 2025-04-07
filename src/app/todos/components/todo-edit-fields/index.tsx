import { Icons } from "@/assets/icons";
import { Button, Input } from "@/ui";

interface IProps {
  setText: (arg1: string) => void;
  text: string;
  handleCancelEdit: () => void;
  handleUpdateTodo: () => void;
}

export const TodoEditFields = ({
  setText,
  text,
  handleCancelEdit,
  handleUpdateTodo,
}: IProps) => {
  return (
    <>
      <Input
        className="h-4 border-none focus:outline-none pl-6"
        value={text}
        setValue={setText}
        autoFocus
      />
      <Button onClick={handleCancelEdit} variant="secondary">
        <Icons.Close width={16} height={16} />
      </Button>
      <Button onClick={handleUpdateTodo} variant="secondary">
        <Icons.Check width={16} height={16} />
      </Button>
    </>
  );
};
