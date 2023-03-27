Feature: Search for an item and print its price in console

  Scenario Outline: Search for '<itemName>'
    Given I navigate to the website
    When Search for an '<itemName>' and click on the first result
    Then Store the price and print it

    Examples:
      | itemName           |
      | iPhone 14 Pro Max  |
      | Macbook Air        |
      | Samsung Galaxy S23 |