class HomePagePOM {
  clickDeliveryDropDown() {
    cy.xpath('//*[@id="root"]/div/nav/div/div/ul/div[2]/div[2]/p')
      .contains("Delivery")
      .click();
  }

  clickDeliveryDropDownCreativeElement() {
    cy.xpath(
      '//*[@id="root"]/div/nav/div/div/ul/div[3]/div/div/ul/a[1]'
    ).click();
  }

  // Display Creative tab
  clickDisplayCreativeNav() {
    cy.xpath('//*[@id="simple-tab-0"]')
      .should("be.visible")
      .contains("Display creative");
  }

  clickDisplayCreativeBtn() {
    cy.xpath('//*[@id="simple-tabpanel-0"]/div/div/div/div[1]/button[1]')
      .contains("NEW Display Creative")
      .click();
  }

  //Vast Creative Tab
  clickVastCreativeNav() {
    cy.xpath('//*[@id="simple-tab-1"]')
      .should("be.visible")
      .contains("VAST creative")
      .click();
  }

  clickVastCreativeBtn() {
    cy.get(".MuiButton-contained").contains("New VAST Creative").click();
  }
}

export default HomePagePOM;
