class LineItemPOM{
    clickVideoIconForCreateVideoLineItem(){
        cy.xpath('//*[@id="root"]/div/main/div/div/div[1]')
        .click()
    }

    validateIsLineItemPage(){
        cy.xpath('//*[@id="root"]/div/main/div/div/h5')
        .should('contain','New Line Item')
    }
    setLineItemName(lineItemName){
        cy.xpath('//*[@id="root"]/div/main/div/div/div[1]/div[1]/div/div')
        .type(lineItemName)
    }
}

export default LineItemPOM;