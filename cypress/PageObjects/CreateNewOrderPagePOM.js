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

  clickBillingClientField() {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[12]/div/div/div').click();
  }
  chooseBillingClientTestClientOne() {
    cy.get('ul[role="listbox"]').find("li").first().click();
  }

  clickAgencyFiled() {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[13]/div/div/div').click();
  }

  chooseAgencyFiledFirstOption() {
    cy.get('[aria-labelledby="agency-label"]').find("li").first().click();
  }

  clickMonthField() {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[14]/div/div').click();
  }

  selectMonth(monthIndex) {
    cy.get('[aria-labelledby="month-label"]').find("li").eq(monthIndex).click();
  }

  setBudget(budget) {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[15]/div/div').type(
      budget
    );
  }

  setImpression(impression) {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[16]/div/div').type(
      impression
    );
  }

  setStartMonth(startMonth) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[18]/div/div/div/input[2]'
    ).type(startMonth);
  }
  setStartDay(StartDay) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[18]/div/div/div/input[3]'
    ).type(StartDay);
  }

  setStartYear(StartYear) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[18]/div/div/div/input[4]'
    ).type(StartYear);
  }

  clickOutside() {
    cy.xpath('//*[@id="start-date-label"]').click();
  }

  setStartHours(startHours) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[18]/div/div/div/input[5]'
    ).type(startHours);
  }

  setStartMinutes(startMinutes) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[18]/div/div/div/input[6]'
    ).type(startMinutes);
  }

  setEndMonth(endMonth) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[20]/div/div/div/input[2]'
    ).type(endMonth);
  }
  setEndDay(endDay) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[20]/div/div/div/input[3]'
    ).type(endDay);
  }

  setEndYear(endYear) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[20]/div/div/div/input[4]'
    ).type(endYear);
  }

  setEndHours(endHours) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[20]/div/div/div/input[5]'
    ).type(endHours);
  }

  setEndMinutes(endMinutes) {
    cy.xpath(
      '//*[@id="root"]/div/main/div/div[1]/div[20]/div/div/div/input[6]'
    ).type(endMinutes);
  }
}

export default CreateNewOrderPagePOM;
