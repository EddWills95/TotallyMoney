// const CreditCard = require("../credit-card");
import CreditCard from "../credit-card";

class Anywhere extends CreditCard {
  id = "anywhere";
  name = "Anywhere Card";
  apr = 33.9;
  balanceDuration = 0;
  purchaseDuration = 0;
  credit = 300;

  static isEligible(): boolean {
    return true;
  }
}

export default Anywhere;
