import { useState } from "react";
import { Card } from "../components";
import { AvailableCreditCards, CreditCard } from "../types";

type Props = {
  availableCards: AvailableCreditCards;
  resetCards: () => void;
};

const CreditCardSelector = ({ availableCards, resetCards }: Props) => {
  const [selectedCards, setSelectedCards] = useState<Array<any>>([]);

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
    <div className="w-full h-full px-4 overflow-x-scroll snap-x snap-mandatory flex items-center justify-start">
      {availableCards?.map((card) => (
        <Card
          {...card}
          key={card.id}
          onSelect={handleSelect}
          selected={selectedCards.some((selected) => selected.id === card.id)}
        />
      ))}
    </div>
  );
};

export default CreditCardSelector;
