import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { onHomePage } from "../../support/page_objects/pages/homePage"
import { onLeftMenu } from '../../support/page_objects/pages/leftMenu'

When('Click on the Hamburguer Left Menu', (itemName) => {
    onHomePage.clickHamburguerLeftMenu()
});

Then("'Shop By Department' and 'Programs & Features' sections are visibles", () => {
    onLeftMenu.assertShopByDepartmentSectionsAreVisible()
    onLeftMenu.assertProgramsAndFeaturesSectionsAreVisible()
});