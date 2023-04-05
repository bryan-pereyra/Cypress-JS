const url = 'https://reqres.in/api/users'

context("Reqres Requests", () => {

    it("POST Reqres", () => {
        cy.request({
            method: 'POST',
            url: url,
            body: {
                "name": "Uno",
                "job": "QA"
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            cy.log(JSON.stringify(response.body))
        })
    })

    it("PUT Reqres", () => {
        cy.request({
            method: 'PUT',
            url: url + '/2',
            body: {
                "name": "Unosquare",
                "job": "QA"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        })
    })

    it("DELETE Reqres", () => {
        cy.request({
            method: 'Delete',
            url: url + '/2',
        }).then((response) => {
            expect(response.status).to.eq(204)
        })
    })
})