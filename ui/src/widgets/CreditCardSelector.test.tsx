import {
  act,
  fireEvent,
  getByRole,
  queryByTestId,
  render,
} from "@testing-library/react";
import CreditCardSelector from "./CreditCardSelector";
import CardContext, { CardContextType } from "../context/cardsContext";
import { ReactNode } from "react";
import { CreditCard } from "../types";

const customRender = (
  ui: ReactNode,
  {
    providerProps,
    ...renderOptions
  }: { providerProps: { value: CardContextType } }
) => {
  return render(
    <CardContext.Provider {...providerProps}>{ui}</CardContext.Provider>,
    renderOptions
  );
};

const mockCards = [
  {
    id: "test",
    name: "test-card",
    apr: 17,
    balanceDuration: 0,
    purchaseDuration: 0,
    credit: 5000,
  },
];

describe("Credit Card Selector", () => {
  it("should display the correct number of cards", () => {
    let selectedCards: CreditCard[] = [];
    const setSelectedCards = jest.fn();

    const { queryAllByTestId } = customRender(
      <CreditCardSelector availableCards={mockCards} />,
      { providerProps: { value: { selectedCards, setSelectedCards } } }
    );

    expect(queryAllByTestId("credit-card")).toHaveLength(1);
  });

  it("should update the context when cards are selected", () => {
    let selectedCards: CreditCard[] = [];
    const setSelectedCards = jest.fn();

    const { getByTestId } = customRender(
      <CreditCardSelector availableCards={mockCards} />,
      { providerProps: { value: { selectedCards, setSelectedCards } } }
    );

    act(() => {
      fireEvent.click(getByTestId("card-checkbox"));
    });

    expect(setSelectedCards).toBeCalledWith([mockCards[0]]);
  });

  it("should remove an existing card if clicked again", () => {
    let selectedCards: CreditCard[] = [mockCards[0]];
    const setSelectedCards = jest.fn();

    const { getByTestId } = customRender(
      <CreditCardSelector availableCards={mockCards} />,
      { providerProps: { value: { selectedCards, setSelectedCards } } }
    );

    act(() => {
      fireEvent.click(getByTestId("card-checkbox"));
    });

    expect(setSelectedCards).toBeCalledWith([]);
  });
});
