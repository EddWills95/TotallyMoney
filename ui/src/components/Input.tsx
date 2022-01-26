import { FormElementProps } from "../types";
import classNames from "classnames";

type Props = {
  label: string;
  placeholder?: string;
  type?: "text" | "number";
} & FormElementProps;

const TextInput = ({
  label,
  placeholder,
  type = "text",
  errors,
  ...rest
}: Props) => {
  const inputId = `input-${label}`;

  return (
    <div className="relative w-full flex flex-col">
      <label className="input-label" htmlFor={inputId}>
        {label}
      </label>
      <input
        {...rest}
        type={type}
        id={inputId}
        className={classNames("input-base", "text-black", {
          "input-error": errors,
        })}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
