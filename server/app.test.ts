import request from "supertest";
import server from "./app";
import { Anywhere, Student, Liquid } from "./src/cards";

const customers = require("../mock-customers.json").customers;
const fullTime = customers[0];
const student = customers[1];
const partTime = customers[2];

const anywhereCardInfo = new Anywhere().cardInfo();
const studentCardInfo = new Student().cardInfo();
const liquidCardInfo = new Liquid().cardInfo();

describe("TotallyMoney Credit Card Server", () => {
  describe("Anywhere Card", () => {
    it("should return for all customers", async () => {
      // Loop through all mock customers
      for (const customer of customers) {
        const response = await request(server).post("/").send(customer);
        expect(response.body).toContainEqual(anywhereCardInfo);
      }
    });
  });

  describe("Student Life", () => {
    it("should return for those with student employment status", async () => {
      const response = await request(server).post("/").send(student);
      expect(response.body).toContainEqual(studentCardInfo);
    });

    it("should not return for those with full time employment", async () => {
      const response = await request(server).post("/").send(fullTime);
      expect(response.body).not.toContainEqual(studentCardInfo);
    });

    it("should not return for those with part time employment", async () => {
      const response = await request(server).post("/").send(partTime);
      expect(response.body).not.toContainEqual(studentCardInfo);
    });
  });

  describe("Liquid Card", () => {
    it("should return for those with an imcome greater than 16000 per year", async () => {
      const eligible = [fullTime, student];

      for (let customer of eligible) {
        const response = await request(server).post("/").send(customer);
        expect(response.body).toContainEqual(liquidCardInfo);
      }
    });

    it("should not return for those with an income less than 16000", async () => {
      const response = await request(server).post("/").send(partTime);
      expect(response.body).not.toContainEqual(liquidCardInfo);
    });
  });
});
