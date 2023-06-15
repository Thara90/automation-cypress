describe('template spec', () => {
    it('Load web site visit weligama', () => {
      cy.visit('https://www.visitweligama.com/')
      cy.get('#logo > h1 > a > #Header1_headerimg').click
      cy.get('.menu > :nth-child(2) > a').click
      cy.get(':nth-child(3) > [href="http://visit-weligama.blogspot.com/p/things-to-do-in-weligama-sri-lanka.html"]').click
      //cy.contains(' How to get here - Weligama?')
    })
  })