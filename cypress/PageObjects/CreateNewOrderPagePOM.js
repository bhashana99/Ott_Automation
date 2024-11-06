class CreateNewOrderPagePOM {
  checkCreateNewOrderPageUrl(createNewOrderPageUrl) {
    cy.url().should("eq", createNewOrderPageUrl);
  }

  setOrderName(orderName) {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[1]/div/div').type(
      orderName
    );
  }

  setTrafficker(traffickerName) {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[2]/div/div').type(
      traffickerName
    );
  }

  setProduct(product) {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[3]/div/div').type(
      product
    );
  }

  clickSalesPersonDropDown() {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[4]/div/div/div')
      .should("be.visible")
      .click();
  }

  chooseSalesPersonDropDownPersonOneOption() {
    cy.get('[data-value = "sales person one"]')
      .should("be.visible")
      .and("contain", "sales person one")
      .click();
  }

  selectSalesTypeRadioFirstLabel() {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[6]/div/label[1]/span[1]/input'
    ).click();
  }

  setScheduleReference(scheduleReference) {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[7]/div/div').type(
      scheduleReference
    );
  }

  selectInvoiceTypeZero() {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[9]/div/label[2]/span[1]/input'
    ).click();
  }

  selectClientType() {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[10]/div/label[1]'
    ).click();
  }

  clickEndClientField() {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[11]/div').click();
  }

  chooseEndClientNadun() {
    cy.get('[data-value = "Nadun"]').click();
  }

  clickBillingClientField(){
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[12]/div/div/div')
    .click()
  }
}

export default CreateNewOrderPagePOM;
