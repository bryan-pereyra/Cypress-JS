import { onDetailsPage } from "../support/page_objects/detailsPage"
import { onHomePage } from "../support/page_objects/homePage"
import { onResultsPage } from "../support/page_objects/resultsPage"

describe('Search for an item and print its price in console', () => {

    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        // Go to www.amazon.com/
        cy.visit('/')
    })

    it('T1: Search for Iphone 14 Pro Max', () => {
        // Search for Iphone 14 Pro Max
        onHomePage.searchFor('iPhone 14 Pro Max')

        // Click on the first result and enter item details page
        onResultsPage.selectFirstResult()

        // Store the price and print it
        onDetailsPage.storeAndPrintPrice()
    })
})