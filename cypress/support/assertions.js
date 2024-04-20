Cypress.Commands.add('checkUrl', (path) => {
  cy.url().should('eql', `${Cypress.config('baseUrl')}${path}`);
});
