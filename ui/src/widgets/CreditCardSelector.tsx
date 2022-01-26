import { Card } from "../components";
import { AvailableCreditCards } from "../types";

type Props = {
  availableCards: AvailableCreditCards;
  resetCards: () => void;
};

const CreditCardSelector = ({ availableCards, resetCards }: Props) => {
  return (
    <div className="relative h-full w-full">
      <svg
        onClick={resetCards}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 absolute top-4 left-0 hover:cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>

      <div className="max-h-screen w-full h-full overflow-y-auto flex flex-col items-center justify-center snap-x gap-8 md:flex-row md:flex-wrap">
        {availableCards?.length ? (
          <>
            {availableCards.map((card) => (
              <Card {...card} />
            ))}
          </>
        ) : (
          <p>We cannot find any sutible cards for you right now</p>
        )}
      </div>
    </div>
  );
};

export default CreditCardSelector;
