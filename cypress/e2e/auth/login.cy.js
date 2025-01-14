// cypress/e2e/auth/login.cy.js
describe("Login Functionality " + TAGS.SMOKE + TAGS.SANITY, () => {
  // Suite-level hooks
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should login with valid credentials " + TAGS.P0 + TAGS.LF, () => {
    if (Cypress.currentTest.title.includes(TAGS.LF)) {
      cy.log("🆕 Testing new login UI");
      // New login implementation
    } else {
      cy.log("Testing existing login");
      // Existing login implementation
    }
  });

  it("should show validation for empty fields " + TAGS.P1, () => {
    cy.get("#login-btn").click();
    cy.get(".error-message").should("be.visible");
  });

  it("should handle incorrect credentials " + TAGS.P1 + TAGS.REGRESSION, () => {
    cy.get("#username").type("wrong");
    cy.get("#password").type("wrong");
    cy.get("#login-btn").click();
  });

  it("should allow password reset " + TAGS.P2 + TAGS.LF, () => {
    if (Cypress.currentTest.title.includes(TAGS.LF)) {
      cy.log("🆕 Testing new password reset flow");
    } else {
      cy.log("Testing existing reset flow");
    }
  });
});
