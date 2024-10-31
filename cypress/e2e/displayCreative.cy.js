/// <reference types="cypress" />



let user, urls, formData;


before(() => {
  cy.fixture("userInfo.json").then((userInfo) => {
    user = userInfo;
  });
  cy.fixture("pagesUrl.json").then((pageUrls) => {
    urls = pageUrls;
  });
  cy.fixture("formData.json").then((data) => {
    formData = data
  })

});

//Login
beforeEach(() => {
  cy.navigateDisplayCreativePage(
    urls.loginPageUrl,
    user.username,
    user.password,
    urls.homePageUrl,
    urls.creativePageUrl,
    urls.newDisplayCreativePageUrl
  );
});


describe("Display Creative Happy path", () => {
  //Enter valid form data
  it("TC_OTT_DC_001", () => {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[1]/div/div')
      .should("be.visible")
      .type(formData.creativeName);
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[2]/div/div').click()
    cy.xpath('//*[@id="menu-"]/div[3]').should("be.visible");
    cy.get('[data-value*="uBanner web wide (980 x 551)"]').click();
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[3]/div/label[1]/span[1]')
      .should("be.visible")
      .click();
    cy.get(
      ".MuiPaper-root.MuiPaper-outlined.MuiPaper-rounded.css-1rn8j9d"
    ).attachFile("980x551@.png", { subjectType: "drag-n-drop" });

    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[5]/div[1]/div')
      .should("be.visible")
      .click();
    cy.get('li:nth-child(3)').should("be.visible").click();

    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[5]/div[2]/div[1]/div/div'
    ).click();
    cy.get(
      ".MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected.css-1km1ehz"
    ).click();

    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[5]/div[2]/div[2]/div/div'
    ).type(formData.clickThroughUrl);

    cy.get(".css-9h854s").click();

    //table
    // cy.get('table[class="MuiTable-root css-1q7lp8d"]>tbody>tr>').should('have.length','1')

    //1st column
    cy.get(".MuiTableBody-root > .MuiTableRow-root > :nth-child(1)").contains(
      formData.creativeName
    );

    //2nd column
    cy.get(".MuiTableBody-root > .MuiTableRow-root > :nth-child(2)").should(
      "be.visible"
    );

    //3rd column
    cy.get(".MuiTableBody-root > .MuiTableRow-root > :nth-child(3)").contains(
      formData.clickThroughUrl
    );

    //4th column
    // cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(4)').contains('980 x 551')

    //5th column
    cy.get(".MuiTableBody-root > .MuiTableRow-root > :nth-child(5)").contains(
      "clickThrough"
    );
  });
});
