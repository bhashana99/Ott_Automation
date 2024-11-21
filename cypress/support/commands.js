import "cypress-file-upload";
import LoginPagePOM from "../PageObjects/LoginPagePOM.js";
import HomePagePOM from "../PageObjects/HomePagePOM.js";

const login = new LoginPagePOM();
const home = new HomePagePOM();

Cypress.Commands.add("loginPageNavigate", () => {
  cy.visit("https://clarke-admanager-stg.testlogdia.lk");
});

Cypress.Commands.add(
  "navigateCreativePage",
  (loginPageUrl, username, password, homePageUrl, creativePageUrl) => {
    cy.loginToHomePage(loginPageUrl, username, password, homePageUrl);

    home.clickDeliveryDropDown();
    home.clickDeliveryDropDownCreativeElement();
    cy.url().should("eq", creativePageUrl);
  }
);

Cypress.Commands.add(
  "navigateDisplayCreativePage",
  (
    loginPageUrl,
    username,
    password,
    homePageUrl,
    creativePageUrl,
    newDisplayCreativePageUrl
  ) => {
    cy.navigateCreativePage(
      loginPageUrl,
      username,
      password,
      homePageUrl,
      creativePageUrl
    );

    home.clickDisplayCreativeNav();
    cy.url().should("eq", creativePageUrl);
    home.clickDisplayCreativeBtn();
    cy.url().should("eq", newDisplayCreativePageUrl);
  }
);

Cypress.Commands.add(
  "navigateVastCreativePage",
  (
    loginPageUrl,
    username,
    password,
    homePageUrl,
    creativePageUrl,
    vastCreativePageUrl
  ) => {
    cy.navigateCreativePage(
      loginPageUrl,
      username,
      password,
      homePageUrl,
      creativePageUrl
    );

    home.clickVastCreativeNav();
    cy.url().should("eq", creativePageUrl);
    home.clickVastCreativeBtn();
    cy.url().should("eq", vastCreativePageUrl);
  }
);

Cypress.Commands.add(
  "loginToHomePage",
  (loginPageUrl, username, password, homePageUrl) => {
    cy.visit(loginPageUrl);

    login.setUsername(username);
    login.setPassword(password);
    login.clickLoginButton();
    cy.url().should("eq", homePageUrl);
  }
);
