import { useContext, useState } from "react";
import { Card } from "../components";
import CardContext from "../context/cardsContext";
import { AvailableCreditCards, CreditCard } from "../types";

type Props = {
  availableCards: AvailableCreditCards;
};

const CreditCardSelector = ({ availableCards, ...rest }: Props) => {
  const { selectedCards, setSelectedCards } = useContext(CardContext);

  const handleSelect = (card: CreditCard) => {
    if (selectedCards.some((selected) => selected.id === card.id)) {
      setSelectedCards([
        ...selectedCards.filter((selected) => selected.id !== card.id),
      ]);
      return;
    }
    setSelectedCards([...selectedCards, card]);
  };

  if (!availableCards?.length) {
    return <p>We cannot find any sutible cards for you right now</p>;
  }

  return (
    <div
      data-testid="card-selector"
      className="w-full h-full px-4 sm:px-40 sm:w-8/12 overflow-x-scroll snap-x snap-mandatory flex flex-grow items-center justify-start"
    >
      {availableCards?.map((card) => (
        <Card
          {...card}
          data-testid="credit-card"
          key={card.id}
          onSelect={handleSelect}
          selected={selectedCards.some((selected) => selected.id === card.id)}
        />
      ))}
    </div>
  );
};

export default CreditCardSelector;
