export class DetailsPage {

    storeAndPrintPrice() {
        cy.get('div#apex_offerDisplay_desktop').then(priceLabel => {
            const price = priceLabel.find('[class="a-offscreen"]').first().text()
            cy.log('Item price: ' + price)
            expect(price).to.not.be.empty
            expect(price).to.not.be.null
            expect(price).to.not.equal('$0.00')
        })
    }
}

export const onDetailsPage = new DetailsPage()