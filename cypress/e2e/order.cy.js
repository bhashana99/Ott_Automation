/// <reference types="cypress" />

import HomePagePOM from "../PageObjects/HomePagePOM.js";
import OrderPagePOM from "../PageObjects/OrderPagePOM.js";
import CreateNewOrderPagePOM from "../PageObjects/CreateNewOrderPagePOM.js";

let user, urls, orderData;

before(() => {
  cy.fixture("../fixtures/JsonData/userInfo.json").then((userInfo) => {
    user = userInfo;
  });
  cy.fixture("../fixtures/JsonData/pagesUrl.json").then((pageUrls) => {
    urls = pageUrls;
  });
  cy.fixture("../fixtures/JsonData/newOrder.json").then((data) => {
    orderData = data;
  });
});

const home = new HomePagePOM();
const order = new OrderPagePOM();
const newOrder = new CreateNewOrderPagePOM();

//login
beforeEach(() => {
  cy.loginToHomePage(
    urls.loginPageUrl,
    user.username,
    user.password,
    urls.homePageUrl
  );
});

describe("Create New Order", () => {
  it("Navigate create new order page", () => {
    home.clickDeliveryDropDown();
    order.clickDeliveryDropDownOrderElement();
    order.checkPageUrl(urls.orderPageUrl);
    order.clickNewOrderBtn();
    newOrder.checkCreateNewOrderPageUrl(urls.createNewOrderPageUrl);
    newOrder.setOrderName(orderData.orderName);
    newOrder.setTrafficker(orderData.traffickerName);
    newOrder.setProduct(orderData.product);
    newOrder.clickSalesPersonDropDown()
    newOrder.chooseSalesPersonDropDownPersonOneOption()
  });

  
});
