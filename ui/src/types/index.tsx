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

export type CreditCard = {
  id: string;
  name: string;
  apr: number;
  balanceDuration: number;
  purchaseDuration: number;
  credit: number;
};

export type AvailableCreditCards = Array<CreditCard> | undefined;
