describe('fl-core', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputcomponent--primary'));

  it('should render the component', () => {
    cy.get('fl-core-input').should('exist');
  });
});
