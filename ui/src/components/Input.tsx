interface Props {
  label: string;
  placeholder?: string;
  type?: "text" | "number";
}

const TextInput = ({ label, placeholder, type = "text" }: Props) => {
  const inputId = `input-${label}`;

  return (
    <div className="relative w-full flex flex-col">
      <label htmlFor={inputId}>{label}</label>
      <input
        type={type}
        id={inputId}
        className="w-full h-10 pl-3 pr-6 text-base border rounded-lg appearance-none focus:shadow-outline"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
