import { FormElementProps } from "../types/form-element";

type Props = {
  label: string;
} & FormElementProps;

const Datepicker = ({ label, ...rest }: Props) => {
  const pickerId = `datepicker-${label}`;

  return (
    <div className="relative w-full flex flex-col">
      <label htmlFor={pickerId}>{label}</label>
      <input
        {...rest}
        id={pickerId}
        type="date"
        className="w-full h-10 pl-3 pr-6 text-base border rounded-lg appearance-none focus:shadow-outline text-black"
      />
    </div>
  );
};

export default Datepicker;
