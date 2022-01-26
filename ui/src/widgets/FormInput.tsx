import { Dropdown, Input, Datepicker, Button } from "../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormData } from "../types";

type Props = {
  onSubmit: (formData: FormData) => void;
};

const formSchema = Yup.object().shape({
  title: Yup.string().required(),
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  dob: Yup.string().required(),
  annualIncome: Yup.number().min(1).required(),
  employmentStatus: Yup.string().required(),
  houseNumber: Yup.number().min(1).required(),
  postcode: Yup.string()
    .matches(/^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i)
    .required(),
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
      console.log(onSubmit);
      onSubmit(value);
    },
    validationSchema: formSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col gap-4">
          <Dropdown
            name="title"
            label="Title"
            items={["Mr", "Mrs", "Miss"]}
            onChange={formik.handleChange}
            value={formik.values.title}
            errors={formik.errors.title}
          />
          <Input
            name="firstname"
            label="First name"
            placeholder="Joe"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            errors={formik.errors.firstname}
          />
          <Input
            name="lastname"
            label="Last name"
            placeholder="Bloggs"
            onChange={formik.handleChange}
            value={formik.values.lastname}
            errors={formik.errors.lastname}
          />
          <Datepicker
            name="dob"
            label="Date of Birth"
            onChange={formik.handleChange}
            value={formik.values.dob}
            errors={formik.errors.dob}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Input
            name="annualIncome"
            type="number"
            label="Income per annum"
            onChange={formik.handleChange}
            value={formik.values.annualIncome}
            errors={formik.errors.annualIncome}
          />
          <Dropdown
            name="employmentStatus"
            label="Employment"
            items={["Full time", "Part time", "Student"]}
            onChange={formik.handleChange}
            value={formik.values.employmentStatus}
            errors={formik.errors.employmentStatus}
          />
          {/* I think we should change house number to be free text */}
          <Input
            name="houseNumber"
            type="number"
            label="House number"
            onChange={formik.handleChange}
            value={formik.values.houseNumber}
            errors={formik.errors.houseNumber}
          />
          <Input
            name="postcode"
            label="Postcode"
            onChange={formik.handleChange}
            value={formik.values.postcode}
            errors={formik.errors.postcode}
          />
        </div>
      </div>
      <div className="mt-8">
        <Button type="submit" disabled={!formik.isValid || !formik.dirty}>
          Check Eligibility
        </Button>
      </div>
    </form>
  );
};

export default FormInput;
