import CreditCard from "../credit-card";
import { CustomerData } from "../types/customerData";

class Liquid extends CreditCard {
  id = "liquid";
  name = "Liquid Card";
  apr = 33.9;
  balanceDuration = 12;
  purchaseDuration = 6;
  credit = 3000;

  static isEligible(customerData: CustomerData): boolean {
    if (customerData.annualIncome > 16000) {
      return true;
    }

    return false;
  }
}

export default Liquid;
