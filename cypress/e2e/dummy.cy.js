import HomePage from '../pages/HomePage';

describe('test', () => {
  let testingTopics;

  before('Get the test data', () => {
    cy.fixture('pageContent/testingTopics').then((data) => {
      testingTopics = data;
    });
  });

  it('test', () => {
    HomePage.visit();
    HomePage.navigateToTesting();
    cy.checkUrl(Cypress.env('testing'));
    Object.keys(testingTopics).forEach((key) => {
      cy.get('div>h2').should('contain', testingTopics[key]);
    });
  });
});
