class HomePage {
  static visit() {
    cy.visit('/');
  }
  static navigateToTesting() {
    cy.get('ul>li>a').contains('Testing').click();
  }
}

export default HomePage;
