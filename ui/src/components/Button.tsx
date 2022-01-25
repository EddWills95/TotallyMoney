import { ReactNode } from "react";

type Props = {
  buttonType?: "Primary" | "Secondary" | "Warning";
  children: ReactNode;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = ({ buttonType = "Primary", children, ...rest }: Props) => (
  <button
    className="input-base text-white disabled:cursor-not-allowed disabled:text-gray-500 border:gray-500"
    {...rest}
  >
    {children}
  </button>
);

export default Button;
