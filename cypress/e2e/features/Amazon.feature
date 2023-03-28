Feature: Amazon Tests

  Background: 
  Given I navigate to the website

   Scenario: Search for <itemName> and print its price in console
    When Search for an '<itemName>' and click on the first result
    Then Store the price and print it

    Examples:
      | itemName           |
      | iPhone 14 Pro Max  |
      | Macbook Air M1     |
      | Samsung Galaxy S23 |

  Scenario: Verify Hamburguer Left Menu
    When Click on the Hamburguer Left Menu
    Then 'Shop By Department' and 'Programs & Features' sections are visibles