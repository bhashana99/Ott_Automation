/// <reference types="cypress" />

let user, urls, formData;
let durationInSeconds;

before(() => {
  cy.fixture("userInfo.json").then((userInfo) => {
    user = userInfo;
  });
  cy.fixture("pagesUrl.json").then((pageUrls) => {
    urls = pageUrls;
  });
  cy.fixture('vastData.json').then((data) => {
    formData = data;
  })

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
})


describe('Create New Vast Creative', () => {
  it('TC_OTT_VC_001', () => {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[1]/div/div').should('be.visible').type(formData.creativeName)
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[2]/div/div').should('be.visible').type(formData.adUnitSize)
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[3]/div/label[1]').should('be.visible').contains('Ad Manager Hosted').click()
  })
})