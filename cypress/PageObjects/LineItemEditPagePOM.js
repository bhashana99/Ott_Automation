class LineItemEditPagePOM{

    checkTableHasLineItem(){
        cy.get('table.MuiTable-root tbody') 
            .find('tr')
            .should('exist');
    }

}

export default LineItemEditPagePOM;