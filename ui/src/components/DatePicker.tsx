import { FormElementProps } from "../types/form-element";
import classNames from "classnames";

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
        className={classNames("input-base", "text-black")}
      />
    </div>
  );
};

export default Datepicker;
