/// <reference types="cypress" />

import HomePagePOM from "../PageObjects/HomePagePOM.js";
import OrderPagePOM from "../PageObjects/OrderPagePOM.js";

let user,urls;

before(() => {
  cy.fixture("../fixtures/JsonData/userInfo.json").then((userInfo) => {
    user = userInfo;
  });
  cy.fixture("../fixtures/JsonData/pagesUrl.json").then((pageUrls) => {
    urls = pageUrls;
  });
});

const home = new HomePagePOM();
const order = new OrderPagePOM();

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
  it("Happy Path", () => {
    home.clickDeliveryDropDown();
    order.clickDeliveryDropDownOrderElement()
    order.checkPageUrl(urls.orderPageUrl)
    order.clickNewOrderBtn()
  });
});
