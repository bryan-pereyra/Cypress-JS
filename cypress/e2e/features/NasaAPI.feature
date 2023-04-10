Feature: NASA API

    Scenario: GET Method - APOD API
        Given 'APOD' API request is performed
        Then 'APOD' API response body is validated

    Scenario: GET Method - Earth API
        When 'Earth' API request is performed
        Then 'Earth' API response body is validated