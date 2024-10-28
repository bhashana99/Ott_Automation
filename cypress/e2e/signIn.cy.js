/// <reference types="cypress" />

describe("Success Test Login Suite", () => {
  beforeEach(() => {
    cy.visit("https://clarke-admanager-stg.testlogdia.lk");
  });

  it("TC_OTT_Login_001", () => {
    cy.get("#username").type("hiranga@vclhq.com");
    cy.get("#password").type("!!!Woofy123");
    cy.get('#kc-login').click();

    cy.url().should("eq","https://clarke-admanager-stg.testlogdia.lk/")
  });
});
