import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
const url = 'https://reqres.in/api/users'

Given("'REQRES' API request with POST method is performed", () => {
    cy.request({
        method: 'POST',
        url: url,
        body: {
            "name": "Uno",
            "job": "QA"
        }
    }).as('POSTRequest')
});

Then("POST response body is validated", () => {
    cy.get('@POSTRequest').then(response => {
        expect(response.status).to.eq(201)
        cy.log(JSON.stringify(response.body))
        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('job')
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('createdAt')
    })
});


Given("'REQRES' API request with PUT method is performed", () => {
    cy.request({
        method: 'PUT',
        url: url + '/2',
        body: {
            "name": "Unosquare",
            "job": "QA"
        }
    }).as('PUTRequest')
});

Then("PUT API response body is validated", () => {
    cy.get('@PUTRequest').then(response => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
        expect(response.body).to.have.property('name')
        expect(response.body).to.have.property('job')
        expect(response.body).to.have.property('updatedAt')
    })
});

Given("'REQRES' API request with DELETE method is performed", () => {
    cy.request({
        method: 'DELETE',
        url: url + '/2',
    }).as('DELETERequest')
});

Then("DELETE API response body is validated", () => {
    cy.get('@DELETERequest').then(response => {
        expect(response.status).to.eq(204)
    })
});