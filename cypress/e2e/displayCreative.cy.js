/// <reference types="cypress" />
import DisplayCreativePagePOM from "../PageObjects/DisplayCreativePagePOM.js";

let user, urls, formData;

before(() => {
  cy.fixture("../fixtures/JsonData/userInfo.json").then((userInfo) => {
    user = userInfo;
  });
  cy.fixture("../fixtures/JsonData/pagesUrl.json").then((pageUrls) => {
    urls = pageUrls;
  });
  cy.fixture("../fixtures/JsonData/formData.json").then((data) => {
    formData = data;
  });
});

//Login
beforeEach(() => {
  cy.navigateDisplayCreativePage(
    urls.loginPageUrl,
    user.username,
    user.password,
    urls.homePageUrl,
    urls.creativePageUrl,
    urls.newDisplayCreativePageUrl
  );
});

describe("Display Creative Happy path", () => {
  const newDisplayCreative = new DisplayCreativePagePOM();

  //Enter valid form data
  it("TC_OTT_DC_001", () => {
    newDisplayCreative.setCreativeName(formData.creativeName);
    newDisplayCreative.clickBannerSizeField();
    newDisplayCreative.checkBannerSizeOptionsIsVisibility();
    newDisplayCreative.selectBannerSize();
    newDisplayCreative.selectHostType();

    const imagePath = "../fixtures/Images/980x551@.png";
    newDisplayCreative.uploadImage(imagePath);

    newDisplayCreative.clickAdvertiserField();
    newDisplayCreative.selectThirdOptionAdvertiserField();
    newDisplayCreative.clickClickableTypeField();
    newDisplayCreative.chooseClickableOption();
    newDisplayCreative.setClickThroughUrl(formData.clickThroughUrl);
    newDisplayCreative.clickSaveAndPreviewBtn();

    //Validate Table
    //1st column
    newDisplayCreative.checkFirstColumn(formData.creativeName);

    //2nd column
    newDisplayCreative.checkSecondColumn();

    //3rd column
    newDisplayCreative.checkThirdColumn(formData.clickThroughUrl);

    //4th column
    // cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(4)').contains('980 x 551')

    //5th column
    newDisplayCreative.checkFifthColumn();
  });
});
