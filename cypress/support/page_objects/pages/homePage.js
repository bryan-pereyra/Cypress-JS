export class HomePage {

    searchFor(item) {
        cy.get('[id="twotabsearchtextbox"]').type(item)
        cy.get('[id="nav-search-submit-button"]').click()
    }
}

export const onHomePage = new HomePage()