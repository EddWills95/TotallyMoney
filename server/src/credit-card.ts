import { CustomerData } from "./types/customerData";

class CreditCard {
  name: string;
  apr: number;
  balanceDuration: number;
  purchaseDuration: number;
  credit: number;

  static isEligible(customerData: CustomerData): boolean {
    // Default to false so we don't go giving away credit cards
    return false;
  }

  cardInfo() {
    return {
      name: this.name,
      apr: this.apr,
      balanceDuration: this.balanceDuration,
      purchaseDuration: this.purchaseDuration,
      credit: this.credit,
    };
  }
}

export default CreditCard;
