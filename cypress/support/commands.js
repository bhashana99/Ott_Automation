// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add("loginPageNavigate", () => {
  cy.visit("https://clarke-admanager-stg.testlogdia.lk");
});

Cypress.Commands.add(
  "navigateCreativePage",
  (loginPageUrl, username, password, homePageUrl, creativePageUrl) => {
    cy.visit(loginPageUrl);
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("#kc-login").click();
    cy.url().should("eq", homePageUrl);
    cy.xpath('//*[@id="root"]/div/nav/div/div/ul/div[2]/div[2]/p')
      .contains("Delivery")
      .click();
    cy.xpath(
      '//*[@id="root"]/div/nav/div/div/ul/div[3]/div/div/ul/a[1]'
    ).click();
    cy.url().should("eq", creativePageUrl);
  }
);

Cypress.Commands.add(
  "navigateDisplayCreativePage",
  (loginPageUrl, username, password, homePageUrl, creativePageUrl, newDisplayCreativePageUrl) => {
    cy.navigateCreativePage(
      loginPageUrl,
      username,
      password,
      homePageUrl,
      creativePageUrl,

    );

    cy.xpath('//*[@id="simple-tab-0"]').should('be.visible').contains('Display creative')
    cy.url().should('eq', creativePageUrl)
    cy.xpath(
      '//*[@id="simple-tabpanel-0"]/div/div/div/div[1]/button[1]'
    ).contains('NEW Display Creative').click();

    cy.url().should("eq", newDisplayCreativePageUrl);
  }
);

Cypress.Commands.add(
  "navigateVastCreativePage",
  (loginPageUrl, username, password, homePageUrl, creativePageUrl, vastCreativePageUrl) => {
    cy.navigateCreativePage(
      loginPageUrl,
      username,
      password,
      homePageUrl,
      creativePageUrl,
    );

    cy.xpath('//*[@id="simple-tab-1"]').should('be.visible').contains('VAST creative').click()
    cy.url().should('eq', creativePageUrl)
    cy.get('.MuiButton-contained').contains('New VAST Creative').click()
    cy.url().should("eq", vastCreativePageUrl);
  }
)

