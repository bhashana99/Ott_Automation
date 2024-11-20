/// <reference types="cypress" />

import VastCreativePagePOM from "../PageObjects/VastCreativePagePOM";

let user, urls, formData;
let durationInSeconds;

before(() => {
  cy.fixture("../fixtures/JsonData/userInfo.json").then((userInfo) => {
    user = userInfo;
  });
  cy.fixture("../fixtures/JsonData/pagesUrl.json").then((pageUrls) => {
    urls = pageUrls;
  });
  cy.fixture("../fixtures/JsonData/vastData.json").then((data) => {
    formData = data;
  });
});

//login
beforeEach(() => {
  cy.navigateVastCreativePage(
    urls.loginPageUrl,
    user.username,
    user.password,
    urls.homePageUrl,
    urls.creativePageUrl,
    urls.vastCreativePageUrl
  );
});

describe("Create New Vast Creative", () => {
  it("Happy Path", () => {
    const vast = new VastCreativePagePOM();

    vast.setVastCreativeName(formData.creativeName);
    vast.setAdUnitSize(formData.adUnitSize);
    vast.selectAdManagerHosted();

    const videoPath = "Videos/BOMBA.mp4";
    vast.attachedVideo(videoPath);
    cy.wait(2000);

    vast.checkVideoUploadState();

    vast.getDurationInSeconds().then((value) => {
      durationInSeconds = Math.floor(value);
      // cy.log(durationInSeconds)
      vast.setDurationFieldValue(durationInSeconds);
    });

    vast.clickAdvertiserField();
    vast.selectThirdOptionAdvertiser();
    vast.clickSkippableVideoField();
    vast.selectNonSkippable();
    vast.clickClickableTypeField();
    vast.selectClickableOption();
    vast.setClickThroughUrl(formData.clickThroughUrl);
    vast.clickSaveAndPreviewBtn();

    cy.wait(1000);
    //check table
    vast.checkTableCreativeName(formData.creativeName);

    // vast.checkVideoUploadState().then(($videoUrl)=>{
    //      let url = $videoUrl;
    //      cy.log(url)
    //     //  vast.checkTableVideoUrl(url);
    // })

    vast.checkTableClickThroughUrl(formData.clickThroughUrl);
    vast.checkTableAdUnitSize(formData.adUnitSize);
  });
});
