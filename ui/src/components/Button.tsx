import { ReactNode } from "react";

interface Props {
  type?: "Primary" | "Secondary" | "Warning";
  children: ReactNode;
}

const Button = ({ type = "Primary", children }: Props) => (
  <button className="w-full h-10 pl-3 pr-6 text-base border rounded-lg appearance-none focus:shadow-outline">
    {children}
  </button>
);

export default Button;
