import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'
import { onDetailsPage } from "../../support/page_objects/pages/detailsPage"
import { onHomePage } from "../../support/page_objects/pages/homePage"
import { onResultsPage } from "../../support/page_objects/pages/resultsPage"
const items = require("../../support/page_objects/testData/items.json");

Given('Go to www.amazon.com/', () => {
    cy.openHomePage()
});

When('Search for Iphone 14 Pro Max', () => {
    onHomePage.searchFor(items.iPhone14ProMax)
});

Then('Click on the first result and enter item details page', () => {
    onResultsPage.selectFirstResult()
});

And('Store the price and print it', () => {
    onDetailsPage.storeAndPrintPrice()
});