export class HomePage {

    searchFor(item) {
        cy.get('[id="twotabsearchtextbox"]').clear()
        cy.get('[id="twotabsearchtextbox"]').type(item)
        cy.get('[id="nav-search-submit-button"]').click()
    }

    clickHamburguerLeftMenu() {
        cy.get('[id="nav-hamburger-menu"]').click()
    }
}

export const onHomePage = new HomePage()