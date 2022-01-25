import { Dropdown, Input, Datepicker, Button } from "../components";
import { useFormik } from "formik";
import * as Yup from "yup";

type Props = {
  onSubmit: () => void;
};

const formSchema = Yup.object().shape({
  title: Yup.string().required(),
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  dob: Yup.string().required(),
  annualIncome: Yup.number().required(),
  employmentStatus: Yup.string().required(),
  houseNumber: Yup.number().required(),
  postcode: Yup.string().required(),
});

const FormInput = ({ onSubmit }: Props) => {
  const formik = useFormik({
    initialValues: {
      title: "Mr",
      firstname: "",
      lastname: "",
      dob: "",
      annualIncome: 0,
      employmentStatus: "Full time",
      houseNumber: 0,
      postcode: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validationSchema: formSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col">
          <Dropdown
            name="title"
            label="Title"
            items={["Mr", "Mrs", "Miss"]}
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <Input
            name="firstname"
            label="First name"
            placeholder="Joe"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
          <Input
            name="lastname"
            label="Last name"
            placeholder="Bloggs"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
          <Datepicker
            name="dob"
            label="Date of Birth"
            onChange={formik.handleChange}
            value={formik.values.dob}
          />
        </div>
        <div className="flex flex-col">
          <Input
            name="annualIncome"
            type="number"
            label="Income per annum"
            onChange={formik.handleChange}
            value={formik.values.annualIncome}
          />
          <Dropdown
            name="employmentStatus"
            label="Employment"
            items={["Full time", "Part time", "Student"]}
            onChange={formik.handleChange}
            value={formik.values.employmentStatus}
          />
          {/* I think we should change house number to be free text */}
          <Input
            name="houseNumber"
            type="number"
            label="House number"
            onChange={formik.handleChange}
            value={formik.values.houseNumber}
          />
          <Input
            name="postcode"
            label="Postcode"
            onChange={formik.handleChange}
            value={formik.values.postcode}
          />
        </div>
      </div>
      <div className="mt-4">
        <Button type="submit" disabled={!formik.isValid}>
          Check Eligibility
        </Button>
      </div>
    </form>
  );
};

export default FormInput;
