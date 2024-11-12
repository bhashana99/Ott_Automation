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
}

export default LineItemPOM;
