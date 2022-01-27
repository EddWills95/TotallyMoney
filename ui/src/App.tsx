import React, { useState } from "react";
import { AvailableCreditCards, CreditCard, FormData } from "./types";
import { FormInput, CreditCardSelector, HistoricalInput } from "./widgets";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { CardsContext, ErrorContext } from "./context";

import "./styles/App.css";

function App() {
  const [availableCards, setAvailableCards] =
    useState<AvailableCreditCards>(undefined);

  const [selectedCards, setSelectedCards] = useState<CreditCard[]>([]);
  const [error, setError] = useState<boolean>(false);

  const resetCards = () => {
    setAvailableCards(undefined);
    setSelectedCards([]);
  };

  const handleSubmit = (formData: FormData) => {
    return (
      fetch("http://localhost:3001", {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        // This will also contain our intHash
        .then((data) => {
          setAvailableCards(data.cards);
        })
        .catch((err) => {
          setError(true);
        })
    );
  };

  return (
    <CardsContext.Provider value={{ selectedCards, setSelectedCards }}>
      <ErrorContext.Provider value={{ error, setError }}>
        {error && (
          <div
            className="fixed top-0 w-10/12 my-0 mx-auto p-4 rounded-b-md bg-red-500 text-white flex justify-center items-center hover:cursor-pointer"
            onClick={() => setError(false)}
          >
            <span>Something went wrong</span>
          </div>
        )}
        <div className="flex flex-col min-h-screen p-8 py-10 items-center justify-center text-white bg-mirage">
          <SwitchTransition>
            <CSSTransition
              key={
                availableCards?.length ? "credit-card-selector" : "form-input"
              }
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              classNames="fade"
            >
              {!!availableCards?.length ? (
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
                    data-testid="card-selector"
                    availableCards={availableCards}
                  />
                </>
              ) : (
                <div>
                  <FormInput data-testid="form-input" onSubmit={handleSubmit} />
                  <HistoricalInput setAvailableCards={setAvailableCards} />
                </div>
              )}
            </CSSTransition>
          </SwitchTransition>

          <CSSTransition
            key="total-credit"
            in={!!selectedCards.length}
            timeout={1000}
            classNames="slide-up"
          >
            <div className="fixed rounded-lg p-4 bottom-0 bg-offWhite transition-transform z-20 w-full h-auto text-black flex flex-col justify-between translate-y-full md:w-6/12">
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
          </CSSTransition>
        </div>
      </ErrorContext.Provider>
    </CardsContext.Provider>
  );
}

export default App;
