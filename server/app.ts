import express from "express";
import cors from "cors";

const app = express();

import { checkEligibility } from "./src/eligibility";
import { getCardsFromHex } from "./src/historical";

app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  // Check eligibility
  const { cards, intHash } = checkEligibility(req.body);

  res.status(200).json({ cards, intHash });
});

app.get("/:cardHash", (req, res) => {
  const { cards, intHash } = getCardsFromHex(req.params.cardHash);

  res.status(200).json({ cards, intHash });
});

export default app;
