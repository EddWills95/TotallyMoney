import React from "react";
import FormInput from "./widgets/FormInput";

function App() {
  const handleSubmit = () => {
    // Send some stuff to the server
    // When we get data back we can change to a different view
  };

  return (
    <div className="flex flex-col h-full p-8 items-center justify-center text-white bg-mirage">
      <FormInput onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
