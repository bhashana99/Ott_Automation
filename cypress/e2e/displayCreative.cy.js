/// <reference types="cypress" />

describe("Display Creative Happy path", () => {
  //Login
  beforeEach(() => {
    cy.visit("https://clarke-admanager-stg.testlogdia.lk");
    cy.get("#username").type("hiranga@vclhq.com");
    cy.get("#password").type("!!!Woofy123");
    cy.get("#kc-login").click();
    cy.url().should("eq", "https://clarke-admanager-stg.testlogdia.lk/");

    cy.xpath('//*[@id="root"]/div/nav/div/div/ul/div[2]/div[2]/p')
      .should("contain", "Delivery")
      .click();
    cy.xpath(
      '//*[@id="root"]/div/nav/div/div/ul/div[3]/div/div/ul/a[1]'
    ).click();
    cy.url().should(
      "eq",
      "https://clarke-admanager-stg.testlogdia.lk/delivery/creative"
    );

    cy.xpath(
      '//*[@id="simple-tabpanel-0"]/div/div/div/div[1]/button[1]'
    ).click();
    cy.url().should(
      "eq",
      "https://clarke-admanager-stg.testlogdia.lk/NewDisplayCreative"
    );
  });

//Enter valid form data
  it("TC_OTT_DC_001",()=>{
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[1]/div/div').should('be.visible').type('Creative name')
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[2]/div/div/div').click();
  })
});
