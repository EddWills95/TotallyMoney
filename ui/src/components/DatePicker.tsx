interface Props {
  label: string;
}

const Datepicker = ({ label }: Props) => {
  const pickerId = `datepicker-${label}`;

  return (
    <div className="relative w-full flex flex-col">
      <label htmlFor={pickerId}>{label}</label>
      <input
        id={pickerId}
        type="date"
        className="w-full h-10 pl-3 pr-6 text-base border rounded-lg appearance-none focus:shadow-outline"
      />
    </div>
  );
};

export default Datepicker;
