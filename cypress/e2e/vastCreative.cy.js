/// <reference types="cypress" />

describe('Create New Vast Creative',()=>{
    //Login
    beforeEach(()=>{
        cy.visit("https://clarke-admanager-stg.testlogdia.lk");
        cy.get("#username").type("hiranga@vclhq.com");
        cy.get("#password").type("!!!Woofy123");
        cy.get("#kc-login").click();
        cy.url().should("eq", "https://clarke-admanager-stg.testlogdia.lk/");
    
        cy.xpath('//*[@id="root"]/div/nav/div/div/ul/div[2]/div[2]/p')
          .should("contain", "Delivery")
          .click();

        cy.xpath(
          '//*[@id="root"]/div/nav/div/div/ul/div[3]/div/div/ul/a[2]'
        ).click();
        
        cy.url().should(
          "eq",
          "https://clarke-admanager-stg.testlogdia.lk/delivery/creative"
        );

        cy.get('#simple-tab-1').should('be.visible'); 
    
    })
})