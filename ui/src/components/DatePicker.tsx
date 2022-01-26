import { FormElementProps } from "../types";
import classNames from "classnames";

type Props = {
  label: string;
} & FormElementProps;

const Datepicker = ({ label, ...rest }: Props) => {
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
        className={classNames("input-base", "text-black")}
      />
    </div>
  );
};

export default Datepicker;
