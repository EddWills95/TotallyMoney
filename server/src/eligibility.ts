import { Anywhere, Liquid, Student } from "./cards";
import { numberToHash } from "./utils";

export const checkEligibility = (customerData) => {
  // Check each card and add to array;
  let cards = [];
  let intHash = 0;

  if (Anywhere.isEligible()) {
    cards.push(new Anywhere().cardInfo());
    intHash += 100;
  }

  if (Student.isEligible(customerData)) {
    cards.push(new Student().cardInfo());
    intHash += 10;
  }

  if (Liquid.isEligible(customerData)) {
    cards.push(new Liquid().cardInfo());
    intHash += 1;
  }

  return { cards, intHash };
};
