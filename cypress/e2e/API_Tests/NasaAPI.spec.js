const NASA = require("../../support/page_objects/testData/NasaAPIResponse.json");

context("NASA GET Requests", () => {

  it("Get 'APOD'", () => {
    cy.request({
      method: 'GET',
      url: NASA.apod_url,
      qs: {
        'api_key': NASA.api_key,
        'date': '2023-04-04'
      }
    }).then((response) => {
      //cy.log(JSON.stringify(response.body))
      expect(response.status).to.eq(200)
      expect(response.body).to.be.deep.eq(NASA.apod_body)
    })
  })

  it("Get 'Earth'", () => {
    cy.request({
      method: 'GET',
      url: NASA.earth_url,
      qs: {
        'lon': '100.75',
        'lat': '1.5',
        'date': '2014-02-01',
        'api_key': NASA.api_key
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('date')
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('url')
    })
  })

  it.only("Post Reqres", () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: {
        "name": "Uno",
        "job": "QA"
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      cy.log(JSON.stringify(response.body))
    })
  })

  it.only("Put Reqres", () => {
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      body: {
        "name": "Unosquare",
        "job": "QA"
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(JSON.stringify(response.body))
    })
  })

  it.only("Delete Reqres", () => {
    cy.request({
      method: 'Delete',
      url: 'https://reqres.in/api/users/2',
    }).then((response) => {
      expect(response.status).to.eq(204)
      cy.log(JSON.stringify(response.body))
    })
  })


})
