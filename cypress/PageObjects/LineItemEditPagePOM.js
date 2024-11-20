class LineItemEditPagePOM {
  checkTableHasLineItem() {
    cy.get("table.MuiTable-root tbody").find("tr").should("exist");
  }

  selectFirstLineItemInTheTable() {
    cy.get(
      'table tbody tr:first-child td:first-child input[type="checkbox"]'
    ).click()
  

    cy.get(
      'table tbody tr:first-child td:first-child input[type="checkbox"]'
    ).should("be.checked");
  }
}

export default LineItemEditPagePOM;
