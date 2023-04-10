import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
const NASA = require("../../support/page_objects/testData/NasaAPIResponse.json");

Given("'APOD' API request is performed", () => {
    cy.request({
        method: 'GET',
        url: NASA.apod_url,
        qs: {
            'api_key': NASA.api_key,
            'date': '1997-07-04'
        }
    }).as('APODRequest')
});

Then("'APOD' API response body is validated", () => {
    cy.get('@APODRequest').then(response => {
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(200)
        expect(response.body).to.be.deep.eq(NASA.apod_body)
    })
});

Given("'Earth' API request is performed", () => {
    cy.request({
        method: 'GET',
        url: NASA.earth_url,
        qs: {
            'lon': '100.75',
            'lat': '1.5',
            'date': '2014-02-01',
            'api_key': NASA.api_key
        }
    }).as('EarthRequest')
});

Then("'Earth' API response body is validated", () => {
    cy.get('@EarthRequest').then(response => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('date')
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('url')
    })
});