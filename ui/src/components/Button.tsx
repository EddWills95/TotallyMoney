import { ReactNode } from "react";

interface Props {
  buttonType?: "Primary" | "Secondary" | "Warning";
  children: ReactNode;
  type: "button" | "submit" | "reset";
}

const Button = ({ buttonType = "Primary", children, ...rest }: Props) => (
  <button
    className="w-full h-10 pl-3 pr-6 text-base border rounded-lg appearance-none focus:shadow-outline"
    {...rest}
  >
    {children}
  </button>
);

export default Button;
