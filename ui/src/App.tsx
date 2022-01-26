import React, { useState } from "react";
import { AvailableCreditCards, FormData } from "./types";
import { FormInput, CreditCardSelector, HistoricalInput } from "./widgets";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button } from "./components";

import "./styles/App.css";

function App() {
  const [availableCards, setAvailableCards] =
    useState<AvailableCreditCards>(undefined);

  const handleSubmit = (formData: FormData) => {
    fetch("http://localhost:3001", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      // This will also contain our intHash
      .then((data) => setAvailableCards(data.cards));
  };

  console.log(availableCards);

  return (
    <div className="flex flex-col h-full p-8 items-center justify-center text-white bg-mirage">
      <SwitchTransition>
        <CSSTransition
          key={availableCards?.length ? "credit-card-selector" : "form-input"}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          {availableCards ? (
            <CreditCardSelector availableCards={availableCards} />
          ) : (
            <div>
              <FormInput onSubmit={handleSubmit} />
              <HistoricalInput setAvailableCards={setAvailableCards} />
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
