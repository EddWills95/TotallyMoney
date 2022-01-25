import express from "express";
import cors from "cors";

const app = express();

import { checkEligibility } from "./src/eligibility";

app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
  // Check eligibility
  const cards = checkEligibility(req.body);

  res.status(200).json(cards);
});

export default app;
