let data;

before(() => {
  cy.fixture("../fixtures/JsonData/loginData.json").then((loginData) => {
    data = loginData;
  });
});

beforeEach(() => {
  cy.loginPageNavigate();
});

describe("Success Test Login Suite", () => {
  // Enter valid username & Password
  it("TC_OTT_Login_001", () => {
    cy.get("#username").type(data.validUsername);
    cy.get("#password").type(data.validPassword);
    cy.get("#kc-login").click();

    cy.url().should("eq", data.navigateUrl);
  });

  // Enter valid username & invalid Password
  it("TC_OTT_Login_002", () => {
    cy.get("#username").type(data.validUsername);
    cy.get("#password").type(data.invalidPassword);
    cy.get("#kc-login").click();

    cy.get("#input-error").should("be.visible").contains(data.errorMessage);
  });

  // Enter invalid username & valid Password
  it("TC_OTT_Login_003", () => {
    cy.get("#username").type(data.invalidUsername);
    cy.get("#password").type(data.validPassword);
    cy.get("#kc-login").click();

    cy.get("#input-error").should("be.visible").contains(data.errorMessage);
  });

  // Enter invalid username & invalid Password
  it("TC_OTT_Login_004", () => {
    cy.get("#username").type(data.invalidUsername);
    cy.get("#password").type(data.invalidPassword);
    cy.get("#kc-login").click();

    cy.get("#input-error").should("be.visible").contains(data.errorMessage);
  });

  //Leave username field blank & enter valid password
  it("TC_OTT_Login_005", () => {
    cy.get("#username").should("be.empty");
    cy.get("#password").type(data.validPassword);
    cy.get("#kc-login").click();

    cy.get("#input-error").should("be.visible").contains(data.errorMessage);
  });

  // Enter valid username & Leave password field blank
  it("TC_OTT_Login_006", () => {
    cy.get("#username").type(data.validUsername);
    cy.get("#password").should("be.empty");

    cy.get("#kc-login").click();

    cy.get("#input-error").should("be.visible").contains(data.errorMessage);
  });

  // Leave username field & password field blank
  it("TC_OTT_Login_007", () => {
    cy.get("#username").should("be.empty");
    cy.get("#password").should("be.empty");

    cy.get("#kc-login").click();

    cy.get("#input-error").should("be.visible").contains(data.errorMessage);
  });

  //Enter invalid username & Leave password field blank
  it("TC_OTT_Login_008", () => {
    cy.get("#username").type(data.invalidUsername);
    cy.get("#password").should("be.empty");

    cy.get("#kc-login").click();

    cy.get("#input-error").should("be.visible").contains(data.errorMessage);
  });

  // Leave username field blank & enter invalid password
  it("TC_OTT_Login_009", () => {
    cy.get("#username").should("be.empty");
    cy.get("#password").type(data.invalidPassword);
    cy.get("#kc-login").click();

    cy.get("#input-error").should("be.visible").contains(data.errorMessage);
  });
});
