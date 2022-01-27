import React, { useState, useContext } from "react";
import { AvailableCreditCards, CreditCard, FormData } from "./types";
import { FormInput, CreditCardSelector, HistoricalInput } from "./widgets";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Transition } from "@tailwindui/react";
import CardsContext from "./context/cardsContext";

import "./styles/App.css";

function App() {
  const [availableCards, setAvailableCards] =
    useState<AvailableCreditCards>(undefined);

  const [selectedCards, setSelectedCards] = useState<CreditCard[]>([]);

  const resetCards = () => {
    setAvailableCards(undefined);
    setSelectedCards([]);
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
    <CardsContext.Provider value={{ selectedCards, setSelectedCards }}>
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

        <Transition
          show={!!selectedCards.length}
          enter="transition-gpu transition-transform"
          enterFrom="translate-y-full"
          enterTo="translate-y-0"
          leave="transition gpu transition-transform"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-full"
        >
          {(ref) => (
            <div
              ref={ref}
              className="fixed rounded-lg p-4 bottom-0 bg-offWhite transition-transform z-20 w-full h-auto text-black flex flex-col justify-between translate-y-full md:w-6/12"
            >
              <h2 className="text-lg underline">Available Credit</h2>
              <ul className="flex grow flex-col">
                {selectedCards.map((card) => (
                  <li key={card.id} className="flex justify-between">
                    <span>{card.name}</span>
                    <span>{card.credit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex mt-4">
                <p className="ml-auto border-t-2 border-black">
                  Total credit: £
                  {selectedCards.reduce(
                    (prev: number, curr: CreditCard) => (prev += curr.credit),
                    0
                  )}
                </p>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </CardsContext.Provider>
  );
}

export default App;
