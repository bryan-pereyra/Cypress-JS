export class LeftMenuPage {

    test() {
        cy.contains("div.hmenu-item", 'shop by department').should('be.visible')
        cy.readFile('cypress/support/page_objects/testData/ShopByDepartment.json').then(Departments => {
            for (let i = 0; i < Departments.Sections.length - 1; i++) {
                cy.contains('[data-menu-id]', Departments.Sections[i]).should('be.visible')
            }
        })
    }

    assertShopByDepartmentSectionsAreVisible() {
        cy.contains("div.hmenu-item", 'shop by department').should('be.visible')
        cy.readFile('cypress/support/page_objects/testData/ShopByDepartment.json').then(ShopByDepartment => {
            cy.wrap(ShopByDepartment.Sections).each(section => {
                cy.contains('[data-menu-id]', section).should('be.visible')
            })
        })
    }

    assertProgramsAndFeaturesSectionsAreVisible() {
        cy.contains("div.hmenu-item", 'programs & features').should('be.visible')
        cy.readFile('cypress/support/page_objects/testData/ProgramsAndFeatures.json').then(ProgramsAndFeatures => {
            cy.wrap(ProgramsAndFeatures.Sections).each(section => {
                cy.contains('[data-menu-id]', section).scrollIntoView().should('be.visible')
            })
        })
    }
}


export const onLeftMenu = new LeftMenuPage()