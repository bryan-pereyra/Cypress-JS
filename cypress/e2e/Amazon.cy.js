import { onDetailsPage } from "../support/page_objects/pages/detailsPage"
import { onHomePage } from "../support/page_objects/pages/homePage"
import { onResultsPage } from "../support/page_objects/pages/resultsPage"
const items = require("../support/page_objects/testData/items.json");

describe('Search for an item and print its price in console', () => {

    it('T1: Search for Iphone 14 Pro Max', () => {
        cy.openHomePage() // Go to www.amazon.com/
        onHomePage.searchFor(items.iPhone14ProMax) // Search for Iphone 14 Pro Max
        onResultsPage.selectFirstResult() // Click on the first result and enter item details page
        onDetailsPage.storeAndPrintPrice() // Store the price and print it
    })
})