import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor'
import { onDetailsPage } from "../../support/page_objects/pages/detailsPage"
import { onHomePage } from "../../support/page_objects/pages/homePage"
import { onResultsPage } from "../../support/page_objects/pages/resultsPage"
const items = require("../../support/page_objects/testData/items.json");

Given('I navigate to the website', () => {
    cy.openHomePage()
});

When('Search for an {string} and click on the first result', (itemName) => {
    onHomePage.searchFor(itemName)
    onResultsPage.selectFirstResult()
});

Then('Store the price and print it', () => {
    onDetailsPage.storeAndPrintPrice()
});