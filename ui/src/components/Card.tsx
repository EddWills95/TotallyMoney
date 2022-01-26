import { CreditCard } from "../types";

type Props = CreditCard;

const Card = ({
  name,
  apr,
  credit,
  balanceDuration,
  purchaseDuration,
}: Props) => {
  return (
    <div className="min-w-[300px] min-h-[175px] bg-offWhite rounded-lg text-black p-4 flex flex-col justify-start items-end">
      <h3 className="text-lg font-bold right">{name}</h3>
      <p className="font-mono">XXXX XXXX XXXX XXXX</p>
      <div className="flex justify-center w-full gap-4">
        <div className="flex flex-col px-4">
          <span className="font-italic underline">APR:</span>{" "}
          <span className="font-bold">{apr}%</span>
          <span className="font-italic underline">Credit:</span>{" "}
          <span className="font-bold">£{credit}</span>
        </div>
        <div className="flex-1 flex-grow flex flex-col text-right">
          <span className="font-italic underline">Balance Transfer:</span>
          <span className="font-bold">{balanceDuration} Months</span>

          <span className="font-italic underline">Purchase Offer:</span>
          <span className="font-bold">{purchaseDuration} Months</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
