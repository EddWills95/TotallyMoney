import { FormElementProps } from "../types/form-element";

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
        className="w-full h-10 pl-3 pr-6 text-base border rounded-lg appearance-none focus:shadow-outline text-black"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
