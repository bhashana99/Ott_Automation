class VastCreativePagePOM {
  setVastCreativeName(creativeName) {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[1]/div/div')
      .should("be.visible")
      .type(creativeName);
  }

  setAdUnitSize(size) {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[2]/div/div')
      .should("be.visible")
      .type(size);
  }

  selectAdManagerHosted() {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[3]/div/label[1]')
      .should("be.visible")
      .contains("Ad Manager Hosted")
      .click();
  }

  attachedVideo(videoPath) {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[4]/input').selectFile(
      `cypress/fixtures/${videoPath}`,
      {
        force: true,
      }
    );
  }

  checkVideoUploadState() {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[4]/video')
      .should("have.attr", "src")
      .and("not.be.empty")
      
  }

  getDurationInSeconds() {
    return cy
      .xpath('//*[@id="root"]/div/main/div/div[1]/div[6]/div/div/input')
      .should("be.visible")
      .invoke("val");
  }

  setDurationFieldValue(value) {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[7]/div/div').type(value);
  }

  clickAdvertiserField() {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[8]').click();
  }

  selectThirdOptionAdvertiser() {
    cy.get('[data-value="Nadun"]').should("contain", "Nadun").click();
  }

  clickSkippableVideoField() {
    cy.get("#skippable-select-id").click();
  }

  selectNonSkippable() {
    cy.get('[data-value="nonSkippable"]')
      .should("contain", "Non-skippable")
      .click();
  }

  clickClickableTypeField() {
    cy.xpath('//*[@id="select-click-through-url"]').click();
  }

  selectClickableOption() {
    cy.get('[data-value = "clickThrough"]')
      .should("contain", "Clickable")
      .click();
  }

  setClickThroughUrl(url) {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[11]/div/div').type(url);
  }

  clickSaveAndPreviewBtn() {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[12]/button[2]')
      .should("contain", "Save and preview")
      .click();
  }

  checkTableCreativeName(inputName){
    cy.xpath('//*[@id="root"]/div/main/div/div[2]/div/table/tbody/tr/td[1]')
    .should('contain',inputName)
  }

  // checkTableVideoUrl(url){
  //   cy.xpath('//*[@id="root"]/div/main/div/div[2]/div/table/tbody/tr/td[2]')
  //   .should('contain',url)
  // }

  checkTableClickThroughUrl(clickUrl){
    cy.xpath('//*[@id="root"]/div/main/div/div[2]/div/table/tbody/tr/td[4]')
    .should('contain',clickUrl)
  }

  checkTableAdUnitSize(size){
    cy.xpath('//*[@id="root"]/div/main/div/div[2]/div/table/tbody/tr/td[5]')
    .should('contain',size)
  }

 
}

export default VastCreativePagePOM;
