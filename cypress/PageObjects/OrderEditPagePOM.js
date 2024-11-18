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
    )
    .clear()
    .type(newOrderName);
  }

  editTrafficker(newTrafficker){
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[2]/div/div')
    .clear()
    .type(newTrafficker)
  }

  editProduct(newProductName){
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[3]/div/div')
    .clear()
    .type(newProductName)
  }

  clickSubmitButton() {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/button[2]')
      .should("contain", "Submit")
      .click();
  }

  checkSuccessAlert() {
    cy.xpath("/html/body/div[2]/div[3]/div/h2").should("contain", "Success");
  }

  closeSuccessAlert() {
    cy.xpath("/html/body/div[2]/div[3]/div/div[2]/button")
      .should("contain", "Close")
      .click();
  }

  navigateOrderPage() {
    cy.xpath(
      '//*[@id="root"]/div/nav/div/div/ul/div[3]/div/div/ul/a[2]'
    ).click();
  }

    checkIsOrderNameChange(orderId, newOrderName) {
      let orderFound = false;

      const searchAndValidateOrderName = () => {
          cy.get("table tbody tr").each(($row) => {
              const text = Cypress.$($row).find("td a").text();
              if (text == orderId) {
                  cy.wrap($row)
                      .find("td:nth-child(1)") // Assuming the order name is in the second column
                      .invoke('text') // Extract the text content of the order name
                      .then((orderName) => {
                          const trimmedOrderName = orderName.trim();
                          expect(trimmedOrderName).to.eq(newOrderName); // Assert it matches the edited name
                      });
                  orderFound = true;
                  return false; // Break out of the loop
              }
          });
      };

      const paginateAndSearch = () => {
          searchAndValidateOrderName();

          cy.get("body").then(($body) => {
              if (orderFound) return; // Exit if the order has been found

              if ($body.find('[aria-label="Go to next page"]').is(":visible")) {
                  cy.get('[aria-label="Go to next page"]')
                      .click()
                      .then(() => {
                          cy.wait(1000); // Wait for the next page to load
                          paginateAndSearch(); // Recursively search the next page
                      });
              } else if (!orderFound) {
                  cy.log(`Order ID ${orderId} not found.`);
                  expect(orderFound, `Order ID ${orderId} should exist in the table`).to.be.true;
              }
          });
      };

      paginateAndSearch();
  }



  clickAgencyRadio(){
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[9]/div/label[1]')
    .should('contain','Agency')
    .click()
  }

  checkAgencyFieldIsVisible(){
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[10]/div/div')
    .should('be.visible')
  }


}

export default OrderEditPOM;
