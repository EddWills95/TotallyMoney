import { FormElementProps } from "../types/form-element";
import classNames from "classnames";

type Props = {
  label: string;
  placeholder?: string;
  type?: "text" | "number";
} & FormElementProps;

const TextInput = ({ label, placeholder, type = "text", ...rest }: Props) => {
  const inputId = `input-${label}`;

  return (
    <div className="relative w-full flex flex-col">
      <label htmlFor={inputId}>{label}</label>
      <input
        {...rest}
        type={type}
        id={inputId}
        className={classNames("input-base", "text-black")}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
