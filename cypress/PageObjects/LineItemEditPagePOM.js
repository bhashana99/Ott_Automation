class LineItemEditPagePOM {
  checkTableHasLineItem() {
    cy.get("table.MuiTable-root tbody").find("tr").should("exist");
  }

  selectFirstLineItemInTheTable() {
    cy.get(
      'table tbody tr:first-child td:first-child input[type="checkbox"]'
    ).click();

    cy.get(
      'table tbody tr:first-child td:first-child input[type="checkbox"]'
    ).should("be.checked");
  }

  clickViewAndEditLineItemTab() {
    cy.xpath('//*[@id="simple-tab-2"]')
      .should("contain", "VIEW & EDIT LINE ITEM")
      .click();
  }

  checkLineItemNameNotEmpty(){
    cy.wait(1000)
    cy.xpath('//*[@id="simple-tabpanel-2"]/div/div/div/div[1]/div[1]/div/div')
    .invoke("text")
    .should("not.be.empty");
  }

  changeLineItemName(newLineItemName){
    cy.xpath('//*[@id="simple-tabpanel-2"]/div/div/div/div[1]/div[1]/div/div')
    .clear()
    .type(newLineItemName)
  }

  changeTraffickerName(newTraffickerName){
    cy.xpath('//*[@id="simple-tabpanel-2"]/div/div/div/div[1]/div[2]/div/div')
    .clear()
    .type(newTraffickerName) 
  }


}

export default LineItemEditPagePOM;
