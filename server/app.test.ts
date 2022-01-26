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
        expect(response.body.cards).toContainEqual(anywhereCardInfo);
      }
    });
  });

  describe("Student Life", () => {
    it("should return for those with student employment status", async () => {
      const response = await request(server).post("/").send(student);
      expect(response.body.cards).toContainEqual(studentCardInfo);
    });

    it("should not return for those with full time employment", async () => {
      const response = await request(server).post("/").send(fullTime);
      expect(response.body.cards).not.toContainEqual(studentCardInfo);
    });

    it("should not return for those with part time employment", async () => {
      const response = await request(server).post("/").send(partTime);
      expect(response.body.cards).not.toContainEqual(studentCardInfo);
    });
  });

  describe("Liquid Card", () => {
    it("should return for those with an imcome greater than 16000 per year", async () => {
      const eligible = [fullTime, student];

      for (let customer of eligible) {
        const response = await request(server).post("/").send(customer);
        expect(response.body.cards).toContainEqual(liquidCardInfo);
      }
    });

    it("should not return for those with an income less than 16000", async () => {
      const response = await request(server).post("/").send(partTime);
      expect(response.body.cards).not.toContainEqual(liquidCardInfo);
    });
  });

  describe("intHash", () => {
    it("should return an int hash based on the cards available", async () => {
      const response = await request(server).post("/").send(student);
      expect(response.body.intHash).toEqual(111);
    });

    it("should return student card with: 100", async () => {
      const response = await request(server).get("/100").send(student);
      expect(response.body.cards).toContainEqual(studentCardInfo);
    });

    it("should return anywhere card with: 100", async () => {
      const response = await request(server).get("/010").send(student);
      expect(response.body.cards).toContainEqual(anywhereCardInfo);
    });

    it("should return student card with: 100", async () => {
      const response = await request(server).get("/001").send(student);
      expect(response.body.cards).toContainEqual(liquidCardInfo);
    });
  });
});
