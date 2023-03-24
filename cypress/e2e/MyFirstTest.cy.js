beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    cy.visit("https://www.unosquare.com/")
    cy.title().should('eq', 'Unosquare - Nearshore Software Engineers For Your Digital Transformation - Unosquare')
})

describe('My First Test', () => {
    it('first test', () => {
        //By Tag Name
        cy.get('input')

        //By ID (add #)
        cy.get('#email-2c3e58be-1751-4944-bf54-0f6f00dc287b')

        //By Class (add .)
        cy.get('.hs-input')

        //By Attribute Name
        cy.get('[placeholder]')

        //By Attribute Name and Value
        cy.get('[placeholder="Enter your email*"]')

        //By Class Value
        cy.get('[class="hs-input"]')

        //By Tag NAme and Attribute and Value
        cy.get('input[placeholder="Enter your email*"]')

        //By two different attributes
        cy.get('[placeholder="Enter your email*"][type="email"]')

        //By Tag Name, Attribute with Value, ID and Class Name
        cy.get('input[placeholder="Enter your email*"]#email-2c3e58be-1751-4944-bf54-0f6f00dc287b.hs-input')

        //The most recommended way by Cypress is by adding a 'data-cy' attribute
    })

    it('second test', () => {
        cy.contains('.elementor-button-text', 'Contact Us').click()

        cy.get('#label-firstname-b0570355-5abf-47d4-b00c-fcf04db071cc')
            .parents('form')
            .find('[type=submit]')
            .should('contain', 'Submit')
            .parents('form')
            .find('[name="message"]')

        cy.get('[data-id="c102802"]')

        cy.contains('section', "Let's work together").find('#firstname-b0570355-5abf-47d4-b00c-fcf04db071cc')

    })

    it.only('then and wrap methods', () => {
        cy.contains('.elementor-button-text', 'Contact Us').click()

        // cy.contains('form', 'We want to hear from you!').find('#label-firstname-b0570355-5abf-47d4-b00c-fcf04db071cc').should('contain', 'Full name')
        // cy.contains('form', 'We want to hear from you!').find('#label-email-b0570355-5abf-47d4-b00c-fcf04db071cc').should('contain', 'Email')
        // cy.contains('form', 'We want to hear from you!').find('#label-message-b0570355-5abf-47d4-b00c-fcf04db071cc').should('contain', 'How can we help you?')

        cy.contains('form', 'We want to hear from you!').then(contactForm => {
            const fullNameLabel = contactForm.find('#label-firstname-b0570355-5abf-47d4-b00c-fcf04db071cc').text()
            const emailLabel = contactForm.find('#label-email-b0570355-5abf-47d4-b00c-fcf04db071cc').text()
            const comentsLabel = contactForm.find('#label-message-b0570355-5abf-47d4-b00c-fcf04db071cc').text()

            expect(fullNameLabel).to.equal('Full name*')
            expect(emailLabel).to.equal('Email*')
            expect(comentsLabel).to.equal('How can we help you?*')
        })
    })
})
