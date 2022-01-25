import React from "react";
import { Dropdown, Input, Datepicker, Button } from "./components";

function App() {
  return (
    <div className="flex flex-col h-full items-center justify-center text-white bg-mirage">
      <div className="flex flex-col gap-4">
        <Dropdown label="Title" items={["Mr", "Mrs", "Miss"]} />
        <Input label="First name" placeholder="Joe" />
        <Input label="Last name" placeholder="Bloggs" />
        <Datepicker label="Date of Birth" />
        <Input type="number" label="Income per annum" />
        <Dropdown
          label="Employment"
          items={["Full time", "Part time", "Student"]}
        />
        {/* I think we should change house number to be free text */}
        <Input type="number" label="House number" />
        <Input label="Postcode" />
        <Button>Check Eligibility</Button>
      </div>
    </div>
  );
}

export default App;
