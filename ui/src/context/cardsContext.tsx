import { createContext } from "react";
import { CreditCard } from "../types";

export interface CardContextType {
  selectedCards: CreditCard[];
  setSelectedCards: (cards: CreditCard[]) => void;
}

const CardContext = createContext<CardContextType>({
  selectedCards: [],
  setSelectedCards: () => {},
});

export default CardContext;
