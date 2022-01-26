import { useState } from "react";
import { CreditCard } from "../types";

import classNames from "classnames";

type Props = CreditCard;

const Card = ({
  id,
  name,
  apr,
  credit,
  balanceDuration,
  purchaseDuration,
}: Props) => {
  const gradientBackground: string = id + "-gradient";

  const [grow, setGrow] = useState(false);

  return (
    <div className="relative p-4 z-10">
      <div
        className={`snap-center relative min-w-[300px] min-h-[175px] bg-offWhite rounded-lg p-4 flex flex-col justify-start items-end ${gradientBackground} text-gray-100 z-10`}
      >
        <h3 className="text-lg font-bold right">{name}</h3>
        <p className="font-mono">XXXX XXXX XXXX XXXX</p>
        <div className="flex mt-4 justify-center w-full gap-4 overflow-hidden">
          <div className="flex flex-col px-4">
            <span className="font-italic underline">APR:</span>{" "}
            <span className="font-bold">{apr}%</span>
          </div>
          <div className="flex flex-col px-4">
            <span className="font-italic underline">Credit:</span>{" "}
            <span className="font-bold">£{credit}</span>
          </div>
        </div>

        <div
          className={classNames(
            "w-full",
            "mt-4",
            "flex",
            "justify-center",
            "align-middle",
            "duration-500",
            "hover:cursor-pointer",
            { "rotate-180": grow }
          )}
        >
          <svg
            onClick={() => setGrow(!grow)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div
        className={classNames(
          "relative",
          "left-0",
          "bottom-20",
          "w-full",
          "h-20",
          "py-4",
          "px-4",
          "align-middle",
          "bg-offWhite",
          "rounded-lg",
          "text-black",
          "-z-50",
          "transition-transform",
          { "translate-y-[65px]": grow }
        )}
      >
        <div className="flex flex-row gap-2 justify-between">
          <div className="flex flex-col">
            <span className="font-italic underline">Balance Transfer:</span>
            <span className="font-bold">{balanceDuration} Months</span>
          </div>
          <div className="flex flex-col">
            <span className="font-italic underline">Purchase Offer:</span>
            <span className="font-bold">{purchaseDuration} Months</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
