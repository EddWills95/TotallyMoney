import { createContext } from "react";
import { CreditCard } from "../types";

interface CardContextType {
  selectedCards: CreditCard[];
  setSelectedCards: (cards: CreditCard[]) => void;
}

const CardContext = createContext<CardContextType>({
  selectedCards: [],
  setSelectedCards: () => {},
});

export default CardContext;
