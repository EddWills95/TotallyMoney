export type FormElementProps = {
  name: string;
  onChange: (value: any) => void;
  value: any;
  errors?: any;
};

export type FormData = {
  title: string;
  firstname: string;
  lastname: string;
  dob: string;
  annualIncome: number;
  employmentStatus: string;
  houseNumber: number;
  postcode: string;
};
