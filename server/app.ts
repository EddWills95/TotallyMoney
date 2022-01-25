import express from "express";
const app = express();

import { checkEligibility } from "./src/eligibility";

app.use(express.json());

app.post("/", (req, res) => {
  // Check eligibility
  const cards = checkEligibility(req.body);

  res.status(200).json(cards);
});

export default app;
