import { helloWorld } from "@dashboard/strings";

describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
  it("does not say helloWorld", () => {
    cy.visit("https://example.cypress.io");
    cy.get("h1").should("not.have.text", helloWorld);
  });
});
