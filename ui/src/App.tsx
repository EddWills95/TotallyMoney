import React, { useState } from "react";
import { AvailableCreditCards, FormData } from "./types";
import { FormInput, CreditCardSelector, HistoricalInput } from "./widgets";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button } from "./components";

import "./styles/App.css";

function App() {
  const [availableCards, setAvailableCards] =
    useState<AvailableCreditCards>(undefined);

  const resetCards = () => {
    setAvailableCards(undefined);
  };

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
    <div className="overflow-scroll flex flex-col h-full p-8 py-10 items-center text-white bg-mirage">
      <SwitchTransition>
        <CSSTransition
          key={availableCards?.length ? "credit-card-selector" : "form-input"}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          {availableCards ? (
            <CreditCardSelector
              availableCards={availableCards}
              resetCards={resetCards}
            />
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
