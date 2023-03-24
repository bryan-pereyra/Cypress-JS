export class ResultsPage {

    selectFirstResult() {
        cy.get('div[data-index="1"]').find('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').click()
    }
}

export const onResultsPage = new ResultsPage()