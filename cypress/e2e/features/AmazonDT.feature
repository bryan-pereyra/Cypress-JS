Feature: Amazon Tests Scenario Outline

    Background:
        Given I navigate to the website

    Scenario: Search for iPhone 14 Pro Max and print its price in console
        When Search for an item and click on the first result
            | itemName          |
            | iPhone 14 Pro Max |
        Then Store the price and print it

    Scenario: Search for Macbook Air M1 and print its price in console
        When Search for an item and click on the first result
            | itemName       |
            | Macbook Air M1 |
        Then Store the price and print it

    Scenario: Search for Samsung Galaxy S23 and print its price in console
        When Search for an item and click on the first result
            | itemName           |
            | Samsung Galaxy S23 |
        Then Store the price and print it