const elements = require ("../support/page_objects/testData/ShopByDepartment.json");

export class LeftMenuPage {
    
/*     assertDepartmentSectionsAreVisible() {
        cy.get("a.hmenu-item").then(($el) => {
            return Cypress._.map($el, 'innerText')
        }).should('deep.equal', elements.ShopByDepartment)
    } */

    assertDepartmentSectionsAreVisible() {
        cy.get("div.hmenu-item").then(list => {
            cy.get('a.hmenu-item').each(section => {
                cy.wrap(section).should('contain', elements.ShopByDepartment)
            })
        })
    }
}

export const onLeftMenu = new LeftMenuPage()