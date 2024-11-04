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
      .and("not.be.empty");
  }

  //   selectDurationInSecondsField(){
  //    return cy.xpath('*[@id="root"]/div/main/div/div[1]/div[6]/div/div')

  //   }

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
}

export default VastCreativePagePOM;
