import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { onDetailsPage } from "../../support/page_objects/pages/detailsPage"
import { onHomePage } from "../../support/page_objects/pages/homePage"
import { onResultsPage } from "../../support/page_objects/pages/resultsPage"

Given('I navigate to the website', () => {
    cy.openHomePage()
});

When('Search for an {string} and click on the first result', (itemName) => {
    onHomePage.searchFor(itemName)
    onResultsPage.selectFirstResult()
});

Then('Store the price and print it', () => {
    onDetailsPage.storeAndPrintPrice()
    onDetailsPage.assertPriceIsNotEmpty()
    onDetailsPage.assertPriceIsNotNull()
    onDetailsPage.assertPriceIsNotZero()
});