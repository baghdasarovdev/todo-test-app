import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: (value: string) => void;
}

export const Input = ({ value, setValue, className, ...rest }: InputProps) => (
  <input
    value={value}
    onChange={(e) => setValue(e.target.value)}
    className={twMerge("flex-1 p-2 border rounded", className)}
    {...rest}
  />
);
