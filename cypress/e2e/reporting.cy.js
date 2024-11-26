/// <reference types="cypress" />

import HomePagePOM from "../PageObjects/HomePagePOM.js";
import OrderPagePOM from "../PageObjects/OrderPagePOM.js";

let user, urls,reportingData;

before(() => {
    cy.fixture("../fixtures/JsonData/userInfo.json").then((userInfo) => {
      user = userInfo;
    });
    cy.fixture("../fixtures/JsonData/pagesUrl.json").then((pageUrls) => {
      urls = pageUrls;
    });
    cy.fixture("../fixtures/JsonData/reportingData.json").then((data) => {
        reportingData = data;
    });
});

const home = new HomePagePOM();
const order = new OrderPagePOM();

beforeEach(() => {
    cy.loginToHomePage(
      urls.loginPageUrl,
      user.username,
      user.password,
      urls.homePageUrl
    );
    home.clickDeliveryDropDown();
    order.clickDeliveryDropDownOrderElement();
    order.checkPageUrl(urls.orderPageUrl);
  });


  describe("Validate Report Lind Item Details",()=>{
    it("Check Line Item Using Order Id",()=>{  
        order.selectAdCampaignUsingOrderId(reportingData.orderId);
      
    })
  })