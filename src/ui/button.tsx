import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) => {
  const baseStyles = "rounded cursor-pointer transition hover:bg-gray-200";
  const variantStyles = {
    primary:
      "bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 disabled:bg-blue-300",
    secondary: "p-1 border border-gray-50",
  };

  return (
    <button
      className={twMerge(baseStyles, variantStyles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
};
