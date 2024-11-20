/// <reference types="cypress" />

import HomePagePOM from "../PageObjects/HomePagePOM.js";
import OrderPagePOM from "../PageObjects/OrderPagePOM.js";
import CreateNewOrderPagePOM from "../PageObjects/CreateNewOrderPagePOM.js";
import LineItemPOM from "../PageObjects/LineItemPOM.js";
import OrderEditPOM from "../PageObjects/OrderEditPagePOM.js";
import LineItemEditPagePOM from "../PageObjects/LineItemEditPagePOM.js";

let user, urls, orderData, lineItemData;

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
  cy.fixture("../fixtures/JsonData/lineItem.json").then((data) => {
    lineItemData = data;
  });
});

const home = new HomePagePOM();
const order = new OrderPagePOM();
const newOrder = new CreateNewOrderPagePOM();
const lineItem = new LineItemPOM();
const orderEdit = new OrderEditPOM();
const lineItemEdit = new LineItemEditPagePOM();

const validateDateGap = () => {
  const startDateTime = new Date(
    `${orderData.startYear}-${String(orderData.startMonth).padStart(
      2,
      "0"
    )}-${String(orderData.startDay).padStart(2, "0")}T${String(
      orderData.startHours
    ).padStart(2, "0")}:${String(orderData.startMinutes).padStart(2, "0")}:00`
  );

  const endDateTime = new Date(
    `${orderData.endYear}-${String(orderData.endMonth).padStart(
      2,
      "0"
    )}-${String(orderData.endDay).padStart(2, "0")}T${String(
      orderData.endHours
    ).padStart(2, "0")}:${String(orderData.endMinutes).padStart(2, "0")}:00`
  );

  const differenceInMilliseconds = endDateTime - startDateTime;
  const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

  expect(differenceInHours).to.be.gte(
    6,
    "End date must be at least 6 hours after start date"
  );
};

//login
beforeEach(() => {
  cy.loginToHomePage(
    urls.loginPageUrl,
    user.username,
    user.password,
    urls.homePageUrl
  );
  home.clickDeliveryDropDown();
});

