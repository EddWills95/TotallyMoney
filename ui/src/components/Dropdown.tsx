import { FormElementProps } from "../types/form-element";

type Props = {
  label: string;
  items: Array<any>;
} & FormElementProps;

const Dropdown = ({ label, items, ...rest }: Props) => {
  const dropdownId = `dropdown-${label}`;

  return (
    <div className="relative inline-block w-full">
      <label htmlFor={dropdownId}>{label}</label>
      <select
        {...rest}
        className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline text-black"
        placeholder="Regular input"
      >
        {items.map((item, i) => (
          <option key={i}>{item}</option>
        ))}
      </select>
      <div className="absolute h-10 top-[24px] right-0 flex items-center px-2 pointer-events-none text-black">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Dropdown;
