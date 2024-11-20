class OrderPagePOM {
  clickDeliveryDropDownOrderElement() {
    cy.xpath(
      '//*[@id="root"]/div/nav/div/div/ul/div[3]/div/div/ul/a[2]'
    ).click();
  }

  checkPageUrl(orderPageUrl) {
    cy.url().should("eq", orderPageUrl);
  }

  clickNewOrderBtn() {
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/button')
      .should("have.text", "New Order")
      .click();
  }

  // selectAdCampaignUsingOrderId(orderId) {
  //   cy.get('table > tbody > tr:nth-child(1) > td:nth-child(2) > a').click()

  // }

  selectAdCampaignUsingOrderId(orderId) {
    let orderFound = false;

    const searchAndClickOrderID = () => {
      cy.get("table tbody tr").then(($rows) => {
        Cypress._.some($rows, ($row) => {
          const text = Cypress.$($row).find("td a").text();
          if (text == orderId) {
            cy.wrap($row).find("td a").click();
            orderFound = true;
            return true;
          }
        });
      });
    };

    const paginateAndSearch = () => {
      searchAndClickOrderID();

      cy.get("body").then(($body) => {
        if (orderFound) return;

        if ($body.find('[aria-label="Go to next page"]').is(":visible")) {
          cy.get('[aria-label="Go to next page"]')
            .click()
            .then(() => {
              cy.wait(1000);
              paginateAndSearch();
            });
        } else if (!orderFound) {
          cy.log(`Order ID ${orderId} not found.`);
          expect(orderFound, `Order ID ${orderId} should exist in the table`).to
            .be.true;
        }
      });
    };

    paginateAndSearch();
  }

  clickNewLineItemBtn() {
    cy.xpath('//*[@id="simple-tabpanel-0"]/div/div[3]/button[1]')
      .should("contain", "New Line Item")
      .click();
  }

  clickViewAndEditOrderTab() {
    cy.xpath('//*[@id="simple-tab-1"]')
      .should("contain", "VIEW & EDIT ORDER")
      .click();
  }
}

export default OrderPagePOM;
