import React from "react";
import { Dropdown, Input, Datepicker, Button } from "./components";
import { useFormik } from "formik";

function App() {
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
  });

  return (
    <form
      className="flex flex-col h-full items-center justify-center text-white bg-mirage"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col gap-4">
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
        <Button type="submit">Check Eligibility</Button>
      </div>
    </form>
  );
}

export default App;
