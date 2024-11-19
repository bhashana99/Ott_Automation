class OrderEditPOM {
  checkIsOrderDetailsPage() {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/h2').should(
      "contain",
      "Order Details"
    );
  }

  checkOrderNameNotEmpty() {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[1]/div/div')
      .invoke("text")
      .should("not.be.empty");
  }

  editOrderName(newOrderName) {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[1]/div/div')
      .clear()
      .type(newOrderName);
  }

  editTrafficker(newTrafficker) {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[2]/div/div')
      .clear()
      .type(newTrafficker);
  }

  editProduct(newProductName) {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[3]/div/div')
      .clear()
      .type(newProductName);
  }

  editScheduleReference(newScheduleReference) {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[4]/div/div')
      .clear()
      .type(newScheduleReference);
  }

  editSaleTypeGeneral() {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[6]/div/label[1]')
      .should("contain", "General")
      .click();
  }

  editSaleTypeTrading() {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[6]/div/label[2]')
      .should("contain", "Trading")
      .click();
  }

  editSaleTypeContra() {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[6]/div/label[3]')
      .should("contain", "Contra")
      .click();
  }

  editInvoiceType15() {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[8]/div/label[1]')
      .should("contain", "15%")
      .click();
  }

  editInvoiceTypeZero() {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[8]/div/label[2]')
      .should("contain", "0%")
      .click();
  }

  clickAgencyRadio() {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[9]/div/label[1]')
      .should("contain", "Agency")
      .click();
  }

  clickDirectRadio() {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[9]/div/label[2]')
      .should("contain", "Direct Client")
      .click();
  }

  checkAgencyFieldIsVisible() {
    cy.xpath(
      '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[10]/div/div'
    ).should("be.visible");
  }

  editAgency() {
    cy.xpath(
      '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[10]/div/div'
    ).click();
    cy.xpath('//*[@id="menu-"]/div[3]/ul/li')
      .should("contain", "test agency one")
      .click();
  }

  editMonth(newMonthIndex) {
    cy.xpath(
      '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[11]/div/div'
    ).click();

    cy.get('[aria-labelledby="month-label"]')
      .find("li")
      .eq(newMonthIndex)
      .click();
  }

  editBudget(newBudget) {
    cy.xpath(
      '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[16]/div/div'
    ).type(newBudget);
  }

  editImpressionCount(newImpression) {
    cy.xpath(
      '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[18]/div/div'
    ).type(newImpression);
  }

  checkStartDateFieldDisability() {
    const currentDate = new Date();
    
    cy.xpath(
        '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[21]/div/div/div/input[4]'
    )
    .invoke("val")
    .then((startYear) => {
        cy.log(`Start Year: ${startYear}`);

        cy.xpath(
            '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[21]/div/div/div/input[2]'
        )
        .invoke("val")
        .then((startMonth) => {
            cy.log(`Start Month: ${startMonth}`);

            cy.xpath(
                '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[21]/div/div/div/input[3]'
            )
            .invoke("val")
            .then((startDate) => {
                cy.log(`Start Date: ${startDate}`);

                cy.xpath(
                    '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[21]/div/div/div/input[5]'
                )
                .invoke("val")
                .then((startHour) => {
                    cy.log(`Start Hour: ${startHour}`);

                    cy.xpath(
                        '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[21]/div/div/div/input[6]'
                    )
                    .invoke("val")
                    .then((startMinute) => {
                        cy.log(`Start Minute: ${startMinute}`);

                        cy.xpath(
                            '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[21]/div/div/div/select'
                        )
                        .invoke("val")
                        .then((amPm) => {
                            cy.log(`AM/PM: ${amPm}`);

                            
                            let adjustedHour = parseInt(startHour, 10);
                            if (amPm === "pm" && adjustedHour < 12) {
                                adjustedHour += 12; 
                            } else if (amPm === "am" && adjustedHour === 12) {
                                adjustedHour = 0; 
                            }

                            
                            const paddedMonth = startMonth.padStart(2, '0');
                            const paddedDate = startDate.padStart(2, '0');
                            const paddedHour = adjustedHour.toString().padStart(2, '0');
                            const paddedMinute = startMinute.padStart(2, '0');

                            
                            const startDateTime = `${startYear}-${paddedMonth}-${paddedDate}T${paddedHour}:${paddedMinute}:00`;

                            cy.log(`Full Start Date (ISO 8601 format): ${startDateTime}`);
                            
                            
                            const startDateTimeObj = new Date(startDateTime);
                            cy.log(`Start DateTime object: ${startDateTimeObj}`);

                            
                            if (startDateTimeObj < currentDate) {
                                cy.log("The start date is in the past.");
                                cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div/div/div[21]/div/div/div/input[2]')
                                .should('have.attr',"disabled")

                                cy.log("The start date can not change.");
                            } else {
                                cy.log("The start date can change.");
                            }
                        });
                    });
                });
            });
        });
    });
}

editStartMonth(editStartMonth) {
  cy.xpath(
    '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[21]/div/div/div/input[2]'
  ).type(editStartMonth);
}
editStartDay(editStartDay) {
  cy.xpath(
    '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[21]/div/div/div/input[3]'
  ).type(editStartDay);
}

editStartYear(editStartYear) {
  cy.xpath(
    '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[21]/div/div/div/input[4]'
  ).type(editStartYear);
}

clickOutside() {
  cy.xpath('//*[@id="start-date-label"]').click();
}

editStartHours(editStartHours) {
  cy.xpath(
    '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[21]/div/div/div/input[5]'
  ).type(editStartHours);
}

editStartMinutes(editStartMinutes) {
  cy.xpath(
    '//*[@id="simple-tabpanel-1"]/div/div/div/div/div[21]/div/div/div/input[6]'
  ).type(editStartMinutes);
}

  

  clickSubmitButton() {
    cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/button[2]')
      .should("contain", "Submit")
      .click();
  }

  checkSuccessAlert() {
    cy.xpath("/html/body/div[2]/div[3]/div/h2").should("contain", "Success");
  }

  closeSuccessAlert() {
    cy.xpath("/html/body/div[2]/div[3]/div/div[2]/button")
      .should("contain", "Close")
      .click();
  }

  navigateOrderPage() {
    cy.xpath(
      '//*[@id="root"]/div/nav/div/div/ul/div[3]/div/div/ul/a[2]'
    ).click();
  }

  checkIsOrderNameChange(orderId, newOrderName) {
    let orderFound = false;

    const searchAndValidateOrderName = () => {
      cy.get("table tbody tr").each(($row) => {
        const text = Cypress.$($row).find("td a").text();
        if (text == orderId) {
          cy.wrap($row)
            .find("td:nth-child(1)") 
            .invoke("text")
            .then((orderName) => {
              const trimmedOrderName = orderName.trim();
              expect(trimmedOrderName).to.eq(newOrderName); 
            });
          orderFound = true;
          return false; 
        }
      });
    };

    const paginateAndSearch = () => {
      searchAndValidateOrderName();

      cy.get("body").then(($body) => {
        if (orderFound) return; 

        if ($body.find('[aria-label="Go to next page"]').is(":visible")) {
          cy.get('[aria-label="Go to next page"]')
            .click()
            .then(() => {
              cy.wait(1000); 
              paginateAndSearch(); 
            });
        } else if (!orderFound) {
          cy.log(`Order ID ${orderId} not found.`);
          expect(orderFound, `Order ID ${orderId} should exist in the table`).to
            .be.true;
        }
      });
    };

    paginateAndSearch();
  }
}

export default OrderEditPOM;
