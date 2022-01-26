import CreditCard from "../credit-card";
import { CustomerData } from "../types/customerData";

class Student extends CreditCard {
  name = "Student Life";
  apr = 18.9;
  balanceDuration = 0;
  purchaseDuration = 0;
  credit = 1200;

  static isEligible(customerData: CustomerData): boolean {
    if (customerData.employmentStatus === "Student") {
      return true;
    }

    return false;
  }
}

export default Student;
