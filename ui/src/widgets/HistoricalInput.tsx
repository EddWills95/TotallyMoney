import { FormEventHandler, useState } from "react";
import { Button, Input } from "../components";
import { AvailableCreditCards } from "../types";

type Props = {
  setAvailableCards: (cards: AvailableCreditCards) => void;
};

const HistoricalInput = ({ setAvailableCards }: Props) => {
  const [intHash, setIntHash] = useState<string>("");

  const handleSeeOldCards = (e: any) => {
    e.preventDefault();
    // Fetch old cards
    fetch(`http://localhost:3001/${intHash}`)
      .then((r) => r.json())
      // This will also contain our intHash
      .then((data) => setAvailableCards(data.cards));
  };

  return (
    <form
      onSubmit={handleSeeOldCards}
      className="mt-12 flex flex-col gap-4 justify-center items-center"
    >
      <Input
        type="number"
        max={111}
        name="historical result"
        label="Previous Result"
        placeholder="Revisit an old result"
        value={intHash}
        onChange={({ target: { value } }) => setIntHash(value)}
      />
      <Button type="submit" disabled={!!!intHash}>
        See cards!
      </Button>
    </form>
  );
};

export default HistoricalInput;
