// cypress/e2e/firstTest.cy.js

describe("First Test Suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load homepage successfully", () => {
    // Verify URL
    cy.url().should("include", Cypress.config("baseUrl"));

    // Example assertions
    cy.get("h1").should("be.visible");
    cy.title().should("not.be.empty");
  });

  it("should have working navigation", () => {
    cy.get("nav").should("be.visible").find("a").should("have.length.gt", 0);
  });
    it('test env append url', () => {
        cy.visit('/?test')
       
    })
});
