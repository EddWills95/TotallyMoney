import { createContext } from "react";
import { CreditCard } from "../types";

interface CardContextType {
  selectedCards: Array<CreditCard> | undefined;
}

const CardContext = createContext<CardContextType | null>(null);

export default CardContext;
