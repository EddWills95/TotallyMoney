import React, { useState, useContext } from "react";
import { AvailableCreditCards, CreditCard, FormData } from "./types";
import { FormInput, CreditCardSelector, HistoricalInput } from "./widgets";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import "./styles/App.css";
import CardsContext from "./context/cardsContext";

function App() {
  const [availableCards, setAvailableCards] =
    useState<AvailableCreditCards>(undefined);

  // const { selectedCards } = useContext(CardsContext);

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

  return (
    <div className="flex flex-col min-h-screen p-8 py-10 items-center justify-center text-white bg-mirage">
      <SwitchTransition>
        <CSSTransition
          key={availableCards?.length ? "credit-card-selector" : "form-input"}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          {availableCards ? (
            <>
              <svg
                onClick={resetCards}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-12 left-8 hover:cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <CreditCardSelector
                availableCards={availableCards}
                resetCards={resetCards}
              />
            </>
          ) : (
            <div>
              <FormInput onSubmit={handleSubmit} />
              <HistoricalInput setAvailableCards={setAvailableCards} />
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>

      {/* {!!selectedCards.length && (
        <div className="fixed bottom-0 bg-offWhite transition-transform -translate-y-20 z-20 w-full h-1/5 text-black">
          <p>
            Total credit:{" "}
            {selectedCards.reduce(
              (prev: number, curr: CreditCard) => (prev += curr.credit),
              0
            )}
          </p>
        </div>
      )} */}
    </div>
  );
}

export default App;
