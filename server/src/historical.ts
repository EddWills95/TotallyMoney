/**
 * A util to convert a hash to available cards
 * User mainly for testing so that I don't have to go through the form everytime
 * Could also be used so that a customer can come back to their selections without
 * needing to input their data again
 *
 * 100 = Student
 * 010 = Anywhere
 * 001 = Liquid
 */

import { Anywhere, Liquid, Student } from "./cards";

export const getCardsFromHex = (intHash) => {
  const [student, anywhere, liquid] = intHash
    .toString()
    .split("")
    .map((bit) => !!+bit);

  const cards = [];

  if (student) {
    cards.push(new Student().cardInfo());
  }

  if (anywhere) {
    cards.push(new Anywhere().cardInfo());
  }

  if (liquid) {
    cards.push(new Liquid().cardInfo());
  }

  return { cards, intHash };
};
