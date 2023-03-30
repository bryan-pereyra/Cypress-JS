Feature: Amazon Tests

  Scenario: Verify Hamburguer Left Menu Sections
    Given I navigate to the website
    When Click on the Hamburguer Left Menu
    Then 'Shop By Department' and 'Programs & Features' sections are visibles

  Scenario: TTF: Hamburguer Left Menu 
    Given I navigate to the website
    When Click on the Hamburguer Left Menu
    Then the 'TestingElement' section is not visible