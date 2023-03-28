export class LeftMenuPage {

    assertDepartmentSection() {
        cy.contains('div.hmenu-item', 'shop by department').should('be.visible')
        cy.contains('a[data-menu-id="5"]', 'Electronics').should('be.visible')
        cy.contains('a[data-menu-id="6"]', 'Computers').should('be.visible')
        cy.contains('a[data-menu-id="7"]', 'Smart Home').should('be.visible')
        cy.contains('a[data-menu-id="8"]', 'Arts & Crafts').should('be.visible')
    }
}

export const onLeftMenu = new LeftMenuPage()