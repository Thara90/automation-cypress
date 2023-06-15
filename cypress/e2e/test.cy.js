describe('template spec', () => {
    it('Load web site visit weligama', () => {
      cy.visit('https://www.visitweligama.com/')
      cy.get('#logo > h1 > a > #Header1_headerimg').click
      //cy.contains(' How to get here - Weligama?')
    })
  })