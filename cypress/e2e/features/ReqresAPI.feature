Feature: Reqres API

    Scenario: POST Method - Reqres API
        Given 'REQRES' API request with POST method is performed
        Then POST response body is validated

    Scenario: PUT Method - Reqres API
        Given 'REQRES' API request with PUT method is performed
        Then PUT API response body is validated

    Scenario: DELETE Method - Reqres API
        Given 'REQRES' API request with DELETE method is performed
        Then DELETE API response body is validated