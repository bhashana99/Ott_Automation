class LineItemPOM {
  clickVideoIconForCreateVideoLineItem() {
    cy.xpath('//*[@id="root"]/div/main/div/div/div[1]').click();
  }

  clickUIBannerForCreateLineItem() {
    cy.xpath('//*[@id="root"]/div/main/div/div/div[2]/button').click();
  }
  validateIsLineItemPage() {
    cy.xpath('//*[@id="root"]/div/main/div/div/h5').should(
      "contain",
      "New Line Item"
    );
  }
  setLineItemName(lineItemName) {
    cy.xpath('//*[@id="root"]/div/main/div/div/div[1]/div[1]/div/div').type(
      lineItemName
    );
  }

  setTrafficker(trafficker) {
    cy.xpath('//*[@id="root"]/div/main/div/div/div[1]/div[2]/div/div').type(
      trafficker
    );
  }

  chooseFirstUrlFromTable() {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div/div[2]/div/div/table/tbody/tr/td[8]/button'
    ).click();

    // cy.xpath(
    //   '//*[@id="root"]/div/main/div/div/div[2]/div/div/table/tbody/tr/td[3]'
    // )
    //   .invoke("text")
    //   .then((tableUrl) => {
    //     cy.log(`URL: ${tableUrl}`);
    //   });
  }

  chooseFirstUrlWhenHaveMultipleUrl() {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div/div[2]/div/div/table/tbody/tr[1]/td[8]/button'
    ).click();
  }

  setTargetImpression(targetImpression) {
    cy.xpath('//*[@id="root"]/div/main/div/div/div[1]/div[5]/div/div')
      .click()
      .type(targetImpression);
  }

  setCPM(cpm) {
    cy.xpath('//*[@id="root"]/div/main/div/div/div[1]/div[6]/div/div')
      .click()
      .type(cpm);
  }

  setTargetClicks(targetClicks) {
    cy.xpath('//*[@id="root"]/div/main/div/div/div[1]/div[8]/div/div')
      .click()
      .type(targetClicks);
  }

  setCPC(cpc) {
    cy.xpath('//*[@id="root"]/div/main/div/div/div[1]/div[9]/div/div')
      .click()
      .type(cpc);
  }

  setStartMonth(startMonth) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div/div[1]/div[11]/div/div/div/input[2]'
    ).type(startMonth);
  }

  setStartDay(startDay) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div/div[1]/div[11]/div/div/div/input[3]'
    ).type(startDay);
  }

  setStartYear(StartYear) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div/div[1]/div[11]/div/div/div/input[4]'
    ).type(StartYear);
  }

  clickOutside() {
    cy.xpath('//*[@id="root"]/div/main/div/div/div[1]/div[10]').click();
  }

  setStartHours(startHours) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div/div[1]/div[11]/div/div/div/input[5]'
    ).type(startHours);
  }

  setStartMinutes(startMinutes) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div/div[1]/div[11]/div/div/div/input[6]'
    ).type(startMinutes);
  }

  setEndMonth(endMonth) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div/div[1]/div[13]/div/div/div/input[2]'
    ).type(endMonth);
  }

  setEndDay(endDay) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div/div[1]/div[13]/div/div/div/input[3]'
    ).type(endDay);
  }

  setEndYear(endYear) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div/div[1]/div[13]/div/div/div/input[4]'
    ).type(endYear);
  }

  setEndHours(endHours) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div/div[1]/div[13]/div/div/div/input[5]'
    ).type(endHours);
  }

  setEndMinutes(endMinutes) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div/div[1]/div[13]/div/div/div/input[6]'
    ).type(endMinutes);
  }

  clickPriorityField() {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div/div[1]/div[14]/div[1]/div'
    ).click();
  }

  chooseMediumPriority() {
    cy.get('[data-value = "medium-priority"]').click();
  }
  chooseHighPriority() {
    cy.get('[data-value = "high-priority"]').click();
  }

  chooseLowPriority() {
    cy.get('[data-value = "low-priority"]').click();
  }

  clickSubmitBtn() {
    cy.xpath('//*[@id="root"]/div/main/div/div/button[3]')
      .should("contain", "Submit")
      .click();
  }

  validateLineItemIsCreateSuccessful() {
    cy.xpath("/html/body/div[2]/div[3]/div")
      .should("be.visible")
      .and("contain", "Success");
    cy.xpath("/html/body/div[2]/div[3]/div/div[1]").should(
      "contain",
      "Data has been successfully saved."
    );
  }

  clickCloseBtn() {
    cy.xpath("/html/body/div[2]/div[3]/div/div[2]/button")
      .should("contain", "Close")
      .click();
  }

  storeLineID(){
    cy.xpath('//*[@id="enhanced-table-checkbox-0"]')
    .invoke('text').then((lineID) => {
          cy.log(`Line ID: ${lineID}`);
        });
  }

  

}

export default LineItemPOM;
