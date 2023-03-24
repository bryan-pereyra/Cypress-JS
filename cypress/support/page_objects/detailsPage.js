export class DetailsPage {

    storeAndPrintPrice() {
        cy.get('div#apex_offerDisplay_desktop').then(priceLabel => {
            const price = priceLabel.find('[class="a-offscreen"]').first().text()
            cy.log('Item price: ' + price)
        })
    }
}

export const onDetailsPage = new DetailsPage()