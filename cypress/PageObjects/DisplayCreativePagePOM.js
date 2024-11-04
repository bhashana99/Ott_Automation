class DisplayCreativePagePOM {
  setCreativeName(creativeName) {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[1]/div/div')
      .should("be.visible")
      .type(creativeName);
  }

  clickBannerSizeField() {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[2]/div/div').click();
  }

  checkBannerSizeOptionsIsVisibility() {
    cy.xpath('//*[@id="menu-"]/div[3]').should("be.visible");
  }

  selectBannerSize() {
    cy.get('[data-value*="uBanner web wide (980 x 551)"]').click();
  }

  selectHostType() {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[3]/div/label[1]/span[1]')
      .should("be.visible")
      .click();
  }

  uploadImage(imagePath) {
    cy.get(
      ".MuiPaper-root.MuiPaper-outlined.MuiPaper-rounded.css-1rn8j9d"
    ).attachFile(imagePath, { subjectType: "drag-n-drop" });
  }

  clickAdvertiserField() {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[5]/div[1]/div')
      .should("be.visible")
      .click();
  }

  selectThirdOptionAdvertiserField() {
    cy.get("li:nth-child(3)").should("be.visible").click();
  }

  clickClickableTypeField() {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[5]/div[2]/div[1]/div/div'
    ).click();
  }

  chooseClickableOption() {
    cy.get(".Mui-selected").click();
  }

  setClickThroughUrl(url) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[5]/div[2]/div[2]/div/div'
    ).type(url);
  }

  clickSaveAndPreviewBtn() {
    cy.get(".css-9h854s")
      .should("be.visible")
      .contains("Save and preview")
      .click();
  }

  checkFirstColumn(creativeName) {
    cy.get(".MuiTableBody-root > .MuiTableRow-root > :nth-child(1)").contains(
      creativeName
    );
  }

  checkSecondColumn() {
    cy.get(".MuiTableBody-root > .MuiTableRow-root > :nth-child(2)").should(
      "be.visible"
    );
  }

  checkThirdColumn(clickThroughUrl) {
    cy.get(".MuiTableBody-root > .MuiTableRow-root > :nth-child(3)").contains(
      clickThroughUrl
    );
  }

  checkFifthColumn() {
    cy.get(".MuiTableBody-root > .MuiTableRow-root > :nth-child(5)").contains(
      "clickThrough"
    );
  }
}

export default DisplayCreativePagePOM;
