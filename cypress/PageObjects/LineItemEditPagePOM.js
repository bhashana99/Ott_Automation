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

  changeTargetImpression(newTargetImpression){
    cy.xpath('//*[@id="simple-tabpanel-2"]/div/div/div/div[1]/div[5]/div/div')
    .clear()
    .type(newTargetImpression)
  }

  changeCPM(newCPM){
    cy.xpath('//*[@id="simple-tabpanel-2"]/div/div/div/div[1]/div[6]/div/div')
    .clear()
    .type(newCPM)
  }

  changeTargetClicks(newTargetClicks){
    cy.xpath('//*[@id="simple-tabpanel-2"]/div/div/div/div[1]/div[8]/div/div')
    .clear()
    .type(newTargetClicks)
  }

  changeCPC(newCPC){
    cy.xpath('//*[@id="simple-tabpanel-2"]/div/div/div/div[1]/div[9]/div/div')
    .clear()
    .type(newCPC)
  }

  clickPriorityField(){
    cy.xpath('//*[@id="simple-tabpanel-2"]/div/div/div/div[1]/div[14]/div[1]/div').click()
}  

chooseMediumPriority(){
    cy.get('[data-value = "medium-priority"]').click()
}
chooseHighPriority(){
    cy.get('[data-value = "high-priority"]').click()
}

chooseLowPriority(){
    cy.get('[data-value = "low-priority"]').click()
}

clickSubmitBtn(){
    cy.xpath('//*[@id="simple-tabpanel-2"]/div/div/div/button[3]')
    .should('contain','Submit')
    .click()
}

clickBackBtn(){
    cy.xpath('//*[@id="simple-tabpanel-2"]/div/div/div/button[2]')
    .should('contain','Back')
    .click()
}
  
validateLineItemIsCreateSuccessful() {
    cy.xpath("/html/body/div[2]/div[3]/div").should("be.visible")
    .and("contain", "Success");
    cy.xpath("/html/body/div[2]/div[3]/div/div[1]").should(
      "contain",
      "Data has been successfully saved."
    );
  }

}

export default LineItemEditPagePOM;
