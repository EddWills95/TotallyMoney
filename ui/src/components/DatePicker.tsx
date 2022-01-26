import { FormElementProps } from "../types";
import classNames from "classnames";

type Props = {
  label: string;
} & FormElementProps;

const Datepicker = ({ label, errors, ...rest }: Props) => {
  const pickerId = `datepicker-${label}`;

  return (
    <div className="relative w-full flex flex-col">
      <label className="input-label" htmlFor={pickerId}>
        {label}
      </label>
      <input
        {...rest}
        id={pickerId}
        type="date"
        className={classNames("input-base", "text-black", {
          "input-error": errors,
        })}
      />
    </div>
  );
};

export default Datepicker;
