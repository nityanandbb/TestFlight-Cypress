describe("Suite 3: Mixed Tags " + TAGS.SANITY, () => {
  beforeEach(() => {
      cy.log("🎯 Starting Mixed Tag Test");
       cy.visit("/");
  });

  it("Test 1: Only sanity " + TAGS.P1, () => {
    cy.log("Running sanity test");
  });

  it("Test 2: Sanity with feature " + TAGS.LF, () => {
    if (Cypress.currentTest.title.includes(TAGS.LF)) {
      cy.log("🆕 Running new sanity feature");
    } else {
      cy.log("Running old sanity feature");
    }
  });

  it("Test 3: Multiple priorities " + TAGS.P0 + TAGS.SMOKE, () => {
    cy.log("Running high priority smoke test");
  });

  it(
    "Test 4: All combined " + TAGS.P0 + TAGS.LF + TAGS.SMOKE + TAGS.SANITY,
    () => {
      cy.log("Running test with all major tags");
      if (Cypress.currentTest.title.includes(TAGS.LF)) {
        cy.log("🆕 New version");
      }
    }
  );
});
