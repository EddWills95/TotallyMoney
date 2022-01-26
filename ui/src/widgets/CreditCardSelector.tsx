import { Card } from "../components";
import { AvailableCreditCards } from "../types";

type Props = {
  availableCards: AvailableCreditCards;
};

const CreditCardSelector = ({ availableCards }: Props) => {
  return (
    <div className="max-h-screen w-full overflow-y-auto flex flex-col items-center justify-center">
      {availableCards ? (
        <>
          {availableCards.map((card) => (
            <Card {...card} />
          ))}
        </>
      ) : (
        <p>:(</p>
      )}
    </div>
  );
};

export default CreditCardSelector;
