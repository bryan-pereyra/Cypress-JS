Feature: Amazon Tests Scenario Outline

    Background:
        Given I navigate to the website

    Scenario: Search for item and print its price in console
        When Search for an item and click on the first result
            | itemName          |
            | iPhone 14 Pro Max |
        Then Store the price and print it

    Scenario: Search for item and print its price in console
        When Search for an item and click on the first result
            | itemName       |
            | Macbook Air M1 |
        Then Store the price and print it

    Scenario: Search for item and print its price in console
        When Search for an item and click on the first result
            | itemName           |
            | Samsung Galaxy S23 |
        Then Store the price and print it