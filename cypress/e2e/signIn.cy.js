
describe("Success Test Login Suite", () => {
  beforeEach(() => {
    cy.visit("https://clarke-admanager-stg.testlogdia.lk");
  });

  // Enter valid username & Password
  it("TC_OTT_Login_001", () => {
    cy.get("#username").type("hiranga@vclhq.com");
    cy.get("#password").type("!!!Woofy123");
    cy.get("#kc-login").click();

    cy.url().should("eq", "https://clarke-admanager-stg.testlogdia.lk/");
  });

  // Enter valid username & invalid Password
  it("TC_OTT_Login_002", () => {
    cy.get("#username").type("hiranga@vclhq.com");
    cy.get("#password").type("!!!Woofy12345");
    cy.get("#kc-login").click();

    cy.get("#input-error")
      .should("be.visible")
      .contains("Invalid username or password.");
  });


    // Enter invalid username & valid Password
    it("TC_OTT_Login_003", () => {
      cy.get("#username").type("hiranga1@vclhq.com");
      cy.get("#password").type("!!!Woofy123");
      cy.get("#kc-login").click();
  
      cy.get("#input-error")
        .should("be.visible")
        .contains("Invalid username or password.");
    });

    // Enter invalid username & invalid Password
    it("TC_OTT_Login_004", () => {
      cy.get("#username").type("hiranga1@vclhq.com");
      cy.get("#password").type("!!!Woofy12345");
      cy.get("#kc-login").click();
  
      cy.get("#input-error")
        .should("be.visible")
        .contains("Invalid username or password.");
    });

    //Leave username field blank & enter valid password 
    it("TC_OTT_Login_005", () => {
      cy.get("#username").should("be.empty");
      cy.get("#password").type("!!!Woofy12345");
      cy.get("#kc-login").click();
  
      

      cy.get("#input-error")
        .should("be.visible")
        .contains("Invalid username or password.");
    });
});
