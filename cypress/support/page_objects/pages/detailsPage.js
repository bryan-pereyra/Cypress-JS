export class DetailsPage {

    storeAndPrintPrice() {
        cy.get('div#apex_offerDisplay_desktop').then(priceLabel => {
            const price = priceLabel.find('[class="a-offscreen"]').first().text()
            cy.log('Item price: ' + price)
        })
    }

    assertPriceIsNotEmpty() {
        cy.get('div#apex_offerDisplay_desktop').then(priceLabel => {
            const price = priceLabel.find('[class="a-offscreen"]').first().text()
            expect(price).to.not.be.empty
        })
    }

    assertPriceIsNotNull() {
        cy.get('div#apex_offerDisplay_desktop').then(priceLabel => {
            const price = priceLabel.find('[class="a-offscreen"]').first().text()
            expect(price).to.not.be.null
        })
    }

    assertPriceIsNotZero() {
        cy.get('div#apex_offerDisplay_desktop').then(priceLabel => {
            const price = priceLabel.find('[class="a-offscreen"]').first().text()
            expect(price).to.not.equal('$0.00')
        })
    }
}

export const onDetailsPage = new DetailsPage()