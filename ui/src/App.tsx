import React, { useState } from "react";
import { AvailableCreditCards, FormData } from "./types";
import { FormInput, CreditCardSelector } from "./widgets";

function App() {
  const [availableCards, setAvailableCards] =
    useState<AvailableCreditCards>(undefined);

  const handleSubmit = (formData: FormData) => {
    console.log("doing something");
    fetch("http://localhost:3001", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="flex flex-col h-full p-8 items-center justify-center text-white bg-mirage">
      {availableCards ? (
        <CreditCardSelector availableCards={availableCards} />
      ) : (
        <FormInput onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
