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
    .should('have.text','New Order').click()
  }

  


}

export default OrderPagePOM;
