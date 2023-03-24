Feature: Search for an item and print its price in console

  Scenario: T1: Search for Iphone 14 Pro Max
    Given Go to www.amazon.com/
    When Search for Iphone 14 Pro Max
    Then Click on the first result and enter item details page
    And Store the price and print it