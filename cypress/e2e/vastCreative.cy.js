/// <reference types="cypress" />

let user, urls, formData;
let durationInSeconds;

Cypress.on("uncaught:exception", (err, runnable) => {
  console.error(err);
  return false;
});

before(() => {
  cy.fixture("userInfo.json").then((userInfo) => {
    user = userInfo;
  });
  cy.fixture("pagesUrl.json").then((pageUrls) => {
    urls = pageUrls;
  });
  cy.fixture("vastData.json").then((data) => {
    formData = data;
  });
});

//login
beforeEach(() => {
  cy.navigateVastCreativePage(
    urls.loginPageUrl,
    user.username,
    user.password,
    urls.homePageUrl,
    urls.creativePageUrl,
    urls.vastCreativePageUrl
  );
});

describe("Create New Vast Creative", () => {
  it("Happy Path", () => {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[1]/div/div')
      .should("be.visible")
      .type(formData.creativeName);
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[2]/div/div')
      .should("be.visible")
      .type(formData.adUnitSize);
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[3]/div/label[1]')
      .should("be.visible")
      .contains("Ad Manager Hosted")
      .click();

    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[4]/input')
    .selectFile(
      'cypress/fixtures/BOMBA.mp4',
      {
       
        force: true
      }
    );
    cy.wait(2000);
   
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[4]/video')
    .should(
      "have.attr",
      "src"
    ).and('not.be.empty')


    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[6]/div/div')
    .then(($value)=>{
      durationInSeconds = $value.text().trim();
      cy.log(`${durationInSeconds}`)
    })
  });
});
