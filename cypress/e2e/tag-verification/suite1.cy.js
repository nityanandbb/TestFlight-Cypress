 // describe("Suite 1: Basic Tags " + TAGS.SMOKE + TAGS.SANITY, () => {
  describe("Suite 1: Basic Tags ", () => {
  beforeEach(() => {
    cy.log("🎯 Starting Test");
    cy.visit('/')
  });

  it("Test 1: Sanity Basic smoke test @smoke @sanity " + TAGS.SANITY, () => {
    cy.log("Running smoke test");
  });

  it("Test 2: Priority test  @sanity " + TAGS.P0, () => {
    cy.log("Running P0 test");
  });

  it("Test 3: Latest feature test " + TAGS.LF, () => {
    if (Cypress.currentTest.title.includes(TAGS.LF)) {
      cy.log("🆕 Running new feature");
    } else {
      cy.log("Running old feature");
    }
  });

  it("Test 4: Combined tags " + TAGS.P0 + TAGS.LF + TAGS.SMOKE, () => {
    cy.log("Running test with multiple tags");
    if (Cypress.currentTest.title.includes(TAGS.LF)) {
      cy.log("🆕 New version running");
    }
  });
});
