type EmploymentStatus = "Full time" | "Part time" | "Student";

export type CustomerData = {
  title: "Mr" | "Mrs" | "Miss";
  firstname: string;
  lastname: string;
  dob: string;
  annualIncome: number;
  employmentStatus: EmploymentStatus;
  houseNumber: number;
  postcode: string;
};
