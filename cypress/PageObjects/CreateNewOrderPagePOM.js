class CreateNewOrderPagePOM {
  checkCreateNewOrderPageUrl(createNewOrderPageUrl) {
    cy.url().should("eq", createNewOrderPageUrl);
  }

  setOrderName(orderName){
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[1]/div/div')
    .type(orderName)
  }

  setTrafficker(traffickerName){
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[2]/div/div')
    .type(traffickerName)
  }

  setProduct(product){
    cy.xpath('//*[@id="root"]/div/main/div/div[1]/div[3]/div/div')
    .type(product)
  }

}

export default CreateNewOrderPagePOM;
