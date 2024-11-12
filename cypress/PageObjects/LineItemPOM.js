class LineItemPOM {
  clickVideoIconForCreateVideoLineItem() {
    cy.xpath('//*[@id="root"]/div/main/div/div/div[1]').click();
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


}

export default LineItemPOM;
