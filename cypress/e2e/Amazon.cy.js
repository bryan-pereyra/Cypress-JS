import { onDetailsPage } from "../support/page_objects/detailsPage"
import { onHomePage } from "../support/page_objects/homePage"
import { onResultsPage } from "../support/page_objects/resultsPage"

describe('Amazon exercise', () => {

    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
        // Go to www.amazon.com/
        cy.visit('/')
    })

    it.only('test1 page object', () => {
        // Search for Iphone 14 Pro Max
        onHomePage.searchFor('iPhone 14 Pro Max')

        // Click on the first result and enter item details page
        onResultsPage.selectFirstResult()

        // Store the price and print it
        onDetailsPage.storeAndPrintPrice()
    })

    it('test1', () => {
        // Search for Iphone 14 Pro Max
        cy.get('[id="twotabsearchtextbox"]').type('iPhone 14 Pro Max')
        cy.get('[id="nav-search-submit-button"]').click()

        // Click on the first result and enter item details
        cy.get('div[data-index="1"]').find('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').click()

        // Store the price and print it
        cy.get('div#apex_offerDisplay_desktop').then(priceLabel => {
            const price = priceLabel.find('[class="a-offscreen"]').first().text()
            cy.log('Item price: ' + price)
        })
    })

    it('test2', () => {
        // Search for Iphone 14 Pro Max
        cy.get('[id="twotabsearchtextbox"]').type('iPhone 14 Pro Max')
        cy.get('[id="nav-search-submit-button"]').click()

        // Store the price of first result from results page
        cy.get('span.a-price').then(priceLabelResultsPage => {
            const priceResultsPage = priceLabelResultsPage.find('[class="a-offscreen"]').first().text()

            // Click on the first result and enter item details
            cy.get('div[data-index="1"]').find('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').click()

            // Compare the results page price vs details page price and print it
            cy.get('div#apex_offerDisplay_desktop').then(priceLabelItemDetailsPage => {
                const priceItemDetailsPage = priceLabelItemDetailsPage.find('[class="a-offscreen"]').first().text()
                cy.wrap(priceResultsPage).should('eq', priceItemDetailsPage)
                cy.log(priceItemDetailsPage)
            })
        })
    })
})