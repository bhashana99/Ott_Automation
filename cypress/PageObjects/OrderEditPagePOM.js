class OrderEditPOM {
  checkIsOrderDetailsPage() {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/h2').should(
      "contain",
      "Order Details"
    );
  }

  checkOrderNameNotEmpty() {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[1]/div/div')
      .invoke("text")
      .should("not.be.empty");
  }

  editOrderName(newOrderName) {
    cy.xpath(
      '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[1]/div/div'
    ).type(newOrderName);
  }

  clickSubmitButton() {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/button[2]')
      .should("contain", "Submit")
      .click();
  }

  checkSuccessAlert() {
    cy.xpath("/html/body/div[2]/div[3]/div/h2").should("contain", "Success");
  }
  closeSuccessAlert(){
    cy.xpath('/html/body/div[2]/div[3]/div/div[2]/button')
    .should('contain','Close')
    .click()
  }

  navigateOrderPage() {
    cy.xpath(
      '//*[@id="root"]/div/nav/div/div/ul/div[3]/div/div/ul/a[2]'
    ).click();
  }
}

export default OrderEditPOM;
