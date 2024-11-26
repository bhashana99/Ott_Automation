class ReportingPOM {
  storeLineId() {
    cy.xpath('//*[@id="enhanced-table-checkbox-0"]')
      .invoke("text")
      .then((lineItemId) => {
        const realLineId = lineItemId.trim().split('-')[0];
        cy.log(`${realLineId}`);
        // cy.wrap(lineItemId.trim()).as("lineItemId");
      });
  }
}

export default ReportingPOM;
