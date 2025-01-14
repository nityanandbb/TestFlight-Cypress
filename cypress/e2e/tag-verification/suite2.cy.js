describe("Suite 2: Regression " + TAGS.REGRESSION, () => {

  beforeEach(() => {
      cy.log("🎯 Starting Regression Test");
       cy.visit("/");
  });

  it("Test 1: Basic regression " + TAGS.P1, () => {
    cy.log("Running P1 regression test");
  });

  it("Test 2: Flaky test " + TAGS.FLAKY, () => {
    cy.log("⚡ Running known flaky test");
  });

  it("Test 3: Skip test " + TAGS.SKIP, () => {
    cy.log("⏭️ This test should be skipped");
  });

  it("Test 4: Latest feature regression " + TAGS.LF + TAGS.P0, () => {
    if (Cypress.currentTest.title.includes(TAGS.LF)) {
      cy.log("🆕 Running new regression");
    } else {
      cy.log("Running old regression");
    }
  });
});
