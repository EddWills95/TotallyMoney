import { Anywhere, Liquid, Student } from "./cards";

export const checkEligibility = (customerData) => {
  // Check each card and add to array;
  let cards = [];

  if (Anywhere.isEligible()) {
    cards.push(new Anywhere().cardInfo());
  }

  if (Student.isEligible(customerData)) {
    cards.push(new Student().cardInfo());
  }

  if (Liquid.isEligible(customerData)) {
    cards.push(new Liquid().cardInfo());
  }

  return cards;
};