describe("Create New Order", () => {
  it("Navigate create new order page", () => {
    order.clickDeliveryDropDownOrderElement();
    order.checkPageUrl(urls.orderPageUrl);
    order.clickNewOrderBtn();
    newOrder.checkCreateNewOrderPageUrl(urls.createNewOrderPageUrl);
    newOrder.setOrderName(orderData.orderName);
    newOrder.setTrafficker(orderData.traffickerName);
    newOrder.setProduct(orderData.product);
    newOrder.clickSalesPersonDropDown();
    newOrder.chooseSalesPersonDropDownPersonOneOption();
    newOrder.selectSalesTypeRadioFirstLabel();
    newOrder.setScheduleReference(orderData.scheduleReference);
    newOrder.selectInvoiceTypeZero();
    newOrder.selectClientType();
    newOrder.clickEndClientField();
    newOrder.chooseEndClientNadun();
    newOrder.clickBillingClientField();
    newOrder.chooseBillingClientTestClientOne();
    newOrder.clickAgencyFiled();
    newOrder.chooseAgencyFiledFirstOption();
    newOrder.clickMonthField();
    newOrder.selectMonth(5);
    newOrder.setBudget(orderData.budget);
    newOrder.setImpression(orderData.impression);
    newOrder.setStartMonth(orderData.startMonth);
    newOrder.setStartDay(orderData.startDay);
    newOrder.setStartYear(orderData.startYear);
    newOrder.clickOutside();
    newOrder.setStartHours(orderData.startHours);
    newOrder.setStartMinutes(orderData.startMinutes);
    newOrder.clickOutside();
    newOrder.setEndMonth(orderData.endMonth);
    newOrder.setEndDay(orderData.endDay);
    newOrder.setEndYear(orderData.endYear);
    newOrder.clickOutside();
    newOrder.setEndHours(orderData.endHours);
    newOrder.setEndMinutes(orderData.endMinutes);
    newOrder.clickOutside();

    validateDateGap();

    newOrder.checkTableNumberOfRows(orderData.tableRows);
    newOrder.addFirstColumnToTable();
    newOrder.addThirdColumnToTable();
    newOrder.addFirstColumnToTable();
    newOrder.removeThirdColumnInTable();
    newOrder.removeFirstColumnInTable();

    newOrder.clickSubmitBtn();
    newOrder.validateOrderIsCreateSuccessful();
    newOrder.clickCloseBtn();
  });

  it("create new video line item", () => {
    order.clickDeliveryDropDownOrderElement();
    order.checkPageUrl(urls.orderPageUrl);

    order.selectAdCampaignUsingOrderId(orderData.orderId);
    order.clickNewLineItemBtn();
    lineItem.clickVideoIconForCreateVideoLineItem();
    lineItem.validateIsLineItemPage();
    lineItem.setLineItemName(lineItemData.lineItemName);
    lineItem.setTrafficker(lineItemData.trafficker);
    lineItem.chooseFirstUrlFromTable();
    lineItem.setTargetImpression(lineItemData.targetImpressions);
    lineItem.setCPM(lineItemData.cpm);
    lineItem.setTargetClicks(lineItemData.targetClicks);
    lineItem.setCPC(lineItemData.cpc);
    lineItem.setStartMonth(lineItemData.startMonth);
    lineItem.setStartDay(lineItemData.startDay);
    lineItem.setStartYear(lineItemData.startYear);
    lineItem.clickOutside();
    lineItem.setStartHours(lineItemData.startHours);
    lineItem.setStartMinutes(lineItemData.startMinutes);
    lineItem.clickOutside();
    lineItem.setEndMonth(lineItemData.endMonth);
    lineItem.setEndDay(lineItemData.endDay);
    lineItem.setEndYear(lineItemData.endYear);
    lineItem.clickOutside();
    lineItem.setEndHours(lineItemData.endHours);
    lineItem.setEndMinutes(lineItemData.endMinutes);
    lineItem.clickOutside();

    lineItem.clickPriorityField();
    // lineItem.chooseMediumPriority()
    // lineItem.chooseHighPriority()
    lineItem.chooseLowPriority();

    lineItem.clickSubmitBtn();
    lineItem.validateLineItemIsCreateSuccessful();
    lineItem.clickCloseBtn();
  });

  it("create new UI Banner line item", () => {
    order.clickDeliveryDropDownOrderElement();
    order.checkPageUrl(urls.orderPageUrl);

    order.selectAdCampaignUsingOrderId(orderData.orderId);

    order.clickNewLineItemBtn();

    lineItem.clickUIBannerForCreateLineItem();
    lineItem.validateIsLineItemPage();
    lineItem.setLineItemName(lineItemData.lineItemName);
    lineItem.setTrafficker(lineItemData.trafficker);
    lineItem.chooseFirstUrlWhenHaveMultipleUrl();
    lineItem.setTargetImpression(lineItemData.targetImpressions);
    lineItem.setCPM(lineItemData.cpm);
    lineItem.setTargetClicks(lineItemData.targetClicks);
    lineItem.setCPC(lineItemData.cpc);
    lineItem.setStartMonth(lineItemData.startMonth);
    lineItem.setStartDay(lineItemData.startDay);
    lineItem.setStartYear(lineItemData.startYear);
    lineItem.clickOutside();
    lineItem.setStartHours(lineItemData.startHours);
    lineItem.setStartMinutes(lineItemData.startMinutes);
    lineItem.clickOutside();
    lineItem.setEndYear(lineItemData.endYear);
    lineItem.clickOutside();
    lineItem.setEndMonth(lineItemData.endMonth);
    lineItem.clickOutside();
    lineItem.setEndDay(lineItemData.endDay);

    lineItem.clickOutside();

    lineItem.setEndHours(lineItemData.endHours);
    lineItem.setEndMinutes(lineItemData.endMinutes);
    lineItem.clickOutside();

    lineItem.clickPriorityField();
    // lineItem.chooseMediumPriority()
    // lineItem.chooseHighPriority()
    lineItem.chooseLowPriority();

    lineItem.clickSubmitBtn();
    lineItem.validateLineItemIsCreateSuccessful();
    lineItem.clickCloseBtn();
  });

  it("view and edit order details", () => {
    order.clickDeliveryDropDownOrderElement();
    order.checkPageUrl(urls.orderPageUrl);

    order.selectAdCampaignUsingOrderId(orderData.orderId);
    order.clickViewAndEditOrderTab();
    orderEdit.checkIsOrderDetailsPage();
    orderEdit.checkOrderNameNotEmpty();
    orderEdit.editOrderName(orderData.newOrderName);
    orderEdit.editTrafficker(orderData.newTrafficker);
    orderEdit.editProduct(orderData.newProductName);
    orderEdit.editScheduleReference(orderData.newScheduleReference);
    orderEdit.editSaleTypeGeneral();
    orderEdit.editSaleTypeTrading();
    orderEdit.editSaleTypeContra();
    orderEdit.editInvoiceType15();
    orderEdit.editInvoiceTypeZero();

    orderEdit.clickDirectRadio();
    orderEdit.clickAgencyRadio();
    orderEdit.checkAgencyFieldIsVisible();
    orderEdit.editAgency();

    orderEdit.editMonth(orderData.newMonthIndex);
    orderEdit.editBudget(orderData.newBudget);
    orderEdit.editImpressionCount(orderData.newImpression);

    orderEdit.checkStartDateFieldDisability();

    // orderEdit.editStartMonth(orderData.editStartMonth);
    // orderEdit.editStartDay(orderData.editStartDay);

    // orderEdit.editStartYear(orderData.editStartYear)
    // orderEdit.clickOutside();

    orderEdit.clickAddRemoveCreativeBtn();
    orderEdit.removeFirstCreative();
    orderEdit.addFirstCreative();
    orderEdit.editCreativePageSubmitBtn();
    // orderEdit.clickSubmitButton();
    orderEdit.checkSuccessAlert();
    orderEdit.closeSuccessAlert();
    orderEdit.navigateLineItemDetailsPageInEditCreativePage();
    // orderEdit.navigateOrderPage();
    // orderEdit.checkIsOrderNameChange(orderData.orderId,orderData.newOrderName)
  });

  it.only("View And Edit Line Item", () => {
    order.clickDeliveryDropDownOrderElement();
    order.checkPageUrl(urls.orderPageUrl);
    order.selectAdCampaignUsingOrderId(orderData.orderId);
    lineItemEdit.checkTableHasLineItem();
    lineItemEdit.selectFirstLineItemInTheTable();
    lineItemEdit.clickViewAndEditLineItemTab();
    lineItemEdit.checkLineItemNameNotEmpty();
    lineItemEdit.changeLineItemName(lineItemData.newLineItemName);
    lineItemEdit.changeTraffickerName(lineItemData.newTraffickerName);
    lineItemEdit.changeTargetImpression(lineItemData.newTargetImpression);
    lineItemEdit.changeCPM(lineItemData.newCPM);
    lineItemEdit.changeTargetClicks(lineItemData.newTargetClicks);
    lineItemEdit.changeCPC(lineItemData.newCPC)
  });
});
