Feature: Amazon Tests

  Scenario: Search for <itemName> and print its price in console
    Given I navigate to the website
    When Search for an '<itemName>' and click on the first result
    Then Store the price and print it

    Examples:
      | itemName           |
      | iPhone 14 Pro Max  |
      | Macbook Air M1     |
      | Samsung Galaxy S23 |